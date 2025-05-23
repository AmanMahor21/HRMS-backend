import mongoose from "mongoose";

const CandidateSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true

    },
    profile: {
        type: String,
        // required: true

    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,

    },
    phone_number: {
        type: String,
        required: true,
        minlength: 10,
    },
    position: {
        type: String,
        required: true

    },
    department: {
        type: String,
        // required: true

    },
    date_of_joining: {
        type: Date,
        // required: true

    },
    experience: {
        type: String,
        required: true,
        // min: [0, 'Experience must be a non-negative number'],

    },
    resume: {
        type: String,
        required: true

    },
    leave_reason: {
        type: String,
        // required: true

    },
    leave_date: {
        type: String,
        // required: true

    },
    leave_doc: {
        type: String,
        // required: true
        default: 'new',


    },
    leave_status: {
        type: String,
        enum: ['pending', 'approve', "reject"],
        default: 'pending',

    },
    status: {
        type: String,
        required: true,
        enum: ['new', 'scheduled', 'ongoing', 'selected', 'rejected'],
        default: 'new',

    }, attendance_status: {
        type: String,
        required: true,
        enum: ['pending', 'present', 'absent'],
        default: 'pending',

    },
    attendance_task: {
        type: String,
        required: true,
        default: 'Testing...',

    },


},
    {
        timestamps: true,
    });

const Candidate = mongoose.model("Candidate", CandidateSchema);

export default Candidate;
