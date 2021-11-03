import Header from '../../components/Header/Header';
import Pagination from '../../components/Pagination/Pagination';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import './Products.css';

function Products() {
  return (
    <>
      <Header />

      <main className="site-content">
        <Sidebar />
        <div className="table-wrapper">
          <Table />
          <div className="pagination-wrapper">
            <Pagination />
          </div>
        </div>
      </main>
    </>
  );
}

export default Products;