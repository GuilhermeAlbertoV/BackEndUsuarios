import { Sequelize } from "sequelize";

const sequelize = new Sequelize("crudusuarios", "root", "Outubro2007", {
  host: "localhost",
  dialect: "mysql",
});

export default {
  sequelize: sequelize,
  Sequelize: Sequelize,
};
