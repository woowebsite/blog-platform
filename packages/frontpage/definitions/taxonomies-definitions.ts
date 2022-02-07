import { gql } from '@apollo/client';

export const GET_TERM_TAXONOMIES = gql`
  query GetTermTaxonomies($where: TermTaxonomyWhere) {
    termTaxonomies(where: $where) {
      rows {
        id
        taxonomy
        termName
        term {
          id
          name
        }
      }
    }
  }
`;
