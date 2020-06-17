import Theme from "./components";

export default {
  name: "@matnard/dimension-theme",
  roots: {
    theme: Theme,
  },
  state: {
    theme: {
      isPageLoaded: false,
    },
  },
  actions: {
    theme: {
      setIsPageLoaded: ({ state }) => {
        state.theme.isPageLoaded = true;
      },
    },
  },
};
