import { RowActions } from 'components/RowActions';
import './ProjectTable.styles.sass';

export default function ProjectTable() {
  return (
    <div className="project-table">
      <div className="project-table__header">
        <div className="project-table__tab">Строительно-монтажные работы</div>
        <table className="project-table__table">
          <tr className="project-table__row project-table__headings project-headings">
            <th>Уровень</th>
            <th>Наименование работ </th>
            <th>Основная з/п</th>
            <th>Оборудование</th>
            <th>Накладные расходы</th>
            <th>Сметная прибыль</th>
          </tr>
          <tr className="project-table__row">
            <td>
              <RowActions layer="first" />
            </td>
            <td>Название</td>
            <td>12</td>
            <td>13 600</td>
            <td>8</td>
            <td>123, 213</td>
          </tr>
          <tr className="project-table__row">
            <td>
              <RowActions layer="second" />
            </td>
            <td>Название</td>
            <td>12</td>
            <td>13 600</td>
            <td>8</td>
            <td>123, 213</td>
          </tr>
          <tr className="project-table__row">
            <td>
              <RowActions layer="entity" isEditMode />
            </td>
            <td>Название</td>
            <td>12</td>
            <td>13 600</td>
            <td>8</td>
            <td>123, 213</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
