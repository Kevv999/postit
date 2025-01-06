// Import the PrismaClient class from the Prisma package
const { PrismaClient } = require('@prisma/client');

// Instantiate the PrismaClient
const prisma = new PrismaClient();  

// Export the PrismaClient instance for reuse across your project
module.exports = prisma;
