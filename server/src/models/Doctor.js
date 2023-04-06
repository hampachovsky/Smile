import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minLength: 1,
    },
    experience: {
        type: Number,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
});

doctorSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.createdAt;
    },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;
