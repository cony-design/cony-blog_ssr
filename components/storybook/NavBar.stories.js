export default {
  title: 'NavBar',
  component: 'NavBar',
  argTypes: {},
}

// exportすることでコンポーネントを登録
export const MediaList = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <NavBar />`,
})