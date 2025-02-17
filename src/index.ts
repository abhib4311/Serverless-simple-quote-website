export default {
  async fetch(request: Request, env: Env) {
    const quotes = [
      "The best way to get started is to quit talking and begin doing. - Walt Disney",
      "Don’t let yesterday take up too much of today. - Will Rogers",
      "You learn more from failure than from success. - Unknown",
      "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
      "Act as if what you do makes a difference. It does. - William James",
      "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
      "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
      "Life is what happens when you’re busy making other plans. - John Lennon",
      "You must be the change you wish to see in the world. - Mahatma Gandhi",
      "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
      "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
      "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
      "Believe you can and you’re halfway there. - Theodore Roosevelt",
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
      "Everything you can imagine is real. - Pablo Picasso",
      "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
      "It does not matter how slowly you go as long as you do not stop. - Confucius",
      "Opportunities don't happen, you create them. - Chris Grosser",
      "The way to get started is to quit talking and begin doing. - Walt Disney",
      "If you can dream it, you can do it. - Walt Disney",
    ];

    // Select a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // HTML structure
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Quote of the Day</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              text-align: center;
              padding: 50px;
              margin: 0;
              background-color: #f4f4f9;
            }

            h1 {
              font-size: 2rem;
              color: #2c3e50;
              margin-bottom: 20px;
            }

            .quote-box {
              font-size: 24px;
              font-weight: bold;
              color: #333;
              margin: 20px 0;
              max-width: 600px;
              margin-left: auto;
              margin-right: auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              transition: opacity 0.5s ease-in-out;
            }

            .quote-box.fade-in {
              opacity: 1;
            }

            .refresh {
              padding: 10px 20px;
              font-size: 16px;
              cursor: pointer;
              background-color: #3498db;
              color: white;
              border: none;
              border-radius: 5px;
              transition: background-color 0.3s;
            }

            .refresh:hover {
              background-color: #2980b9;
            }
          </style>
        </head>
        <body>
          <h1>Random Quote Generator</h1>
          <div class="quote-box" id="quote-box">
            ${randomQuote}
          </div>
          <button class="refresh" onclick="window.location.reload()">New Quote</button>
          <script>
            // Ensure the quote box has a fade-in effect
            window.onload = () => {
              const quoteBox = document.getElementById('quote-box');
              quoteBox.classList.add('fade-in');
            };
          </script>
        </body>
      </html>
    `;

    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
};
