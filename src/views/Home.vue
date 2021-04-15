<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { gql } from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const { result, error } = useQuery(gql`
    query abc {
      allPosts {
        id
      }
    }
    `);
    console.log(result);
    console.log(error);
  },
});
</script>
