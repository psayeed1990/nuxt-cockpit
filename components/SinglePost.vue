<template>
  <div class="single-post">
    <div class="post-title">
      <h1>{{ post.title }}</h1>
    </div>
    <div class="post-content">
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {
      post: {},
    };
  },

  async fetch() {
    const post = await fetch(
      this.$config.baseURL + "&filter[_id]=" + this.$route.params.id,
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const postJson = await post.json();
    console.log(postJson);
    this.posts = postJson;
  },

  created() {
    if (typeof window === "undefined") {
      this.$fetch();
    }
  },
};
</script>
