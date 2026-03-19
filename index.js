const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Hello from Azure 🚀");
  res.end();
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  
