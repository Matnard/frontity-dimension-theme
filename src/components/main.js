import { styled } from "frontity";

const Main = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: ${(props) => (props.isDisplayed ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  max-width: 100%;
  z-index: 3;
`;

export default Main;
