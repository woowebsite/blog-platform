import React from 'react';
import { useIntl } from 'react-intl';
import Router from 'next/router';
import { notification } from 'antd';

// components
import TableQuickEdit from 'components/TableQuickEdit';
import TableFilter from 'components/TableFilter';
import QuickForm from './QuickForm';
import FilterForm from './FilterForm';

import { columns } from './columns';
import productBaseService from 'services/productBaseService';
import useTranslate from 'hooks/useTranslate';
import routers from '~/constants/routers';

const PageTable = (props) => {
  // DEFINES
  const { messages, formatMessage } = useIntl();
  const t = (id: string) => formatMessage({ id });
  const tableRef = React.useRef(null);

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

  const handleDelete = (id: number) => {
    deleteProductBase({
      variables: { id },
    });
  };

  // RENDER
  const renderFilter = (props) => <FilterForm {...props} />;
  const renderTable = (props) => (
    <TableQuickEdit
      {...props}
      ref={tableRef}
      rowKey="id"
      mutation={productBaseService.upsert}
      quickForm={(record, mutate) => (
        <QuickForm
          values={record}
          onSave={(values) =>
            mutate({
              variables: { user: values },
            })
          }
        />
      )}
      columns={columns(useTranslate, {
        delete: handleDelete,
      })}
    />
  );

  return (
    <>
      <TableFilter
        filterOptions={{
          modelName: 'ProductBase',
        }}
        modelName="ProductBase"
        pluralName="ProductBases"
        query={productBaseService.getAll}
        filterRender={(props) => renderFilter(props)}
        tableRender={(props) => renderTable(props)}
      />
    </>
  );
};

export default PageTable;
