import React from 'react';
import './index.css';
import classnames from 'classnames';

export enum CardTypes {
  none = '',
  flat = 'card--flat',
}

interface BaseProps {
  children: React.Component | null;
  className: string;
}

interface CardProps extends BaseProps {
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

export default function Card({ children = null, className= '', type = CardTypes.none, ...props }: CardProps) {
  return <div className={classnames('card', className, type)} {...props}>{children}</div>;
}
