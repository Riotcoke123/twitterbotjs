const { TwitterApi } = require('twitter-api-v2');
const config = require('./config.json');

// Initialize Twitter client using API v2
const client = new TwitterApi({
  appKey: config.API_KEY,
  appSecret: config.API_KEY_SECRET,
  accessToken: config.ACCESS_TOKEN,
  accessSecret: config.ACCESS_TOKEN_SECRET,
});

// In-memory tracking for tweet count
let tweetCount = 0;
let firstTweetTime = null;

// Function to post a tweet with rate limiting
async function postTweet(text) {
  const now = new Date();

  // Reset count if more than 24 hours have passed
  if (!firstTweetTime || (now - firstTweetTime) > 24 * 60 * 60 * 1000) {
    tweetCount = 0; // Reset the count
    firstTweetTime = now; // Update the first tweet time
  }

  // Check if daily limit is reached
  if (tweetCount >= 50) {
    console.error('Daily tweet limit reached (50). Cannot post more tweets until 24 hours have passed.');
    return;
  }

  try {
    const response = await client.v2.tweet(text);
    console.log('Tweet posted:', response.data);

    // Increment tweet count
    tweetCount += 1;

  } catch (error) {
    console.error('Error posting tweet:', error);
  }
}

// Example usage
// Uncomment one of the lines below to test

// Post a tweet if within the limit
postTweet('Hello Twitter! This is a rate-limited tweet!');

// To check the count, you can later add it back if needed
// console.log(`Tweets sent in the last 24 hours: ${tweetCount}`);
