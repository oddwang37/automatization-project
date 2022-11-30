
import './TableInput.styles.sass';
import { TableInputProps } from './TableInput.types';

export default function TableInput(props:TableInputProps):JSX.Element {
	return <input className="table-input" {...props} />
}
