import { gql } from '@apollo/client';

export const GET_OPTION = gql`
  query GetOption($where: OptionWhere) {
    option(where: $where) {
      id
      name
      value
      status
    }
  }
`;

export const GET_OPTIONS = gql`
  query GetOptions($where: OptionWhere) {
    options(where: $where) {
      rows {
        id
        name
        value
        status
      }
    }
  }
`;
