import React from 'react'

const range = (n) => Array.apply(null, { length: n }).map((_, i) => i)

const Paginator = ({
  numPages,
  currentPage,
  goToPage,
  className = 'd-flex justify-content-center',
}) => (
  <nav aria-label="Paginator" className={className}>
    <ul className="pagination">
      <li
        className={`page-item pointer ${
          currentPage === null || currentPage === 1 ? 'disabled' : ''
        }`}
      >
        <span
          className="page-link"
          aria-label="Previous"
          onClick={() => goToPage(currentPage - 1)}
        >
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </span>
      </li>
      {range(numPages).map((page) => (
        <li
          key={page}
          className={`page-item  pointer ${
            currentPage === page + 1 ? 'active' : ''
          } `}
        >
          <span onClick={() => goToPage(page + 1)} className="page-link">
            {page + 1}
          </span>
        </li>
      ))}
      <li
        className={`page-item pointer ${
          currentPage === null || !(currentPage < numPages) ? 'disabled' : ''
        }`}
      >
        <span
          className="page-link"
          aria-label="Next"
          onClick={() => goToPage(currentPage + 1)}
        >
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </span>
      </li>
    </ul>
  </nav>
)

export default Paginator
