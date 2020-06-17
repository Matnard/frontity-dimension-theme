import React from "react";
import { connect, styled } from "frontity";
import Nav from "./nav";

const Header = ({ state, transitionState }) => {
  const { isPageLoaded } = state.theme;

  return (
    <SiteHeader id="header" isPreload={!isPageLoaded} state={transitionState}>
      <div className="logo">
        <span className="icon fa-gem"></span>
      </div>
      <div className="content">
        <div className="inner">
          <h1>{state.frontity.title}</h1>
          {/* <p>{state.frontity.description}</p> */}
          <p>
            A fully responsive site template designed by HTML5 UP and released{" "}
            <br />
            for free under the Creative Commons license.
          </p>
        </div>
      </div>
      <Nav />
    </SiteHeader>
  );
};

const SiteHeader = styled.header`
display: ${({ state }) => (state === "exited" ? "none" : "flex")};
flex-direction: column;
align-items: center;
transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
background-image: radial-gradient(
  rgba(0, 0, 0, 0.25) 25%,
  rgba(0, 0, 0, 0) 55%
  );
  max-width: 100%;
  text-align: center;
  
  ${({ state }) =>
    state === "exiting" || state === "entering"
      ? "transform: scale(0.95);"
      : ""}
  ${({ state }) =>
    state === "exiting" || state === "entering" ? "filter: blur(0.1rem);" : ""}
  
  opacity: ${({ state }) =>
    state === "exiting" || state === "entering" ? 0 : 1};
  
  
  ${({ isPreload }) => (isPreload ? "filter: blur(0.125rem);" : "")}
  
  > * {
    transition: opacity 0.325s ease-in-out;
    position: relative;
    margin-top: 3.5rem;
    opacity: ${({ isPreload }) => (isPreload ? 0 : 1)};
  }
  
  > *:before {
    content: "";
    display: block;
    position: absolute;
    top: calc(-3.5rem - 1px);
    left: calc(50% - 1px);
    width: 1px;
    height: calc(3.5rem + 1px);
    background: #ffffff;
  }
  
  > :first-child {
    margin-top: 0;
  }
  
  > :first-child:before {
    display: none;
  }
  
  .logo {
    width: 5.5rem;
    height: 5.5rem;
    line-height: 5.5rem;
    border: solid 1px #ffffff;
    border-radius: 100%;
  }
  
  .logo .icon:before {
    font-size: 2rem;
  }
  
  .content {
    border-style: solid;
    border-color: #ffffff;
    border-top-width: 1px;
    border-bottom-width: 1px;
    max-width: 100%;
  }
  
  .content .inner {
    transition: max-height 0.75s ease, padding 0.75s ease,
    opacity 0.325s ease-in-out;
    transition-delay: 0.25s;
    padding: 3rem 2rem;
    max-height: 40rem;
    overflow: hidden;

    ${(props) => (props.isPreload ? "max-height: 0;" : "")}
    ${(props) => (props.isPreload ? "padding-top: 0;" : "")}
    ${(props) => (props.isPreload ? "padding-bottom: 0;" : "")}
    ${(props) => (props.isPreload ? "opacity: 0;" : "")}			
  }
  
  .content .inner > :last-child {
    margin-bottom: 0;
  }

  .content p {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size: 0.8rem;
    line-height: 2;
  }
  `;

export default connect(Header);
