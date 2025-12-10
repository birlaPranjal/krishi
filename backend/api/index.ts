/**
 * Vercel Serverless Function Entry Point
 * This file is used by Vercel to deploy the Express app as a serverless function
 * 
 * Note: Vercel will compile this file and handle the import from src/index.ts
 * The build process compiles the entire backend before deploying
 * The handler will automatically connect to MongoDB on first invocation
 */
import handler from '../src/index.js';

// Export the handler for Vercel serverless functions
// The handler includes database connection management
export default handler;

