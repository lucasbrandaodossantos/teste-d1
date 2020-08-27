import React from "react";
import { HomeButton, AContainer, LetterA, DivButtonsHome } from "./styles";

class HomeLogo extends React.Component {
  render() {
    return (
      <DivButtonsHome>
        <AContainer title="Antônio da Silva">
          <LetterA>A</LetterA>
        </AContainer>
        <HomeButton src="/assets/images/acme-logo.png"></HomeButton>
      </DivButtonsHome>
    );
  }
}
export default HomeLogo;
