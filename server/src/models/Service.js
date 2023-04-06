import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
    },
    description: {
        type: String,
        minLength: 5,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
});

serviceSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.createdAt;
    },
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;
