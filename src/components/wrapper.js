import { styled } from "frontity";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 4rem 2rem;
  z-index: 3;

  &:before {
    content: "";
    display: block;
  }

  @media screen and (max-width: 1680px) {
    padding: 3rem 2rem;
  }

  @media screen and (max-width: 736px) {
    padding: 2rem 1rem;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`;

export default Wrapper;
