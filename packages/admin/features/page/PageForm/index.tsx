import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { Modal, Form, Input, Button, Upload, message } from 'antd';
import { useIntl } from 'react-intl';

// components
import UploadImage from '~/components/UploadImage';
import ComboBox from '~/components/ComboBox';
import ComboBoxType from '~/components/ComboBox/ComboBoxType';
import useTranslate from 'hooks/useTranslate';

// graphql
import productBaseService from 'services/productBaseService';
import ComboBoxTaxonomy, { TaxonomyType } from '~/components/ComboBoxTaxonomy';
import { ProductBase } from '@monorepo/graphql/models';
import { ProductBaseTypeEnum } from '@monorepo/graphql/types';
import StatusType from '~/models/StatusType';

interface PageFormProps {
  data?: ProductBase;
}
const PageForm = forwardRef<any, PageFormProps>((props, ref) => {
  // DECLARES
  const { data } = props;
  const [form] = Form.useForm();
  const [upsertProductBase] = productBaseService.upsert();

  const formSetFields = (productBase) => {
    form.setFields([
      { name: 'title', value: productBase.title },
      { name: 'description', value: productBase.description },
    ]);
  };

  // EFFECT
  useEffect(() => {
    if (data) {
      formSetFields(data);
    }
  }, [data]);

  /// EVENTS
  useImperativeHandle(ref, () => ({
    onSubmit,
  }));

  const onSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const metadata = [];
        const taxonomies = [];
        const productBase: ProductBase = data
          ? {
              id: data.id,
              ...values,
            }
          : {
              type: ProductBaseTypeEnum.page,
              status: StatusType.Actived,
              ...values,
            };
        upsertProductBase({
          variables: {
            productBase,
            metadata,
            taxonomies,
          },
        });
      })
      .catch((errorInfo) => {
        console.log('Error: ', errorInfo);
      });
  };

  const onSetImageUrl = (filename) => {
    form.setFieldsValue({ image: filename });
  };

  return (
    <Form
      id="page"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 24 }}
      onFinish={onSubmit}
      layout="vertical"
    >
      <Form.Item
        name="title"
        rules={[
          {
            required: true,
            message: useTranslate('validator.required', {
              field: 'pageForm.label.title',
            }),
          },
        ]}
        label={useTranslate('pageForm.label.title')}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label={useTranslate('pageForm.label.description')}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="thumbnails"
        label={useTranslate('pageForm.label.thumbnails')}
      >
        <UploadImage setImageUrl={onSetImageUrl} />
      </Form.Item>
    </Form>
  );
});

export default PageForm;
