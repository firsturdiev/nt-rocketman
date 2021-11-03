import './Pagination.css';
import Button from '../Button/Button';

function Pagination() {
  return (
    <div className="pagination">
      <Button className="pagination__btn pagination__btn--prev" aria-label="Go to previous list">
        <svg viewBox="0 0 20 20" fill="transparent" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4" transform="rotate(10)">
            <path d="M12.9165 4.16668L7.08317 10L12.9165 15.8333" stroke="#2E3444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        </svg>
      </Button>
      <Button className="pagination__btn pagination__btn--next" aria-label="Go to next list" />
    </div>
  );
}

export default Pagination;