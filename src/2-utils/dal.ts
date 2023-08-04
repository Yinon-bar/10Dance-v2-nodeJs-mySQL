import mysql, { ConnectionOptions } from "mysql2";

const access: ConnectionOptions = {
    host: "localhost",
    user: "root",
    password: "",
    database: "10dance",
};

const conn = mysql.createPool(access);

// Get all Attendee
function execute(sql: string): Promise<any> {
    return new Promise((resolve, reject) => {
        conn.query(sql, (_err, rows) => {
            if (_err) {
                reject(_err);
                return;
            }
            resolve(rows);
        });
    });
}

export default {
    execute,
};
