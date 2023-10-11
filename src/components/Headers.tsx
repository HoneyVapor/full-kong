import React from 'react';
import './styles.css';

interface HeadersProps {
  nombreComponente: string;
}

export const Headers: React.FC<HeadersProps> = ({ nombreComponente }) => {
  return (
    <div className='princ-header'>
      <h2 className='titulo-headers'>{nombreComponente}</h2>
    </div>
  );
};
