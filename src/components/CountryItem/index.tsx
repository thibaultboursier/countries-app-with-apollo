import React from "react";
import Card from "react-bootstrap/Card";
import { Country } from "../../models";

type Props = Country;

export const CountryItem: React.FC<Props> = ({
  code,
  continent,
  emoji,
  name
}) => (
  <Card className="p-3">
    <Card.Body>
      <Card.Title className="text-truncate" title={name}>
        {emoji} {name}
      </Card.Title>
      <Card.Text>
        Code is {code} and continent is {continent.name}.
      </Card.Text>
    </Card.Body>
  </Card>
);
