import Switch from '../Switch/Switch';
import Button from '../Button/Button';
import './Table.css';

function Table() {
  return (
    <table className="table">
      <thead className="table__header">
        <tr className="table__header-row">
          <th className="table__header-item">Kategoriya</th>
          <th className="table__header-item">Do'konlar</th>
          <th className="table__header-item">Tahrirlash</th>
          <th className="table__header-item">Status</th>
        </tr>
      </thead>

      <tbody className="table__content">
        <tr className="table__content-row">
          <td className="table__content-item">Fast-food</td>
          <td className="table__content-item">2</td>
          <td className="table__content-item">
            <Button className="btn--edit" aria-label="Edit the product"></Button>
          </td>
          <td className="table__content-item">
            <Switch aria-label="Toggle status" />
          </td>
        </tr>

        <tr className="table__content-row">
          <td className="table__content-item">Fast-food</td>
          <td className="table__content-item">2</td>
          <td className="table__content-item">
            <Button className="btn--edit" aria-label="Edit the product"></Button>
          </td>
          <td className="table__content-item">
            <Switch aria-label="Toggle status" />
          </td>
        </tr>

        <tr className="table__content-row">
          <td className="table__content-item">Fast-food</td>
          <td className="table__content-item">2</td>
          <td className="table__content-item">
            <Button className="btn--edit" aria-label="Edit the product"></Button>
          </td>
          <td className="table__content-item">
            <Switch aria-label="Toggle status" />
          </td>
        </tr>

        <tr className="table__content-row">
          <td className="table__content-item">Fast-food</td>
          <td className="table__content-item">2</td>
          <td className="table__content-item">
            <Button className="btn--edit" aria-label="Edit the product"></Button>
          </td>
          <td className="table__content-item">
            <Switch aria-label="Toggle status" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;