import styled from "styled-components";

// export const CoverPhoto = styled.div`
//   grid-column: 1 / span 12;
//   grid-row: 1 / span 2;
//   background-color: rgba(0, 0, 0, 0.6);
//   background-blend-mode: multiply;

//   /* height: 50vh; */
//   width: 100%;

//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center center;

//   color: #fff;

//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  /* grid-template-rows: repeat(5, 1fr); */
  grid-auto-rows: minmax(40px, auto);
  grid-gap: 10px;
  width: 100%;
  margin: 0 auto;

  div {
    max-width: 100%;
  }

  @media screen and (min-width: 692px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-auto-rows: minmax(30px, auto);
    grid-gap: 10px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const CoverPhoto = styled.div`
  grid-column: 1 / span 8;
  grid-row: 1 / span 4;
  background-color: red;

  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  color: #fff;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 640px) {
    grid-column: 1 / span 12;
    grid-row: 1 / span 4;
  }
`;

export const ProfileLogoContainer = styled.div`
  background-color: white;
  grid-column: 3 / span 4;
  grid-row: 4 / span 2;
  z-index: 10;

  &::after {
    content: "";
    position: relative;
    display: block;
    padding-top: 100%;
  }
  @media screen and (min-width: 568px) {
    grid-column: 2 / span 2;
    grid-row: 4 / span 2;
  }
`;

// export const CoverPhoto = styled.div`
//   grid-column: 1 / span 12;
//   grid-row: 1 / span 4;
//   background-color: red;

//   background-color: rgba(0, 0, 0, 0.6);
//   background-blend-mode: multiply;

//   width: 100%;

//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center center;

//   color: #fff;

//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// export const ProfileLogoContainer = styled.div`
//   background-color: white;
//   grid-column: 2 / span 2;
//   grid-row: 4 / span 2;
//   z-index: 10;

//   &::after {
//     content: "";
//     position: relative;
//     display: block;
//     padding-top: 100%;
//   }
// `;

// export const About = styled.div`
//   grid-column: 5 / span 4;
//   grid-row: 6 / span 2;
//   background-color: white;

//   display: flex;
//   padding: 4px !important;
//   justify-content: center;
//   align-items: center;
//   padding: 14px;
// `;

// export const RightNav = styled.div`
//   grid-column: 10 / span 2;
//   grid-row: 6 / span 2;
//   background-color: pink;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const HeaderContent = styled.div`
  padding-bottom: 6rem;

  h1 {
    font-size: 2rem;
    font-family: "Roboto Condensed", sans-serif;
    letter-spacing: 1.6rem;
    text-align: center;
    box-sizing: border-box;
  }
  @media screen and (min-width: 640px) {
    padding-bottom: 0;
    h1 {
      font-size: 4rem;
    }
  }
`;
