import React, { useState } from "react";

import Pagination from "react-bootstrap/Pagination";

export default function PaginationRow({ updatePage }) {
  const [active, setActive] = useState(1);

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        onClick={() => {
          updatePage(number);
          setActive(number);

          console.log(active);
        }}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
}
