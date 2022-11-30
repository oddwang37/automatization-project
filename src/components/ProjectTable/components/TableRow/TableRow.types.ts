export type TableRowProps = {
	level: 0 | 1 | 2;
	title: string;
	salary: number;
	equipment: number; 
	overheads: number;
	income: number;
	isEditable?: boolean;
	isLast?: boolean;
	isLastOnSameLevel?: boolean;
}