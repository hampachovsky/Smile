import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minLength: 1,
    },
    content: {
        type: String,
        minLength: 5,
        required: true,
    },
    ratio: {
        type: Number,
        max: 5,
        min: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
});

reviewSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
