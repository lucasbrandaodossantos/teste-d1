import React from "react";
import {
  PopUPDiv,
  PopUPDivContent,
  Head,
  Title,
  Description,
  Continue,
  Cancel,
} from "./styles.js";
class NewJourney extends React.Component {
  render() {
    let popUp = (
      <PopUPDiv>
        <PopUPDivContent>
          <Head>Nova Jornada</Head>
          <Title></Title>
        </PopUPDivContent>
      </PopUPDiv>
    );

    if (!this.props.isOpen) {
      popUp = null;
    }
    return <div>{popUp}</div>;
  }
}
export default NewJourney;
