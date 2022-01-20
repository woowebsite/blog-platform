import Table, { ColumnsType } from 'antd/lib/table';
import { Button, Popconfirm } from 'antd';
import Input from '~/components/Input';

type EditableTableProps = Parameters<typeof Table>[0];
export type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;
export type EditableColumn = (ColumnTypes[any] & {
  editable?: boolean;
  dataIndex: string;
})[];

export const columns = (t, handleSave, handleRemove): EditableColumn => {
  return [
    {
      title: t('navigationTable.columns.title'),
      dataIndex: 'termName',
      key: 'termName',
      width: '25%',
      editable: true,
      render: (text, record) => {
        return <Input value={text} />;
      },
    },
    {
      title: t('navigationTable.columns.link'),
      dataIndex: 'description',
      key: 'description',
      width: '25%',
      editable: true,
      render: (text, record) => {
        return <Input value={text} />;
      },
    },
    {
      title: '',
      className: 'actions-cell',
      width: '15%',
      key: 'action',
      sorter: false,
      editable: false,
      dataIndex: 'action',
      render: (value, record, index) => (
        <Button.Group>
          <Button onClick={() => handleRemove(record)} type="link">
            {t('buttons.delete')}
          </Button>
          <Button onClick={() => handleSave(record)} type="link">
            {t('buttons.save')}
          </Button>
        </Button.Group>
      ),
    },
  ];
};
