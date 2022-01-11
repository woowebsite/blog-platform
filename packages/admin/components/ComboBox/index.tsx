import React, { forwardRef } from 'react';
import * as userQueries from 'definitions/user-definitions';
import * as roleQueries from 'definitions/role-definitions';

import ComboBoxType from './ComboBoxType';

import Select, { Option } from 'components/Select';
import withQuery from 'shared/withQuery';

const ComboBox = ({ type, textField, valueField, ...others }, ref) => {
  // defines
  let dataSource = [];
  let query, options;
  switch (type) {
    case ComboBoxType.User:
      query = userQueries.GET_USERS;
      break;

    case ComboBoxType.Role:
      query = roleQueries.GET_ROLES;
      break;
  }

  // query
  const { data, loading } = withQuery(query, options);
  if (loading) return <Select {...others} />;
  switch (type) {
    case ComboBoxType.User:
      dataSource = data.users.rows;
      break;
    case ComboBoxType.Role:
      dataSource = data.roles;
      break;
  }

  // render
  return (
    <Select ref={ref} {...others}>
      {dataSource?.map((option) => (
        <Option key={option[valueField]} value={option[valueField]}>
          {option[textField]}
        </Option>
      ))}
    </Select>
  );
};
export default forwardRef(ComboBox);

export { ComboBoxType };
