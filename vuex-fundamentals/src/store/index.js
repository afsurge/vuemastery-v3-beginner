import { createStore } from "vuex";

export default createStore({
  state: {
    user: "Abrar Faisal",
    events: [],
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },
  actions: {},
  modules: {},
});
