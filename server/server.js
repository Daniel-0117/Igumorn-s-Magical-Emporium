const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const mongoose = require('mongoose');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const apiRoutes = require('./routes/api'); // ✅ Correct import

const PORT = process.env.PORT || 3001;
const app = express();

mongoose.set('strictQuery', true);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// ✅ Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ✅ Mount API routes before anything else
app.use('/api', apiRoutes);

// ✅ Serve static assets from React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // ✅ Catch-all to send React index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// ✅ Start Apollo server and DB
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🚀 API server running on port ${PORT}`);
      console.log(`🔮 GraphQL: http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer(typeDefs, resolvers);
