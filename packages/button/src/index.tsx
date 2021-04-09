import React from 'react'

interface Props {
  label: string;
  onClick: () => unknown;
}

const buttonStyle = {
  padding: '10px 20px'
};

const Button = ({
  label= '',
  onClick = () => { }
}: Props) => {
  return (
    <button
    className="btn btn--default"
    style={buttonStyle}
    onClick={onClick}>{label}</button>
  )
}

Button.defaultProps = {
    onClick: () => {},
    label: ''
};

export default Button;