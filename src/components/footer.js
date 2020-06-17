import React from "react";
import { connect, styled } from "frontity";

const SiteFooter = styled.footer`
	display: ${({ state }) => (state === "exited" ? "none" : "block")};
	transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
	width: 100%;
	max-width: 100%;
	margin-top: 2rem;
	text-align: center;
	${({ state }) =>
    state === "exiting" || state === "entering"
      ? "transform: scale(0.95);"
      : ""}
	${({ state }) =>
    state === "exiting" || state === "entering" ? "filter: blur(0.1rem);" : ""}
	opacity: ${({ state }) =>
    state === "exiting" || state === "entering" ? "0" : "1"};
	opacity: ${(props) => (props.isPreload ? "0" : "1")};

	.copyright {
		letter-spacing: 0.2rem;
		font-size: 0.6rem;
		opacity: 0.75;
		margin-bottom: 0;
		text-transform: uppercase;
	}
`;

const Footer = ({ state, transitionState }) => {
  const { isPageLoaded } = state.theme;

  return (
    <SiteFooter id="footer" isPreload={!isPageLoaded} state={transitionState}>
      <p className="copyright">
        &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
        Images: <a href="https://unsplash.com">Unsplash</a>.
      </p>
    </SiteFooter>
  );
};

export default connect(Footer);
