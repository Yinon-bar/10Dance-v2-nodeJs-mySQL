import express from "express";
import router from "./6-controllers/attendees-controller";
import cors from "cors";

const server = express();

server.use(express.json());

server.use(
    cors({
        origin: "*",
    })
);

server.use(router);

server.listen(3001, () => {
    console.log("Listening to http://localhost:3001");
});
