const express = require('express');
<<<<<<< HEAD
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
// const routes = require('./routes');
=======
const { typeDefs, resolvers } = require('./schemas');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const path = require('./config/connection');
>>>>>>> 9efe9566c276aad37c9d9ba341ef0f4c21ce677e

const PORT = process.env.PORT || 3001;
<<<<<<< HEAD
=======
const app = express();
>>>>>>> 9efe9566c276aad37c9d9ba341ef0f4c21ce677e
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
  startApolloServer(typeDefs, resolvers);
<<<<<<< HEAD

// app.use(routes);
=======
>>>>>>> 9efe9566c276aad37c9d9ba341ef0f4c21ce677e
