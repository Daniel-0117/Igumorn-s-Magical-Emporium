const cors = require('cors'); // Import CORS
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const mongoose = require('mongoose');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const apiRoutes = require('./routes/api');

const PORT = process.env.PORT || 3001;
const app = express();

mongoose.set('strictQuery', true);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//  Mount API routes FIRST
app.use('/api', apiRoutes);

//  Always serve static files (remove the NODE_ENV check)
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Start Apollo server and DB connection
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}`);
      console.log(`GraphQL: http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer(typeDefs, resolvers);
