import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8080;

import express from "express";
import cors from "cors";

import groups from "./routes/group.routes";

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/groups", groups);

server.listen(PORT, () => {
  console.log(`SERVER: http://localhost:${PORT}`);
});
