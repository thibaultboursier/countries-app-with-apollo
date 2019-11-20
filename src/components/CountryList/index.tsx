import React, { memo } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CountryItem } from "../CountryItem";
import { Country } from "../../models";

type Props = {
  countries: Country[];
  onRefresh: () => void;
};

export const CountryList: React.FC<Props> = memo(({ countries, onRefresh }) => (
  <>
    <div className="d-flex justify-content-between align-items-center">
      <h5>
        <Badge variant="info">{countries.length}</Badge> countries
      </h5>
      <Button onClick={onRefresh} variant="primary">
        Refresh
      </Button>
    </div>
    <CardColumns className="mt-4">
      {countries.map(country => (
        <CountryItem key={country.code} {...country} />
      ))}
    </CardColumns>
  </>
));
