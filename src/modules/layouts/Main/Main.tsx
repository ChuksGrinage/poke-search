
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
          padding: 20px 200px;
          background-color: #fccd04;
          font-family: sans-serif;
          min-height: 100vh;
        `}
      >
        <Header />
        {children}
      </div>
    );
}

export default MainLayout;
