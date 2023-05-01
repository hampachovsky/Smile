import Offer from '../models/Offer.js';

const offerController = {
    async getAll(req, res) {
        try {
            const offers = await Offer.find();
            return res.status(200).json(offers);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take offers' });
        }
    },
    async getById(req, res) {
        const { id } = req.params;
        try {
            const offer = await Offer.findById(id);
            if (!offer) return res.status(500).json({ error: 'Offer not found' });
            return res.status(200).json(offer);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take offer' });
        }
    },
    async create(req, res) {
        try {
            const { image, title, description } = req.body;

            if (!image) {
                return res.status(400).json({ error: 'Image not provided' });
            }
            const candidate = await Offer.findOne({ title });
            if (candidate) return res.status(409).json({ error: 'Offer already exist' });
            const offerToAdd = {
                image,
                title,
                description,
            };
            const offer = await Offer.create(offerToAdd);
            return res.status(200).json(offer);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'failed create offer' });
        }
    },
    async delete(req, res) {
        try {
            const offerId = req.params.id;
            if (!offerId) return res.status(400).json({ error: 'Offer id not provided' });
            await Offer.findByIdAndRemove(offerId);
            return res.status(200).json(null);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'failed delete offer' });
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ error: 'Id missed' });
            }
            const updatedOffer = await Offer.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            return res.status(200).json(updatedOffer);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: 'Update offer error' });
        }
    },
};

export default offerController;
