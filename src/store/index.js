import { createStore } from 'vuex'

export default createStore({
  modules: {
    años: {
      state() {
        return {
          year: "",
        };
      },
      getters: {
        getYear(state) {
          return state.year;
        }
      },
      mutations: {
        setYear(state, year){
          state.year = year;
        }
      },
      actions: {
        modifyYear({commit}, year){
          commit("setYear", year);
        }
      },
    },
  }
});
