import React from "react";
import { NewJourneyBt, TextButton } from "./styles";
import { PlusIcon } from "../Search/styles.js";
import NewJourney from "../../pages/newJourney";

class NewJourneyButton extends React.Component {
  
  state = {
    isOpen:false
  }
  render() {
    return (
      <NewJourneyBt onClick={(e) => this.setState({ isOpen: true })}>
        <PlusIcon src="/assets/icons/plus.svg"></PlusIcon>
        <TextButton>Nova Jornada</TextButton>
        <NewJourney isOpen = {this.state.isOpen}></NewJourney>
      </NewJourneyBt>

    );
  }
}
export default NewJourneyButton;
