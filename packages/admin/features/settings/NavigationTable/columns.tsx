import Table from 'antd/lib/table';
import { Button } from 'antd';
import Input from '~/components/Input';
import { MenuOutlined } from '@ant-design/icons';
import { SortableHandle } from 'react-sortable-hoc';
import RowStatus from './RowStatus';

type EditableTableProps = Parameters<typeof Table>[0];
export type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;
export type EditableColumn = (ColumnTypes[any] & {
  editable?: boolean;
  dataIndex: string;
})[];

const DragHandle = SortableHandle(() => (
  <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />
));
export const columns = (t): EditableColumn => {
  return [
    {
      dataIndex: 'sort',
      width: 50,
      className: 'drag-visible',
      render: (text, record: any) => {
        if (record.status !== RowStatus.CREATE) return <DragHandle />;
      },
    },
    {
      title: t('navigationTable.columns.title'),
      dataIndex: 'termName',
      key: 'termName',
      editable: true,
      render: (text, record) => {
        return <Input value={text} />;
      },
    },
    {
      title: t('navigationTable.columns.link'),
      dataIndex: 'description',
      key: 'description',
      editable: true,
      render: (text, record) => {
        return <Input value={text} />;
      },
    },
    {
      title: '',
      className: 'actions-cell',
      width: 200,
      key: 'action',
      sorter: false,
      editable: false,
      dataIndex: 'action',
    },
  ];
};
