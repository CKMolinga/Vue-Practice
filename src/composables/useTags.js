import { ref } from "vue";

const useTags = (posts) => {
    const tags = ref([]);
    const tagsSet = new Set();

    posts.forEach((post) => {
        post.tags.forEach((tag) => tagsSet.add(tag));
    });

    tags.value = [...tagsSet];

    return { tags };
};

export default useTags;