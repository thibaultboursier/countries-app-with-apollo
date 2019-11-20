import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

type Country = {
  code: string;
  name: string;
};

const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
      currency
    }
  }
`;

export const Home: React.FC = () => {
  const { loading, error, data } = useQuery<{ countries: Country[] }>(
    GET_COUNTRIES
  );

  if (loading) {
    return <p>Loading countries...</p>;
  }

  if (error) {
    return <p>An error occured.</p>;
  }

  return (
    <ul>
      {data &&
        data.countries.map(({ code, name }) => <li key={code}>{name}</li>)}
    </ul>
  );
};
