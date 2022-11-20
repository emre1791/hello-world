import http from "http";

const PORT = 8080;

const server = http.createServer((_req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(
    'Hello World!<br /><a href="https://github.com/emre1791/hello-world">Repository</a>'
  );
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
