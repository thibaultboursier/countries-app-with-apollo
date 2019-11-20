import gql from "graphql-tag.macro";

export const GET_COUNTRIES = gql`
  {
    countries {
      code
      continent {
        name
      }
      emoji
      name
    }
  }
`;
