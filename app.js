require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const errorHandler = require("./middleware/error-handler");
const notFoundMiddleWare = require("./middleware/not-found");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products route </a>');
});

app.use("/api/v1/products", productsRouter);

//products route

app.use(errorHandler);
app.use(notFoundMiddleWare);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`App is starting on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
