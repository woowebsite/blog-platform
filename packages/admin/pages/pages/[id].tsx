import React from 'react';
import { Layout, PageHeader, Row, Col, notification } from 'antd';
import useTranslate from 'hooks/useTranslate';
import { useIntl } from 'react-intl';
import Router from 'next/router';
import { useRouter } from 'next/dist/client/router';

// components
import withAdminLayout from 'layout/AdminLayout';
import Card from 'components/Card';
import Button from 'components/Button';
import RedirectButton from '~/components/RedirectButton';

// graphql
import { withApollo } from 'apollo/apollo';
import productBaseService, {
  productBaseQuery,
} from 'services/productBaseService';

// inner components
import PageForm from '~/features/page/PageForm';
import routers from '~/constants/routers';

const { Content } = Layout;

const PageDetail = (props) => {
  // DECLARE
  const router = useRouter();
  const { data, query } = props;
  const { id } = router.query;
  const { messages, formatMessage } = useIntl();
  const t = (id: string) => formatMessage({ id });
  const formRef: any = React.createRef();

  const [deleteProductBase] = productBaseService.delete({
    onCompleted: (result) => {
      if (result.deleteProductBase) {
        notification.success({
          message: t('notification.success.message'),
          description: t('notification.success.delete'),
          placement: 'bottomLeft',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });

        Router.push(routers.pages.all);
      }
    },
  });

  // EVENTS
  const onSave = () => {
    formRef.current.onSubmit();
  };
  const onDelete = () => {
    deleteProductBase({
      variables: { id: parseInt(id.toString()) },
    });
  };

  // RENDER
  const title = data.productBase.title || 'Unknow name';
  const description = data.productBase.description || '';

  return (
    <>
      <PageHeader
        className="mb-4 pl-0 pr-0"
        title={title}
        subTitle={description}
        extra={[
          <RedirectButton url={'/pages'}>
            {messages['pageHeader.buttons.allPage']}
          </RedirectButton>,
          <Button key="2" danger onClick={onDelete}>
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
              <PageForm ref={formRef} data={data.productBase} />
            </Card>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withAdminLayout(withApollo({ ssr: true })(PageDetail));

PageDetail.getInitialProps = async ({ ctx }) => {
  const { res, req, query, pathname, apolloClient } = ctx;

  const { data, loading, refetch } = await apolloClient.query({
    query: productBaseQuery.get,
    variables: {
      where: { id: parseInt(query.id) },
    },
  });

  return {
    query,
    data,
  };
};
