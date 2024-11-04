<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <img src="https://github.com/user-attachments/assets/26d061f4-daf3-40a7-b014-633cea139d06" alt="X logo" width="200" height="200" />
    <h1>Twitter Bot in Node.js</h1>
    <p>This is a simple Twitter bot implemented in Node.js using the Twitter API v2. The bot can post tweets while adhering to a limit of 50 tweets within a 24-hour period.</p>
    <h2>Features</h2>
    <ul>
        <li>Posts tweets with a character limit of 280.</li>
        <li>Limits the number of tweets to 50 in a 24-hour period.</li>
        <li>In-memory tracking of tweets sent within the time frame.</li>
    </ul>
    <h2>Requirements</h2>
    <ul>
        <li>Node.js (v14 or higher)</li>
        <li>Twitter Developer Account with API access</li>
        <li>Twitter API keys and tokens</li>
    </ul>
    <h2>Getting Started</h2>
    <h3>1. Clone the Repository</h3>
    <pre><code>git clone https://github.com/Riotcoke123/twitterbotjs.git
cd twitterbotjs</code></pre>
    <h3>2. Install Dependencies</h3>
    <p>Make sure you have <a href="https://nodejs.org/">Node.js</a> installed, then run:</p>
    <pre><code>npm install twitter-api-v2</code></pre>
    <h3>3. Create a Configuration File</h3>
    <p>Create a file named <code>config.json</code> in the root of the project directory and add your Twitter API credentials:</p>
    <pre><code>{
  "API_KEY": "your_api_key",
  "API_KEY_SECRET": "your_api_key_secret",
  "ACCESS_TOKEN": "your_access_token",
  "ACCESS_TOKEN_SECRET": "your_access_token_secret"
}</code></pre>
    <h3>4. Update <code>bot.js</code></h3>
    <p>You can modify the example tweet in <code>bot.js</code> to suit your needs. Look for the line:</p>
    <pre><code>postTweet('Hello Twitter! This is a rate-limited tweet!');</code></pre>
    <p>Change the text inside the <code>postTweet</code> function as desired.</p>
    <h3>5. Run the Bot</h3>
    <p>Execute the bot with:</p>
    <pre><code>node bot.js</code></pre>
    <h2>License</h2>
    <p>This project is licensed under the GNU General Public License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
</body>
</html>
