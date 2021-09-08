import { createStore } from "vuex";

export default createStore({
  state: {
    countries: "",
  },
  mutations: {
    positionChange(state, position) {
      state.positionActive = position;
    },
  },
});
