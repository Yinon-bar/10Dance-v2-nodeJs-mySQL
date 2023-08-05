import mysql, { ConnectionOptions } from "mysql2";

// Local
// const access: ConnectionOptions = {
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "10dance",
// };

// Remote - bluehost
const access: ConnectionOptions = {
    host: "50.87.237.60",
    user: "zerdance_yinon",
    password: "INONab@053508384",
    database: "zerdance_general",
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
