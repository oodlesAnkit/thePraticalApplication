const mongoose = require('mongoose');
const AcademicTermSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true,
            default: '3 months'
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'Admin',
            required: true
        }
    }
);


const AcademicTerm = mongoose.model('AcademicTerm', AcademicTermSchema);
module.exports = AcademicTerm;