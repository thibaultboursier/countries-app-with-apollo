import React, { useCallback } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { CountryList } from "../CountryList";
import { Country } from "../../models";

const GET_COUNTRIES = gql`
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

export const Home: React.FC = () => {
  const { loading, error, data, refetch } = useQuery<{ countries: Country[] }>(
    GET_COUNTRIES
  );

  const onRefresh = useCallback(() => refetch(), [refetch]);

  if (loading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading countries...</span>
      </div>
    );
  }

  if (error) {
    return <p>An error occured.</p>;
  }

  return data ? (
    <>
      <CountryList countries={data.countries} onRefresh={onRefresh} />
    </>
  ) : null;
};
