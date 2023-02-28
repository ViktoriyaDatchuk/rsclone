import './BlockButton.css';
import type { ReactElement } from 'react';
import { BlockButtonElement } from './BlockButtonElement';
import type { BlockButtonProps } from '../../../interfaces/propsTypes';

export function BlockButton({
  onToggleAdd,
  onToggleDel,
  onToggleEdit,
}: BlockButtonProps): ReactElement {
  return (
    <div className="actions-block">
      <BlockButtonElement func={onToggleAdd} name="Добавить" />
      <BlockButtonElement func={onToggleDel} name="Удалить" />
      <BlockButtonElement func={onToggleEdit} name="Редактировать" />
    </div>
  );
}
