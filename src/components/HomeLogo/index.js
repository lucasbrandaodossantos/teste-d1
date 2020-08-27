import React from "react";
import { HomeButton, AButton, DivButtonsHome } from "./styles";

class HomeLogo extends React.Component {
  render() {
    return (
      <DivButtonsHome>
        <AButton></AButton>
        <HomeButton></HomeButton>
      </DivButtonsHome>
    );
  }
}
export default HomeLogo;
