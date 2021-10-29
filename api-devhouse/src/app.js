import express, { json } from "express";
import routes from "./routes";
import mongoose from "mongoose";
import path from 'path'
class App {
  constructor() {
    /* CRIANDO UMA VARIAVEL E INSTANCIANDO O EXPRESS */
    this.server = express();

    mongoose.connect(
      "mongodb+srv://devhouse:devhouse@apidevhouse.yu1kg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      "files",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    this.server.use(json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
