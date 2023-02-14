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
  options: (string | JSX.Element)[];
}

export interface BlockButtonProps {
  onToggleAdd: () => void;
  onToggleDel: () => void;
  onToggleEdit: () => void;
}

export interface BlockButtonElementProps {
  name: string;
  func: () => void;
}
