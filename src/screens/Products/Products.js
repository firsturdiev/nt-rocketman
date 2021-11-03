import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import './Products.css';

function Products() {
  return (
    <>
      <Header />

      <main className="site-content">
        <Sidebar />
        <Table />
      </main>
    </>
  );
}

export default Products;