import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = false,
  bordered = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`bg-white rounded-xl p-6 ${
        bordered ? 'border border-slate-200' : ''
      } ${
        hoverable ? 'hover:border-blue-950 hover:shadow-md transition-all duration-200' : 'shadow-sm'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
