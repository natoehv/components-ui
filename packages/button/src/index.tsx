import React from 'react'
import classnames from 'classnames';
import './index.css';

export enum ButtonColors {
  Primary = 'btn--primary-color',
  Secondary = 'btn--secondary-color',
}
export interface Props {
  label: string;
  color: ButtonColors;
  onClick: () => unknown;
}


const Button = ({
  color= ButtonColors.Primary,
  label= '',
  onClick = () => { }
}: Props) => {
  return (
    <button
    className={classnames('btn', color)}
    onClick={onClick}>{label}</button>
  )
}

Button.defaultProps = {
    onClick: () => {},
    label: ''
};

export default Button;