import React, { memo, useCallback, useState } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { CountryItem } from "../CountryItem";
import { Country } from "../../models";

type Props = {
  countries: Country[];
  onRefresh: () => void;
};

export const CountryList: React.FC<Props> = memo(({ countries, onRefresh }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const onSearch = useCallback(
    ({ target }) => {
      const value = target.value.toLowerCase();

      setFilteredCountries(() =>
        countries.filter(
          ({ code, name }) =>
            name.toLowerCase().includes(value) ||
            code.toLowerCase().includes(value)
        )
      );
    },
    [countries]
  );

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5>
          <Badge variant="info">{countries.length}</Badge> countries
        </h5>
        <Button onClick={onRefresh} variant="primary">
          Refresh
        </Button>
      </div>
      <hr />
      <Col sm={6}>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Search
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                onChange={onSearch}
                placeholder="Enter country name or country code"
                type="text"
              />
            </Col>
          </Form.Group>
        </Form>
      </Col>
      {filteredCountries.length > 0 ? (
        <CardColumns className="mt-4">
          {filteredCountries.map(country => (
            <CountryItem key={country.code} {...country} />
          ))}
        </CardColumns>
      ) : (
        <Alert variant="info">No country found :-(</Alert>
      )}
    </>
  );
});
