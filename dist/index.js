"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index = (0, express_1.default)();
class Index {
    constructor() {
        this.servidor();
        this.rotas();
    }
    rotas() {
        index.get("/", (req, res) => {
            res.send("<h1> ola <h1>");
        });
    }
    servidor() {
        index.listen(5000, () => {
            console.log("Rodando na porta 500");
        });
    }
}
new Index();
