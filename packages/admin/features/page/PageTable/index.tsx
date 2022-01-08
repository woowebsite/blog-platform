import React from 'react';
import { useIntl } from 'react-intl';

// components
import TableQuickEdit from 'components/TableQuickEdit';
import TableFilter from 'components/TableFilter';
import QuickForm from './QuickForm';
import FilterForm from './FilterForm';

import { columns } from './columns';
import productBaseService from 'services/productBaseService';
import useTranslate from 'hooks/useTranslate';

const PageTable = (props) => {
  // DEFINES
  const tableRef = React.useRef(null);

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
      columns={columns(useTranslate)}
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
