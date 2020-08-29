import React from "react";
import { SearchIcon, Input, DivSearch } from "./styles";
import NewJourneyButton from "../../components/NewJourneyButton/index.js";

class Search extends React.Component {
  render() {
    return (
      <DivSearch>
        <SearchIcon src="/assets/icons/search.svg"></SearchIcon>
        <Input placeholder="Buscar" type="search"></Input>
        <NewJourneyButton></NewJourneyButton>
      </DivSearch>
    );
  }
}
export default Search;
