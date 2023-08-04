import dal from "../2-utils/dal";

// Get all tables
async function getAllTables() {
    const attendees = await dal.execute("SHOW TABLES;");
    return attendees;
}

async function getAllAttendees() {
    const attendees = await dal.execute("SELECT * FROM attendees;");
    return attendees;
}

async function getAttendeeById(tz_id: string) {
    const attendees = await dal.execute(
        `SELECT * FROM attendees WHERE tz_id = ${tz_id};`
    );
    return attendees;
}

export default {
    getAllTables,
    getAllAttendees,
    getAttendeeById,
};
