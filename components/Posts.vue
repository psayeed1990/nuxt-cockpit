<template>
  <div>
    <div class="posts">
      <div class="posts-list">
        <div v-for="post in posts" :key="post._id" :post="post">
          <!-- <a :href="'/posts/' + post._id"
            ><h1 class="post-title" v-html="post.title"></h1
          ></a> -->
          <nuxt-link :to="`/posts/${post._id}`">{{ post.title }}</nuxt-link>

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
