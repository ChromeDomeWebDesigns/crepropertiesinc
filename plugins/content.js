export default async ({ store }) => {
  await Promise.all([store.dispatch('blog/getBlogPosts', null, { root: true }), store.dispatch('listings/getListings', null, { root: true })])
}
