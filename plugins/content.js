export default async ({ store }) => {
  await store.dispatch('blog/getBlogPosts', null, { root: true })
}
