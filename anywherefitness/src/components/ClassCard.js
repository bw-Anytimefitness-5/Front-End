/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

export default function ClassCard(props) {
  const {
    name,
    type,
    created_at,
    length_minutes,
    intensitylvl,
    location,
    current_size,
    max_size
  } = props.data;
  return (
    <Card className="classCard">
      <CardTitle>{name}</CardTitle>
      <CardText>Type: {type}</CardText>
      <CardText>Create On: {created_at}</CardText>
      <CardText>Length: {length_minutes} minutes</CardText>
      <CardText>Intensity Level: {intensitylvl}</CardText>
      <CardText>Location: {location}</CardText>
      <CardText>Class Size: {max_size}</CardText>
      <CardText>Available Spots: {max_size - current_size}</CardText>
    </Card>
  );
}
