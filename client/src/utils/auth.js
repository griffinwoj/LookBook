import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import decode from 'jwt-decode';

// Create a new class to instantiate for a user
class AuthService {
  constructor() {
    // Create an instance of Express
    this.app = express();

    // Initialize an instance of ApolloServer with the schema and resolvers
    this.server = new ApolloServer({
      // ...Apollo Server configuration options...
    });

    // Start the Apollo Server and apply the middleware
    this.startServer();
  }

  async startServer() {
    await this.server.start();
    this.server.applyMiddleware({ app: this.app });
    console.log('Apollo Server started');
  }

  // Rest of the class methods...
}

export default new AuthService();
