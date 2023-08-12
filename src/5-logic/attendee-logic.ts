import dal from "../2-utils/dal";

// Get all tables
async function getAllTables() {
    const attendees = await dal.execute("SHOW TABLES;");
    return attendees;
}

async function getAllAttendees() {
    // const attendees = await dal.execute("SELECT * FROM attendees;");
    const attendees = await dal.execute("SELECT * FROM attendees;");
    return attendees;
}

async function getAttendeeByTableAndId(table: string, tz_id: any) {
    const attendees = await dal.execute(
        `SELECT * FROM ${table} WHERE tz_id = ${tz_id};`
    );
    return attendees;
}

async function getAllAttFromTable(table: string) {
    // console.log(table);
    const attendees = await dal.execute(`SELECT * FROM ${table};`);
    return attendees;
}

export default {
    getAllTables,
    getAllAttendees,
    getAttendeeByTableAndId,
    getAllAttFromTable,
};
