import type { ReactElement } from 'react';
import { BlockButton } from './BlockButton/BlockButton';
import type { ActionBlockProps } from '../../interfaces/propsTypes';
import './ActionsBlock.css';

export function ActionsBlock({
  onToggleAdd,
  onToggleDel,
  onToggleEdit,
  children,
}: ActionBlockProps): ReactElement {
  return (
    <div>
      <BlockButton
        onToggleAdd={onToggleAdd}
        onToggleDel={onToggleDel}
        onToggleEdit={onToggleEdit}
      />
      {children}
    </div>
  );
}
