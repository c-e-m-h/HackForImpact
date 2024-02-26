import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
export default function AnimalProfile() {
  const id = useParams().id;

  const [info, setInfo] = useState(null);
  const [img, setImg] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.rescuegroups.org/v5/public/animals/${id}`, config)
      .then((response) => response.data)
      .then((data) => {
        console.log("data ", data.data[0]);
        setInfo(data.data[0]);
        setImg(data.included[data.included.length - 1]);
      });
  }, []);

  const config = {
    headers: {
      Authorization: "qG4ausv2",
      "Content-Type": "application/vnd.api+json",
    },
  };

  return (
    <Container>
      {info && img && (
        <>
          <Col>
            <div className="profile-img">
              {img.attributes && (
                <img
                  src={img.attributes.original.url}
                  style={{ width: "20em" }}
                />
              )}
            </div>
          </Col>

          <Col>
            <div className="profile-info">
              <h1>{info.attributes.name}</h1>
              <p>Breed String: {info.attributes.breedString}</p>

              <p>Sex: {info.attributes.sex}</p>
              {info.attributes.birthDate && (
                <p>Birthdate: {info.attributes.birthDate}</p>
              )}

              {info.attributes.isDeclawed && (
                <p>Declawed: {info.attributes.isDeclawed ? "Yes" : "No"}</p>
              )}

              {info.attributes.isSpecialNeeds && (
                <p>
                  Special Needs: {info.attributes.isSpecialNeeds ? "Yes" : "No"}
                </p>
              )}
            </div>
          </Col>
        </>
      )}
    </Container>
  );
}
