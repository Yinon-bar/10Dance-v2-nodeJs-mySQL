"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttendeeModel {
    constructor(attendee) {
        this.id = attendee.id;
        this.tz_id = attendee.tz_id;
        this.fName = attendee.fName;
        this.lName = attendee.lName;
        this.institute = attendee.institute;
        this.isArrived = attendee.isArrived;
    }
}
exports.default = AttendeeModel;
