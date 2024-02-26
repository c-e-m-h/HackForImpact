import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export default function AnimalCard({ cat }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={cat.attributes.pictureThumbnailUrl}
        style={{ width: "100%" }}
      />
      <Card.Body>
        <Card.Title>{cat.attributes.name}</Card.Title>
        <Link to={`/animal/${cat.id}`}>
          <Button variant="primary">View</Button>
        </Link>
      </Card.Body>
    </Card>
    // <div className="profile">
    //   <div className="profile__img">
    //     <img src={cat.attributes.pictureThumbnailUrl} alt="Cat" />
    //   </div>
    //   <div className="profile__info">
    //     <h1>{cat.attributes.name}</h1>
    //     <p>Sex: {cat.attributes.sex}</p>
    //     <p>Weight: 50lbs</p>
    //     <p>Adopted: NO</p>
    //     <p>Spayed: NO</p>
    //     <p>{cat.attributes.breedSecondary}</p>
    //   </div>
    // </div>
  );
}
