import Link from 'next/link';
import { ColumnsType } from 'antd/lib/table';
import { Table, Space, Menu, Dropdown, Button } from 'antd';
import { useIntl } from 'react-intl';
import {
  CloseCircleFilled,
  DollarCircleOutlined,
  DownOutlined,
  EllipsisOutlined,
  SendOutlined,
  UserOutlined,
} from '@ant-design/icons';
// components
import Avatar from 'components/Avatar';
import ButtonModal from 'components/ButtonModal';
import { ProductBase } from '~/../graphql/models';

const { Group } = Button;
const { Item } = Menu;

const menu = (t, actions) => (
  <Menu>
    <Item key="1" icon={<SendOutlined />} onClick={actions.send}>
      {t('buttons.send')}
    </Item>
    <Item key="2" icon={<DollarCircleOutlined />}>
      {t('buttons.payment')}
    </Item>
  </Menu>
);

export const columns = (t, handlers): ColumnsType<any> => {
  const configDeleteModal = (record: ProductBase) => ({
    icon: <CloseCircleFilled style={{ color: 'rgb(244, 85, 53)' }} />,
    title: t('deleteModal.title'),
    content: t('deleteModal.content'),
    onOk() {
      handlers.delete(record.id);
    },
  });

  return [
    {
      title: t('page.fields.id'),
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: t('page.fields.title'),
      dataIndex: 'title',
      key: 'title',
      width: '25%',
      render: (text, record) => {
        return text ? <Link href={`/pages/${record.id}`}>{text}</Link> : text;
      },
    },
    {
      title: t('page.fields.publishDate'),
      dataIndex: 'publishDate',
      key: 'publishDate',
      render: (text) => <span className="text-uppercase">{text}</span>,
    },
    {
      title: '',
      key: 'action',
      sorter: false,
      render: (value, record, index) => (
        <Group>
          <ButtonModal config={configDeleteModal(record)} type="link">
            {t('buttons.delete')}
          </ButtonModal>
          <Dropdown
            placement="bottomRight"
            overlay={menu(t, { send: () => handlers.send(record) })}
          >
            <Button shape="circle" icon={<EllipsisOutlined />} />
          </Dropdown>
        </Group>
      ),
    },
  ];
};
