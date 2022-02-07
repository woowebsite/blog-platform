import { gql } from '@apollo/client';

export const GET_OPTIONS = gql`
  query ApiUsers {
    users @rest(type: "User", path: "/users", method: "GET") {
      id
      name
      avatar
      age
    }
  }
`;
