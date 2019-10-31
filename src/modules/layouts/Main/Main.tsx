
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from 'react';
import { Header } from 'modules/components';
import { css, jsx } from '@emotion/core';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
      <div
        css={css`
          background-color: #fccd04;
          font-family: sans-serif;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;

          @media (max-width: 700px) {
              padding: 10px;
            }
        `}
      >
        <Header />
        <div>{children}</div>
      </div>
    );
}

export default MainLayout;
