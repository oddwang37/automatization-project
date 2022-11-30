import React from 'react';

import './TableRow.styles.sass';
import { TableInput } from 'components/ui/TableInput';
import { RowActions } from 'components/RowActions';
import { TableRowProps } from './TableRow.types';

export default function TableRow({level, title, salary, equipment, overheads, income, isEditable, isLast, isLastOnSameLevel}: TableRowProps):JSX.Element {

	return (<tr className="project-table__row">
				<td>
				<RowActions level={level} isEditMode={isEditable} isLast={isLast} isLastOnSameLevel={isLastOnSameLevel} />
				</td>
				<td><TableInput value={title} readOnly={!isEditable} /></td>
				<td><TableInput value={salary} readOnly={!isEditable} /></td>
				<td><TableInput value={equipment} readOnly={!isEditable} /></td>
				<td><TableInput value={overheads} readOnly={!isEditable} /></td>
				<td><TableInput value={income} readOnly={!isEditable} /></td>
			</tr>)
}