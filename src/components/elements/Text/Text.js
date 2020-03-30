import React from 'react';

import s from './Text.module.scss';

const Text = ({ children, className, type = 'regular' }) => {
  return <div className={`${type === 'bold' ? s.bold : s.regular} ${className}`}>{children}</div>;
};

export default Text;
