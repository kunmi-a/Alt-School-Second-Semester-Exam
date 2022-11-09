import React, { useState, useContext } from "react";
import { APIContext } from "../context/context";
import { Paginate } from "./Paginate";

export const PaginatedView = () => {
  const { data } = useContext(APIContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [templatesPerPage] = useState(2);

  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
  const currentTemplates = [...data].slice(
    indexOfFirstTemplate,
    indexOfLastTemplate
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {currentTemplates?.map((each) => (
        <React.Fragment key={each.id}>
          <a href={each.html_url} target="blank">
            {each.name}
          </a>
        </React.Fragment>
      ))}
      <Paginate
        templatesPerPage={templatesPerPage}
        totalTemplates={[...data]?.length}
        paginate={paginate}
        currentPage={currentPage}
        data={[...data]}
      />
    </>
  );
};
