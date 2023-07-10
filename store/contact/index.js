export const state = () => ({
  name: "",
  email: "",
  subject: "",
  msg: "",
});

export const mutations = {
  add(state, payload) {
    state.name = payload.name;
    state.email = payload.email;
    state.subject = payload.subject;
    state.msg = payload.msg;
  },
  remove(state) {
    state.name = '';
    state.email = '';
    state.subject = '';
    state.msg = '';
  },
};

export const actions = {
  addAction({commit, dispatch, state}, payload) {
    commit('remove');
    commit('add',payload);
  },
  removeAction({commit, dispatch, state}, payload) {
    commit('remove');
  }
};

export const getters = {
  getContact(state) {
    return {
      name: state.name,
      email: state.email,
      subject: state.subject,
      msg: state.msg,
    };
  },
};
