const { createClient } = require('redis');
const dotenv = require('dotenv');
dotenv.config();


const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

redisClient.on('connect', () => {
  console.log('✅ Redis connected');
});

redisClient.on('error', (err) => {
  console.error('❌ Redis connection error:', err);
});

// Connect once, on first import
redisClient.connect().catch((err) => {
  console.error('❌ Failed to connect to Redis:', err);
});


module.exports = redisClient;