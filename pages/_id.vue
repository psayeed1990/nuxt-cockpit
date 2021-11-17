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
  name: "Post",
  data() {
    return {
      post: {},
    };
  },

  async fetch() {
    const post = await fetch(this.$config.postsURL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        filter: {
          _id: this.$route.params.id,
        },
      }),
    });

    const postJson = await post.json();
    console.log(postJson);
    this.post = postJson.entries[0];
  },

  created() {
    if (typeof window === "undefined") {
      this.$fetch();
    }
  },
};
</script>
