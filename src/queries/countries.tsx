import gql from "graphql-tag.macro";

const continentFragment = gql`
  fragment continentFragment on Continent {
    name
  }
`;

export const GET_COUNTRIES = gql`
  {
    countries {
      code
      continent {
        ...continentFragment
      }
      emoji
      name
    }
  }
  ${continentFragment}
`;
