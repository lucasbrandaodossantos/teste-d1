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
  padding-left: 3px;
  margin-left: 15px;
`;

export const PlusIcon = styled(Icon)`
  align-self: center;
  justify-self: flex;
  filter: invert(100%);
`;

export const SearchIcon = styled(Icon)`
  align-self: center;
  justify-self: flex;
`;

export const Input = styled.input`
  width: 296px;
  height: 35px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccfde;
  border-radius: 5px;
  opacity: 1;
  margin-right: 15px;

  ::placeholder {
    padding-left: 35px;
    color: #9196ab;
  }
  &:focus{
    box-shadow: 5px 5px 50px #888888;
    outline-style: none!important;
    ::placeholder{      
      color:transparent;
    }
  }
`;
