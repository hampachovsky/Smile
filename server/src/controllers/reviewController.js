import Review from '../models/Review.js';

const reviewController = {
    async getAll(req, res) {
        try {
            const reviews = await Review.find();
            return res.status(200).json(reviews);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take reviews' });
        }
    },
    async getById(req, res) {
        const { id } = req.params;
        try {
            const review = await Review.findById(id);
            if (!review) return res.status(500).json({ error: 'Review not found' });
            return res.status(200).json(review);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take review' });
        }
    },
    async create(req, res) {
        try {
            if (req.body.ratio > 5 || req.body.ratio < 1)
                return res.status(400).json({ error: 'ratio should be between 1 and 5' });
            const review = await Review.create(req.body);
            return res.status(200).json(review);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'failed create review' });
        }
    },
    async delete(req, res) {
        try {
            const reviewId = req.params.id;
            if (!reviewId) return res.status(400).json({ error: 'Review id not provided' });
            await Review.findByIdAndRemove(reviewId);
            return res.status(200).json(null);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'failed delete review' });
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ error: 'Id missed' });
            }
            const updatedReview = await Review.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            return res.status(200).json(updatedReview);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: 'Update review error' });
        }
    },
};

export default reviewController;
