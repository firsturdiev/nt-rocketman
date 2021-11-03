import './Pagination.css';
import Button from '../Button/Button';

function Pagination() {
  return (
    <div className="pagination">
      <Button className="pagination__btn pagination__btn--prev" aria-label="Go to previous list"></Button>
      <Button className="pagination__btn pagination__btn--next pagination__btn--valid" aria-label="Go to next list"></Button>
    </div>
  );
}

export default Pagination;