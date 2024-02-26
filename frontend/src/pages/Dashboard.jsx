import React, { useEffect, useState } from "react";
import CatProfile from "../components/AnimalCard";
import List from "../components/List";
import axios from "axios";
import filter from "../utility/Filter";
import PaginationRow from "../components/PaginationRow";
export default function Dashboard() {
  const [cats, setCats] = useState([]);
  const [vaccinated, setVaccinated] = useState([]);
  const [unvaccinated, setUnvaccinated] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const config = {
    headers: {
      Authorization: "qG4ausv2",
      "Content-Type": "application/vnd.api+json",
    },
  };
  useEffect(() => {
    axios
      .get(
        `https://api.rescuegroups.org/v5/public/animals/search/cats/?page=${currentPage}&includes=cats`,
        config
      )
      .then((response) => response.data)
      .then((data) => {
        const va = filter("isCurrentVaccinations", data.data);
        setVaccinated(va);

        const unva = filter("isCurrentVaccinations", data.data, false);
        setUnvaccinated(unva);
        console.log("imva", unva);

        setCats(data);
      });
  }, [currentPage]);

  const updatePage = (num) => {
    setCurrentPage(num);
  };
  return (
    <div>
      <h1>Dashboard</h1>

      <section>
        <h2>Vaccinated</h2>
        <List className="vaccinated" cats={vaccinated} />
      </section>

      <section>
        <h2>Unvaccinated</h2>
        <List className="unvaccinated" cats={unvaccinated} />
      </section>

      <PaginationRow updatePage={updatePage} />
    </div>
  );
}
