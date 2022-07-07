import styled from "styled-components";

const StyledToolbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ff4500;
`;

const ButtonNav = styled.button`
  margin: 10px;
  border: none;
  background-color: #ff4500;
  color: #fffafa;
  font-size: 20px;
`;

export { StyledToolbar, ButtonNav };
