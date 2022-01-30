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
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

const SortableItem = SortableElement((props) => <EditableRow {...props} />);
const SortableBody = SortableContainer((props) => <tbody {...props} />);

const NavigationTable = (props) => {
  // DEFINES
  const { formatMessage } = useIntl();
  const t = (id) => formatMessage({ id });
  const [dataSource, setDataSource] = useState([]);
  const [upsertTaxonomy] = taxonomyService.upsertTaxonomy();
  const { data, loading } = taxonomyService.getAll({
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
      const dataSource = data.termTaxonomies.rows.map((r, index) => ({
        status: RowStatus.GET,
        index,
        ...r,
      }));

      setDataSource([...dataSource, newData]);
    }
  }, [loading]);

  // EVENTS
  const handleSave = (data) => {
    upsertTaxonomy({
      variables: {
        data: {
          description: data.description,
          id: data.id,
          order: data.order,
          taxonomy: data.taxonomy,
          termName: data.termName,
        },
      },
    });

    // Update dataSource
    const index = dataSource.findIndex((x) => x.id === data.id);
    dataSource[index] = { ...data, status: RowStatus.UPDATE };

    setDataSource([...dataSource]);
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

  // sorting
  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable(
        [].concat(dataSource),
        oldIndex,
        newIndex,
      ).filter((el) => !!el);
      setDataSource(newData);
    }
  };
  const DraggableContainer = (props) => (
    <SortableBody
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const index = dataSource.findIndex(
      (x) => x.index === restProps['data-row-key'],
    );
    const latest = index === dataSource.length - 1;

    return latest ? (
      <EditableRow index={index} {...restProps} />
    ) : (
      <SortableItem index={index} {...restProps} />
    );
  };

  // RENDER
  if (loading) return 'Loading...';

  const filterDataSource = dataSource.filter(
    (x) => x.status !== RowStatus.DELETE,
  );

  const components = {
    body: {
      wrapper: DraggableContainer,
      row: DraggableBodyRow,
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
        handleSave,
      }),
    };
  });
  return (
    <>
      <Table
        pagination={false}
        dataSource={filterDataSource}
        columns={tableColumns as ColumnTypes}
        rowKey="index"
        components={components}
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
    if (record && form) form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  }, []);

  const onPressEnter = async () => {
    try {
      const values = await form.validateFields();

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
        <Input ref={inputRef} onPressEnter={onPressEnter} />
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
