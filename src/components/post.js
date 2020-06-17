import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import { connect, styled } from "frontity";

const Post = (props) => {
  const { libraries, actions, state, timeout } = props;

  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  console.log(data);
  const post = state.source[data.type][data.id];

  const [triggered, setTriggered] = useState(true);

  const Html2React = libraries.html2react.Component;
  const onClose = () => {
    setTriggered(false);
  };

  const onExited = () => {
    actions.router.set("/");
  };

  useEffect(() => {
    actions.source.fetch("/");
  }, []);

  return (
    <Transition
      appear={true}
      in={triggered}
      timeout={timeout}
      onExited={onExited}
    >
      {(transitionState) => (
        <Article state={transitionState}>
          <h2
            className="major"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <Html2React html={post.content.rendered} />
          <Close onClick={onClose} role="button" />
        </Article>
      )}
    </Transition>
  );
};

// Connect the Post to gain access to `state` as a prop
export default connect(Post);

const Article = styled.article`
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
  transform: translateY(
    ${({ state }) =>
      state === "entering" || state === "exiting" ? "0.25rem" : "0"}
  );
  transition: opacity 0.325s ease-in-out, transform 0.325s ease-in-out;
  padding: 4.5rem 2.5rem 1.5rem 2.5rem;
  position: relative;
  width: 40rem;
  max-width: 100%;
  background-color: rgba(27, 31, 34, 0.85);
  border-radius: 4px;
  opacity: ${({ state }) =>
    state === "entering" || state === "exiting" ? "0" : "1"};

  @media screen and (max-width: 736px) {
    padding: 3.5rem 2rem 0.5rem 2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 3rem 1.5rem 0.5rem 1.5rem;
  }

  img {
    width: 100%;
  }
`;

const Close = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  text-indent: 4rem;
  overflow: hidden;
  white-space: nowrap;

  &:before {
    transition: background-color 0.2s ease-in-out;
    content: "";
    display: block;
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    background-position: center;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23ffffff%3B stroke-width: 1%3B %7D%3C/style%3E%3Cline x1='2' y1='2' x2='18' y2='18' /%3E%3Cline x1='18' y1='2' x2='2' y2='18' /%3E%3C/svg%3E");
    background-size: 20px 20px;
    background-repeat: no-repeat;
  }

  &:hover:before {
    background-color: rgba(255, 255, 255, 0.075);
  }

  &:active:before {
    background-color: rgba(255, 255, 255, 0.175);
  }

  @media screen and (max-width: 736px) {
    &:before {
      top: 0.875rem;
      left: 0.875rem;
      width: 2.25rem;
      height: 2.25rem;
      background-size: 14px 14px;
    }
  }
`;
