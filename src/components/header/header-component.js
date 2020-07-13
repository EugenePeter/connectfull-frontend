import React from "react";

import {
  Header,
  CoverPhoto,
  HeaderContent,
  ProfileLogoContainer,
} from "./header.styles";

const HeaderComponent = () => {
  return (
    <Header>
      <CoverPhoto
        style={{
          backgroundImage: `url(${require("../../assets/img/austin-distel-wawEfYdpkag-unsplash.jpg")})`,
        }}
      >
        <HeaderContent>
          <h1>DESIGN TECH</h1>
        </HeaderContent>
      </CoverPhoto>
      <ProfileLogoContainer />
    </Header>
  );
};

export default HeaderComponent;
