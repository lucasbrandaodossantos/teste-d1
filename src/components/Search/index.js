import React from "react";
import { Input, DivSearch } from "./styles";
import NewJourneyButton from "../../components/NewJourneyButton/index.js";

class Search extends React.Component {
  render() {
    return (
      <DivSearch>
        <Input></Input>
        <NewJourneyButton></NewJourneyButton>
      </DivSearch>
    );
  }
}
export default Search;
