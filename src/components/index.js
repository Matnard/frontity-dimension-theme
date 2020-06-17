import React, { useEffect, useState } from "react";
import Bg from "./bg";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Title from "./title";
import Wrapper from "./wrapper";
import Post from "./post";
import { connect, Global, css, Head } from "frontity";
import Switch from "@frontity/components/switch";
import mainCss from "../styles.css";
import { Transition } from "react-transition-group";

const Theme = ({ state, actions }) => {
  const { setIsPageLoaded } = actions.theme;
  useEffect(() => {
    setIsPageLoaded();
  }, []);

  const data = state.source.get(state.router.link);
  const [showMain, setShowMain] = useState(!data.isHome);
  const TIMEOUT = 325;
  return (
    <>
      <Global styles={css(mainCss)} />
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>
      <Wrapper>
        <Transition
          in={data.isHome}
          timeout={TIMEOUT}
          onEntering={() => setShowMain(false)}
          onExited={() => setShowMain(true)}
        >
          {(transitionState) => <Header transitionState={transitionState} />}
        </Transition>

        <Main isDisplayed={showMain}>
          <Switch>
            <Post when={data.isPostType} timeout={TIMEOUT} />
          </Switch>
        </Main>

        <Transition in={data.isHome} timeout={TIMEOUT}>
          {(transitionState) => <Footer transitionState={transitionState} />}
        </Transition>
      </Wrapper>
      <Bg isBlurred={!data.isHome} isPreload={!state.theme.isPageLoaded} />
    </>
  );
};

export default connect(Theme);
