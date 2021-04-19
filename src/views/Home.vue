<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  <div v-if="loading">Loading...</div>

  <ul v-else-if="result && result.allPosts">
    <li v-for="p of result.allPosts" :key="p.id">
      {{ p.title }}
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { gql } from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';

export default defineComponent({
  name: 'Home',
  components: {
  },
  data: function() {
    return {
      lista: []
    }
  },
  setup() {
    const { result, loading } = useQuery(gql`
      query abc {
        allPosts {
          id,
          title
        }
      }
    `);

    setTimeout(() => {
      result.value  = null;
    }, 1000)

    return {
      result,
      loading,
    }
  },
});
</script>
