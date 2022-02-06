import React from 'react';
import { Layout, PageHeader } from 'antd';

// components
import withAdminLayout from 'layout/AdminLayout';
import Button from '~/components/Button';

// graphql
import { withApollo } from 'apollo/apollo';
import NavigationTable from '~/features/settings/NavigationTable';

const { Content } = Layout;

const Navigation = (props) => {
  const { messages, t } = props;

  return (
    <>
      <PageHeader
        className="mb-4 pl-0 pr-0"
        title={messages.title}
        subTitle={messages.subTitle}
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            {t('buttons.save')}
          </Button>,
        ]}
      />
      <Content>
        <NavigationTable />
      </Content>
    </>
  );
};

export default withAdminLayout(withApollo({ ssr: false })(Navigation));
