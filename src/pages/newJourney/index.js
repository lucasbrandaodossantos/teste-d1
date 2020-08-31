import React from "react";
import {
  PopUPDiv,
  PopUPDivContent,
  HeadTitle,
  Title,
  Description,
  InputNJ,
  Continue,
  Cancel,
  LineBottomTitle,
  DivButtonsModal,
  JourneyNameTitle,
} from "./styles.js";
class NewJourney extends React.Component {

  render() {
    
    return (
      <PopUPDiv>
        <PopUPDivContent>
          <HeadTitle>
            <Title>Nova Jornada</Title>
            <LineBottomTitle></LineBottomTitle>
            <JourneyNameTitle>
              Dê um <strong>nome</strong> para essa Jornada
            </JourneyNameTitle>
          </HeadTitle>

          <InputNJ></InputNJ>
          <Description>Você poderá alterar essa informação depois.</Description>

          <DivButtonsModal>
            <Continue>Continuar</Continue>
            <Cancel>Cancelar</Cancel>
          </DivButtonsModal>
        </PopUPDivContent>
      </PopUPDiv>
    );
  }
}
export default NewJourney;
