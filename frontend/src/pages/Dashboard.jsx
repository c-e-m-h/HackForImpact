import React, { useEffect, useState } from "react";
import CatProfile from "../components/AnimalCard";
import List from "../components/List";
import axios from "axios";
import filter from "../utility/Filter";
export default function Dashboard() {
  const [response, setResponse] = useState([]);

  const [cats, setCats] = useState([]);
  const [vaccinated, setVaccinated] = useState([]);
  const [unvaccinated, setUnvaccinated] = useState([]);

  const config = {
    headers: {
      Authorization: "qG4ausv2",
      "Content-Type": "application/vnd.api+json",
    },
  };
  useEffect(() => {
    axios
      .get("https://api.rescuegroups.org/v5/public/animals/", config)
      .then((response) => response.data)
      .then((data) => {
        const va = filter("isCurrentVaccinations", data.data);
        setVaccinated(va);

        const unva = filter("isCurrentVaccinations", data.data, false);
        setUnvaccinated(unva);
        console.log('imva',unva);

        setCats(data);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <section>
        <h2>Vaccinated</h2>
        <List className="vaccinated" cats={vaccinated} />
      </section>

      <section>
        <h2>Unvaccinated</h2>
        <List className='unvaccinated' cats={unvaccinated}/>
      </section>
    </div>
  );
}
