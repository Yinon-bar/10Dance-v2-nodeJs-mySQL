import express, { NextFunction, Request, Response } from "express";
import attendeeLogic from "../5-logic/attendee-logic";

const router = express.Router();

// Get try
router.get("/", async (req: Request, resp: Response, next: NextFunction) => {
    resp.header("Access-Control-Allow-Origin", "*");
    resp.json("hello");
});

// Get all Tables
router.get(
    "/api/tables",
    async (req: Request, resp: Response, next: NextFunction) => {
        resp.header("Access-Control-Allow-Origin", "*");
        const tables = await attendeeLogic.getAllTables();
        resp.json(tables);
    }
);

// Get all from specific table
router.get(
    "/api/:table",
    async (req: Request, resp: Response, next: NextFunction) => {
        resp.header("Access-Control-Allow-Origin", "*");
        const tableName = req.params.table;
        const attFromTable = await attendeeLogic.getAllAttFromTable(tableName);
        resp.json(attFromTable);
    }
);

// Get all attendees
router.get(
    "/api/attendees",
    async (req: Request, resp: Response, next: NextFunction) => {
        resp.header("Access-Control-Allow-Origin", "*");
        const attendees = await attendeeLogic.getAllAttendees();
        resp.json(attendees);
    }
);
// Get by tz_id
router.get(
    "/api/attendees/:tz_id",
    async (req: Request, resp: Response, next: NextFunction) => {
        resp.header("Access-Control-Allow-Origin", "*");
        const attendee = await attendeeLogic.getAttendeeById(req.params.tz_id);
        resp.json(attendee);
    }
);

export default router;
