import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./router";

dotenv.config();

const server = express();

server.set("view ngine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.set("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

//ROTAS

server.use(mainRoutes);

server.use((req, res) => {
  res.send("Pagina não encontrada!");
});

server.listen(process.env.PORT);
