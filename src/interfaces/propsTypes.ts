import { Item } from '../components/Table/Table';
import { Account } from './Account';
import { type HTMLInputTypeAttribute } from 'react';

type VoidFunction = () => void;

export interface HeaderButtonType {
  image: string;
  title: string;
}

export interface FooterProps {
  name: string;
  link: string;
  img: string;
}

export interface DropdownProps {
  options: string[] | JSX.Element[];
}

export interface BlockButtonProps {
  onToggleAdd: VoidFunction;
  onToggleDel: VoidFunction;
  onToggleEdit: VoidFunction;
}

export interface BlockButtonElementProps {
  name: string;
  func: VoidFunction | ((event: React.FormEvent) => void);
}

export interface ActionBlockProps extends BlockButtonProps {
  children?: React.ReactElement | boolean;
}

export interface AccountsFormProps {
  transaction: string;
  selected: Item | undefined;
  onClose: VoidFunction;
}

export interface InputProps {
  type: HTMLInputTypeAttribute;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}
