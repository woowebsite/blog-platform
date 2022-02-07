import { gql } from '@apollo/client';

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
