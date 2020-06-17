import { styled } from "frontity";
import overlayImage from "../images/overlay.png";
import bgImage from "../images/bg.jpg";

export default styled.div`
  transform: scale(1);
  -webkit-backface-visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:before {
    transition: background-color 2.5s ease-in-out;
    transition-delay: 0.75s;
    background-image: linear-gradient(
        to top,
        rgba(19, 21, 25, 0.5),
        rgba(19, 21, 25, 0.5)
      ),
      url(${overlayImage});
    background-size: auto, 256px 256px;
    background-position: center, center;
    background-repeat: no-repeat, repeat;
    z-index: 2;

    ${(props) => (props.isPreload ? "background-color: #000000;" : "")}
  }

  &:after {
    transform: scale(1.125);
    transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out;
    background-image: url(${bgImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    ${(props) => (props.isBlurred ? "transform: scale(1.0825);" : "")}
    ${(props) => (props.isBlurred ? "filter: blur(0.2rem);" : "")}
  }
`;
