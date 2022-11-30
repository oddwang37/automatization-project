import './RowActions.styles.sass';

import { FirstLayer, SecondLayer, Entity, Delete } from 'components/svg';

export default function RowActions({ layer, isLast }: RowActionsProps): JSX.Element {
  return (
    <div className={`row-actions row-actions--${layer} ${isLast ? 'row-actions--is-last' : ''}`}>
      {layer === 'first' && <FirstLayer />}
      {(layer === 'first' || layer === 'second') && <SecondLayer />}
      <Entity />
      <Delete />
    </div>
  );
}

type RowActionsProps = {
  layer: 'first' | 'second' | 'entity';
  isLast?: boolean
};
