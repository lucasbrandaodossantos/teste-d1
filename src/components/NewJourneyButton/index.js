import React from "react";
import { NewJourneyBt, TextButton } from "./styles";
import { PlusIcon } from "../Search/styles.js";
class NewJourneyButton extends React.Component {
  render() {
    return (
      <NewJourneyBt>
        <PlusIcon src="/assets/icons/plus.svg"></PlusIcon>
        <TextButton>Nova Jornada</TextButton>
      </NewJourneyBt>
    );
  }
}
export default NewJourneyButton;
