<template>
  <Layout>

    <h1>Thoughts (by William Di Pasquale)</h1>

    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
      <div>
        <p v-for="paragraph in edge.node.content.split('\n')" :key="paragraph" v-text="paragraph" />
      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Thoughts, by William Di Pasquale",
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        date
        tags
        content
      }
    }
  }
}
</page-query>
