import React from 'react';

function PageTitle({ children }) {
  return (
    <h1 className="my-4 text-right  " style={{color:"var(--text-color)"}}>{children}</h1>
  );
}

export default PageTitle;
