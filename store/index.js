// store/index.js
export const state = () => ({
  pageTitle: 'デフォルトタイトル'
});

export const mutations = {
  setPageTitle(state, title) {
    state.pageTitle = title;
  }
};
