const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    title: { 
        type: String, 
        required: [true, 'Title field is required'] 
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
   
    location: { 
        type: String, 
        required: [true, 'Location field is required'] 
    },
    type: { 
        type: String, 
        required: [true, 'Type field is required'] 
    },
    deadline: { 
        type: Date, 
        required: [true, 'deadline field is required']
    },
    salaryRange: { 
        type: String, 
        required: [true, 'Salary range field is required'] 
    },
    applyId: [{
        type: mongoose.Types.ObjectId,
        ref: "Apply"
    }],
    candidates: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
  
}, { timestamps: true });

const Job = new mongoose.model("Job", jobSchema);
module.exports = Job