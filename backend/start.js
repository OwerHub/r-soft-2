const app = require("./server");
const PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log("Express server listening on port ", PORT); // eslint-disable-line
});
