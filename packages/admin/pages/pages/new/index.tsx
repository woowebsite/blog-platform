import React, { FC } from 'react';
import {
  Layout,
  Button,
  PageHeader,
  Row,
  Col,
  Typography,
  message,
} from 'antd';
import { gql } from '@apollo/client';

// components
import withAdminLayout from 'layout/AdminLayout';
import Card from 'components/Card';

// graphql
import { withApollo } from 'apollo/apollo';
import { useRouter } from 'next/dist/client/router';
import userService from 'services/userService';
import { productBaseQuery } from 'services/productBaseService';

// inner components
import ProductBaseBasicForm from '~/features/ProductBaseBasicForm';
import SocialConenct from '~/features/SocialConnect';
import PageForm from '~/features/page/PageForm';

//hooks
import useTranslate from 'hooks/useTranslate';
import { useIntl } from 'react-intl';

const { Content } = Layout;

interface PageCreateProps {}
const PageCreate: FC<PageCreateProps> = (props) => {
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
          <Button key="3">Duplicate</Button>,
          <Button key="2" danger>
            {useTranslate('buttons.delete')}
          </Button>,
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
