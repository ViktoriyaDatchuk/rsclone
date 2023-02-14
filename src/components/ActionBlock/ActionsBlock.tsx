import './ActionsBlock.css';
import type { ReactElement } from 'react';
import { BlockButton } from './BlockButton/BlockButton';

export function ActionsBlock(): ReactElement {
  const onToggleAdd = (): void => {
    console.log('1');
  };
  const onToggleDel = (): void => {
    console.log('2');
  };
  const onToggleEdit = (): void => {
    console.log('3');
  };
  return (
    <div>
      <BlockButton
        onToggleAdd={onToggleAdd}
        onToggleDel={onToggleDel}
        onToggleEdit={onToggleEdit}
      />
      {/* <BlockPopup onToggleAdd={onToggleAdd} onToggleDel={onToggleDel} onToggleEdit={onToggleEdit}  /> */}
    </div>
  );
}
