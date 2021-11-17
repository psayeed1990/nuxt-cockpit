<template>
  <div>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts</p>

    <div v-else class="posts">
      <div class="posts-list">
        <div v-for="post in posts" :key="post.id" :post="post">
          <h1 class="post-title" v-html="post.title"></h1>
          <h1 class="post-excerpt" v-html="post.excerpt"></h1>

          <h1 class="post-created">
            {{ new Date(post._created).toLocaleString() }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  data() {
    return {
      success: false,
      loading: false,
      posts: [],
    };
  },

  async fetch() {
    const posts = await fetch(this.$config.postsURL, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    });

    const postsJson = await posts.json();

    this.success = true;
    this.loading = false;
    console.log(postsJson.entries);
    this.posts = postsJson.entries;
  },

  //run fetchPosts before the component is mounted

  created() {
    //check if window exists
    if (typeof window === "undefined") {
      this.$fetch();
    }
  },
};
</script>
