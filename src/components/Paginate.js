import React from "react";

export const Paginate = ({
  templatesPerPage,
  totalTemplates,
  paginate,
  currentPage,
  data,
}) => {
  const pageNumbers = [];

  for (var i = 1; i <= Math.ceil(totalTemplates / templatesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      {!data.length ? (
        <>
          <div>
            <span className="disabled-pagination">&#60; Previous</span>
          </div>
          <div>
            <div>0</div>
            <div>of 0</div>
          </div>
          <div>
            <span className="disabled-pagination">Next &#62;</span>
          </div>
        </>
      ) : (
        <>
          <div>
            {currentPage === pageNumbers[0] ? (
              <span className="disabled-pagination">&#60; Previous</span>
            ) : (
              <span
                className="enabled-pagination"
                onClick={() => paginate(currentPage - 1)}
              >
                &#60; Previous
              </span>
            )}
          </div>
          <div>
            <div>{currentPage}</div>
            <div>of {pageNumbers.length}</div>
          </div>
          <div>
            {currentPage === pageNumbers[pageNumbers.length - 1] ? (
              <span className="disabled-pagination">Next &#62;</span>
            ) : (
              <span
                className="enabled-pagination"
                onClick={() => paginate(currentPage + 1)}
              >
                Next &#62;
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};
