class AttendeeModel {
    public id: number;
    public tz_id: string;
    public fName: string;
    public lName: string;
    public institute: string;
    public isArrived: boolean;

    public constructor(attendee: AttendeeModel) {
        this.id = attendee.id;
        this.tz_id = attendee.tz_id;
        this.fName = attendee.fName;
        this.lName = attendee.lName;
        this.institute = attendee.institute;
        this.isArrived = attendee.isArrived;
    }
}

export default AttendeeModel;
