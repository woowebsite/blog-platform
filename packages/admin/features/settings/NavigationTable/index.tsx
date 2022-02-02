import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import NProgress from 'nprogress';
import _ from 'lodash';
import { Table } from 'antd';

// components
import { TaxonomyType } from '~/components/ComboBoxTaxonomy';
import { columns, ColumnTypes } from './columns';
import RowStatus from './RowStatus';
import taxonomyService from 'services/taxonomyService';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { EditableCell, EditableRow } from './EditableTable';

const SortableItem = SortableElement((props) => <EditableRow {...props} />);
const SortableBody = SortableContainer((props) => <tbody {...props} />);

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
    if (!loading && data && data.termTaxonomies.rows) {
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
  const handleAdd = () => {
    const newData = {
      status: RowStatus.CREATE,
      termName: '',
      description: '',
    };

    setDataSource([...dataSource, newData]);
  };
  const handleSave = (data) => {
    upsertTaxonomy({
      variables: {
        data: {
          description: data.description,
          id: data.id,
          order: data.order,
          taxonomy: TaxonomyType.MainMenu,
          termName: data.termName,
        },
      },
      onCompleted: refetch
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

  // RENDER
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

  const tableColumns = columns(t).map((col) => {
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        colName: col.key,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
        handleRemove,
        handleAdd,
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
