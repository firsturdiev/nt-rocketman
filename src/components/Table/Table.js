import Switch from '../Switch/Switch';
import Button from '../Button/Button';
import './Table.css';

function Table() {
  return (
    <table className="table">
      <thead className="table__header">
        <tr className="table__header-row">
          <th className="table__header-cell">Kategoriya</th>
          <th className="table__header-cell">Do'konlar</th>
          <th className="table__header-cell">Tahrirlash</th>
          <th className="table__header-cell">Status</th>
        </tr>
      </thead>

      <tbody className="table__content">
        <tr className="table__content-row">
          <td className="table__content-cell">Fast-food</td>
          <td className="table__content-cell">2</td>
          <td className="table__content-cell">
            <Button className="btn--edit" aria-label="Edit the product"></Button>
          </td>
          <td className="table__content-cell">
            <Switch aria-label="Toggle status" />
          </td>
        </tr>

        <tr className="table__content-row">
          <td className="table__content-cell">Gullar</td>
          <td className="table__content-cell">2</td>
          <td className="table__content-cell">
            <Button className="btn--edit" aria-label="Edit the product"></Button>
          </td>
          <td className="table__content-cell">
            <Switch aria-label="Toggle status" />
          </td>
        </tr>

        <tr className="table__content-row">
          <td className="table__content-cell">Texnika</td>
          <td className="table__content-cell">2</td>
          <td className="table__content-cell">
            <Button className="btn--edit" aria-label="Edit the product"></Button>
          </td>
          <td className="table__content-cell">
            <Switch aria-label="Toggle status" />
          </td>
        </tr>

        <tr className="table__content-row">
          <td className="table__content-cell">Fast-food</td>
          <td className="table__content-cell">2</td>
          <td className="table__content-cell">
            <Button className="btn--edit" aria-label="Edit the product"></Button>
          </td>
          <td className="table__content-cell">
            <Switch aria-label="Toggle status" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;