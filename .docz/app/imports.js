export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'components/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-button" */ 'components/Button.mdx'),
}
