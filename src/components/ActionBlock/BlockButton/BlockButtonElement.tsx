import './BlockButtonElement.css';
import type { ReactElement } from 'react';
import type { BlockButtonElementProps } from '../../../interfaces/propsTypes';

export function BlockButtonElement({ name, func }: BlockButtonElementProps): ReactElement {
  return (
    <div className="block-button-element">
      <button onClick={func} className="">
        {name}
      </button>
    </div>
  );
}
