import React from 'react';

function Pagination({ currentPage, setCurrentPage, pageNumber }) {
  let pagination = [];

  for (let i = 0; i < Math.ceil(pageNumber); i++) {
    pagination.push(
      <button
        className={`btn btn-ghost  ${
          currentPage === i + 1 ? 'text-indigo-500' : ''
        }`}
        onClick={() => setCurrentPage(i + 1)}
      >
        {i + 1}
      </button>,
    );
  }

  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  return (
    <div className="btn-group duration-700 btn-ghost my-8 mx-auto rounded-xl">
      <button
        className={`btn btn-ghost ${currentPage === 1 && 'btn-disabled'}`}
        onClick={() => setCurrentPage(1)}
      >
        {'<<'}
      </button>
      <button
        className={`btn btn-ghost ${currentPage === 1 && 'btn-disabled'}`}
        onClick={() => setCurrentPage(prevPage)}
      >
        {'<'}
      </button>
      {pagination}
      <button
        className={`btn btn-ghost ${
          currentPage === pageNumber && 'btn-disabled'
        }`}
        onClick={() => setCurrentPage(nextPage)}
      >
        {'>'}
      </button>
      <button
        className={`btn btn-ghost ${
          currentPage === pageNumber && 'btn-disabled'
        }`}
        onClick={() => setCurrentPage(pageNumber)}
      >
        {'>>'}
      </button>
    </div>
  );
}

export default Pagination;
