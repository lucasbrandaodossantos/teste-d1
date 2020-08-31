import React from "react";
import { SearchIcon, Input, DivSearch } from "./styles";

class Search extends React.Component {
  render() {
    return (
      <DivSearch>
        <SearchIcon src="/assets/icons/search.svg"></SearchIcon>
        <Input placeholder="Buscar" type="search"></Input>
      </DivSearch>
    );
  }
}
export default Search;
