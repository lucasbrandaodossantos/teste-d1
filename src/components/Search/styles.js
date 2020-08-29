import styled from "styled-components";

export const DivSearch = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 90px;
  margin-top: 27px;
  justify-self: flex-end;
  align-self: flex-end;
`;

export const Icon = styled.img`
  width: 14px;
  height: 14px;
  position: absolute;
  margin-left: 7px;
`;

export const PlusIcon = styled(Icon)`
  align-self: center;
  justify-self: flex;
  padding-left:10px;
  filter: invert(100%);
`;

export const SearchIcon = styled(Icon)`
  align-self: center;
  justify-self: flex;
  filter: invert(27%) sepia(95%) saturate(2117%) hue-rotate(208deg) brightness(112%) contrast(101%);
  transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
    margin-left:10px;
  `;

export const Input = styled.input`
  width: 296px;
  height: 35px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccfde;
  border-radius: 5px;
  opacity: 1;
  margin-right: 15px;
  padding-left:30px;

  ::placeholder {
    color: #9196ab;
  }
  &:focus {
    box-shadow: 5px 5px 15px #888888;
    outline-style: none !important;
    ::placeholder {
      color: transparent;
    }
    &:hover {
      box-shadow: 5px 5px 20px #888888;
    }
  }
`;
