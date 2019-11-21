import React, { useCallback } from "react";
import { useQuery } from "@apollo/react-hooks";
import Alert from "react-bootstrap/Alert";
import { CountryList } from "../CountryList";
import { Country } from "../../models";
import { GET_COUNTRIES } from "../../queries/countries";

export const Home: React.FC = () => {
  const { loading, error, data, refetch } = useQuery<{ countries: Country[] }>(
    GET_COUNTRIES
  );

  const onRefresh = useCallback(() => refetch(), [refetch]);

  if (loading) {
    return (
      <div className="mx-auto spinner-grow text-primary" role="status">
        <span className="sr-only">Loading countries...</span>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">An error occured.</Alert>;
  }

  return data ? (
    <CountryList countries={data.countries} onRefresh={onRefresh} />
  ) : null;
};
