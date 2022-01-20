import { Form, Input, Button } from 'antd';
import { useIntl } from 'react-intl';
import { TaxonomyType } from '~/components/ComboBoxTaxonomy';
import useTranslate from '~/hooks/useTranslate';

const QuickForm = ({ onSave }) => {
  // DEFINE
  const [form] = Form.useForm();

  // EVENTS
  const handleFinish = () => {
    form
      .validateFields()
      .then((values) => {
        onSave({
          taxonomy: TaxonomyType.MainMenu,
          ...values,
        });
      })
      .catch((errorInfo) => {
        console.log('Error: ', errorInfo);
      });
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}
      onFinish={handleFinish}
      name="basic"
      form={form}
      size="small"
      labelAlign="left"
    >
      <Form.Item
        label={useTranslate('navigation.fields.title')}
        name="termName"
        rules={[{ required: true, message: 'Please input the menu name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={useTranslate('navigation.fields.link')}
        name="description"
        rules={[{ required: true, message: 'Please input the link!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" className="mr-2" htmlType="submit">
          {useTranslate('buttons.save')}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default QuickForm;
