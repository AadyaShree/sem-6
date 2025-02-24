# Notes for Creating HTTP Server

## Introduction
Creating an HTTP server involves setting up a server that can handle HTTP requests and send responses. This is fundamental for web development.

## Steps to Create an HTTP Server

1. **Install Node.js**
    - Ensure Node.js is installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

2. **Create a New Project**
    - Initialize a new Node.js project:
      ```sh
      npm init -y
      ```

3. **Install Required Packages**
    - Install the `http` module (built-in with Node.js):
      ```sh
      npm install http
      ```

4. **Create the Server File**
    - Create a file named `server.js` and add the following code:
      ```js
      const http = require('http');

      const hostname = '127.0.0.1';
      const port = 3000;

      const server = http.createServer((req, res) => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'text/plain');
         res.end('Hello, World!\n');
      });

      server.listen(port, hostname, () => {
         console.log(`Server running at http://${hostname}:${port}/`);
      });
      ```

5. **Run the Server**
    - Start the server by running:
      ```sh
      node server.js
      ```

6. **Access the Server**
    - Open a web browser and navigate to `http://127.0.0.1:3000/` to see the response from the server.

## Conclusion
By following these steps, you can create a basic HTTP server using Node.js. This server can be expanded to handle more complex requests and serve different types of content.
