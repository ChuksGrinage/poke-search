// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

export default class Header extends React.Component {
  render() {
    return (
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <img
          className="poke-logo"
          alt="Pokemon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"
          css={css`
            height: 150px;
            width: 500px;
            @media (max-width: 700px) {
              width: 300px;
              height: 100px;
            }
          `}
        />
      </div>
    );
  }
}
