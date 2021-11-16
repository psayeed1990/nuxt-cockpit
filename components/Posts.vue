<!-- Please remove this file from your project -->
<template>
  <div class="posts">
    <div class="posts__list">
      <div v-for="post in posts" :key="post.id" :post="post">
        <h1 v-html="post.title">{{ post.title }}</h1>
        <h1 v-html="post.excerpt">{{ post.excerpt }}</h1>
        <h1 v-html="post.published">{{ post.published }}</h1>
        <h1 v-html="post.author">{{ post.author }}</h1>
        <img
          v-bind:src="
            'http://qiezhtljvs.us09.fldrv.com/storage/uploads/2021/' +
            post.image.path
          "
        />
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
  methods: {
    async fetchPosts() {
      //console.log(postsUrl);
      const posts = await fetch(
        "http://qiezhtljvs.us09.fldrv.com/api/collections/get/posts?token=882a169623430d6a536e165b137adf",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const postsJson = await posts.json();

      this.success = true;
      this.loading = false;
      this.posts = postsJson.entries;
      console.log(this.posts);
    },
  },

  //run fetchPosts before the component is mounted

  mounted() {
    //check if window exists

    console.log("hello");
    this.fetchPosts();
  },
};
</script>
