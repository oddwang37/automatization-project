import { RowActions } from 'components/RowActions';
import './ProjectTable.styles.sass';

import { TableRow} from './components';
import { TableInput } from 'components/ui/TableInput';

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
          <TableRow
          	level={1}
          	title="Южная строительная площадка"
          	salary={20348}
          	equipment={1750}
          	overheads={108.07}
          	income={1209123.2}
          	isEditable={false}
          />
          <TableRow
          	level={2}
          	title="Южная строительная площадка"
          	salary={20348}
          	equipment={1750}
          	overheads={108.07}
          	income={1209123.2}
          	isEditable={false}
          />
           <TableRow
          	level={0}
          	title="Южная строительная площадка"
          	salary={20348}
          	equipment={1750}
          	overheads={108.07}
          	income={1209123.2}
          	isEditable={true}
          />
          <TableRow
          	level={0}
          	title="Южная строительная площадка"
          	salary={20348}
          	equipment={1750}
          	overheads={108.07}
          	income={1209123.2}
          	isEditable={false}
          	isLastOnSameLevel
          />
        </table>
      </div>
    </div>
  );
}
