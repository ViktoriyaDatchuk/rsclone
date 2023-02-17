import { type ReactElement } from 'react';
import type { InputProps } from '../../interfaces/propsTypes';
import './Input.css';

//  ДЛЯ КНОПКИ САБМИТА!!!
//   const submit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     console.log(state);
//     setState('');
//   };

// при вызове: перед return: const[number, setNumber] = useState("")
// потом: <Input state={number} setState={setNumber} type="number"/>

export function Input({ state, setState, type }: InputProps): ReactElement {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target == null) return;
    if (e.target instanceof HTMLInputElement) setState(e.target.value);
  };

  return (
    <input
      type={type}
      value={state}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
      }}
    />
  );
}
