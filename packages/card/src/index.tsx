import React from 'react';
import './index.css';
import classnames from 'classnames';

export enum CardTypes {
  none = '',
  flat = 'card--flat',
}

export interface BaseProps {
  children: any;
  className: string;
}

export interface Props extends BaseProps {
  type: CardTypes;
}

export function CardHeader({ children = null, className = '', ...props }: BaseProps) {
  return (
    <div
      className={`card__header ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardSection({ children = null, className = '', ...props }: BaseProps) {
  return (
    <div
      className={`card__section ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default function Card({ children = null, className= '', type = CardTypes.none, ...props }: Props) {
  return <div className={classnames('card', className, type)} {...props}>{children}</div>;
}
