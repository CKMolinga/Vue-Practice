<template>
  <div class="tag">
    <div class="error" v-if="error">{{ error }}</div>
    <div class="posts" v-if="posts.length">
      <PostList :posts="postsWithTag" />
    </div>
    <div class="spinner" v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";

import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: {
    Spinner,
    PostList,
  },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { error, posts, postsWithTag };
  },
};
</script>

<style></style>
