import './RowActions.styles.sass';
import { RowActionsProps } from './RowActions.types';

import { FirstLayer, SecondLayer, Entity, Delete } from 'components/svg';

export default function RowActions({ level, isLast, isLastOnSameLevel, isEditMode }: RowActionsProps): JSX.Element {

  return (
    <div className={`row-actions row-actions--level-${level} 
    				${isLast && 'row-actions--is-last'} 
    				${isEditMode && 'row-actions--is-edit-mode'}
    				${isLastOnSameLevel && 'row-actions--is-last-on-level'}
    				`}>
      {level === 1 && <FirstLayer />}
      {(level === 1 || level === 2) && <SecondLayer />}
      <Entity />
      <Delete />
    </div>
  );
}

