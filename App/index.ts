import Express from "express";
import db from "./UserConfigs/DB/db";
import table from "./UserConfigs/UserModel/UserTable";
import UserController from "./UserConfigs/UserController/UserController";
import bodyParser from "body-parser";

const index = Express();

class Index {
  constructor() {
    this.servidor();
    this.database();
    this.config();
    this.rotas();
  }
  database() {
    db.sequelize
      .authenticate()
      .then(() => {
        console.log("Conexão Feita com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  servidor() {
    index.listen(5000, () => {
      console.log("Rodando na porta 500");
    });
  }
  config() {
    index.use(bodyParser.json());
    index.use(bodyParser.urlencoded({ extended: false }));
  }

  rotas() {
    index.post("/postUser", UserController.post);
  }
}

new Index();
