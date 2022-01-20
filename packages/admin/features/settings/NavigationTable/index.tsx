import React, { useContext, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import NProgress from 'nprogress';
import _ from 'lodash';
import { Form, FormInstance, Input, Table } from 'antd';

// components
import { TaxonomyType } from '~/components/ComboBoxTaxonomy';
import QuickForm from './QuickForm';
import { columns, ColumnTypes } from './columns';
import RowStatus from './RowStatus';
import taxonomyService from 'services/taxonomyService';

const NavigationTable = (props) => {
  // DEFINES
  const { formatMessage } = useIntl();
  const t = (id) => formatMessage({ id });
  const [dataSource, setDataSource] = useState([]);
  const [upsertTaxonomy] = taxonomyService.upsertTaxonomy();
  const { data, loading, refetch } = taxonomyService.getAll({
    variables: { where: { taxonomy: TaxonomyType.MainMenu } },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    loading ? NProgress.start() : NProgress.done();
  }, [loading]);

  useEffect(() => {
    if (data && data.termTaxonomies.rows) {
      const newData = {
        status: RowStatus.CREATE,
        termName: '',
        description: '',
      };
      const dataSource = data.termTaxonomies.rows.map((r) => ({
        status: RowStatus.GET,
        ...r,
      }));

      setDataSource([...dataSource, newData]);
    }
  }, [data]);

  // EVENTS
  const handleSave = (data) => {
    upsertTaxonomy({
      variables: {
        data,
      },
    });
  };

  const handleRemove = (data) => {
    const index = dataSource.findIndex((x) => x.id === data.id);
    const ds = _.update(
      dataSource,
      `[${index}].status`,
      () => RowStatus.DELETE,
    );
    setDataSource([...ds]);
  };

  // RENDER
  if (loading) return 'Loading...';

  const filterDataSource = dataSource.filter(
    (x) => x.status !== RowStatus.DELETE,
  );

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const tableColumns = columns(t, handleSave, handleRemove).map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave,
      }),
    };
  });
  return (
    <>
      <Table
        components={components}
        columns={tableColumns as ColumnTypes}
        dataSource={filterDataSource}
      />
    </>
  );
};

export default NavigationTable;

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: any;
  record: any;
  handleSave: (record: any) => void;
}
const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const inputRef = useRef<Input>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (record) form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  }, []);

  const save = async () => {
    try {
      const values = await form.validateFields();
      delete record.status;
      delete record.__typename;

      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} />
      </Form.Item>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

interface EditableRowProps {
  index: number;
}
const EditableContext = React.createContext<FormInstance<any> | null>(null);
const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
