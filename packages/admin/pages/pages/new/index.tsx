import React from 'react';
import { Layout, PageHeader, Row, Col } from 'antd';

// components
import withAdminLayout from 'layout/AdminLayout';
import Card from 'components/Card';
import RedirectButton from '~/components/RedirectButton';
import Button from '~/components/Button';

// graphql
import { withApollo } from 'apollo/apollo';

// inner components
import PageForm from '~/features/page/PageForm';

//hooks
import useTranslate from 'hooks/useTranslate';
import { useIntl } from 'react-intl';

const { Content } = Layout;

const PageCreate = (props) => {
  // DECLARE
  const { messages } = useIntl();
  const formRef: any = React.createRef();

  // EVENTS
  const onSave = () => {
    formRef.current.onSubmit();
  };

  // RENDER

  const title = messages.title;
  return (
    <>
      <PageHeader
        className="mb-4 pl-0 pr-0"
        title={title}
        subTitle={messages.subTitle}
        extra={[
          <RedirectButton url={'/pages'}>
            {messages['pageHeader.buttons.allPage']}
          </RedirectButton>,
          <Button key="1" type="primary" onClick={onSave}>
            {useTranslate('buttons.save')}
          </Button>,
        ]}
      />
      <Content>
        <Row gutter={24}>
          <Col span="16">
            <Card className="pt-3">
              <PageForm ref={formRef} />
            </Card>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withAdminLayout(withApollo({ ssr: false })(PageCreate));
