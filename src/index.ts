import http from "http";

const PORT = 8080;

const server = http.createServer((_req, res) => {
  res.end("Hello World!");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
