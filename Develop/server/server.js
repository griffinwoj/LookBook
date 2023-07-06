import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import decode from 'jwt-decode';

class AuthService {
  constructor() {
    this.app = express();
    this.server = null; // Declare the Apollo Server instance

    this.initializeApolloServer();
  }

  async initializeApolloServer() {
    // Initialize the Apollo Server instance with the schema and resolvers
    this.server = new ApolloServer({
      // ...Apollo Server configuration options...
    });

    // Start the Apollo Server
    await this.server.start();

    // Apply the middleware after the server has started
    this.server.applyMiddleware({ app: this.app });

    console.log('Apollo Server started');
  }

  // Rest of the class methods...
}

export default new AuthService();
