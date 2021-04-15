import { createApp } from 'vue';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

const httpLink = createHttpLink({ uri: 'http://localhost:3000/graphql' });
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(store)
  .use(router)
  .mount('#app');
