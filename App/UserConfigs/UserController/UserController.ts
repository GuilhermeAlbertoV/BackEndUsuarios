import table from "../UserModel/UserTable";
import { Request, Response, json } from "express";

async function post(req: Request) {
  const criar = await table
    .create({
      id: req.params.id,
      firstName: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
    })
    .then((res) => {
      const conv = JSON.stringify(res);
      console.log(conv);
    })
    .catch((err) => {
      console.log("Houve um Erro:" + err);
    });
}

export default {
  post,
};
