import Service from '../models/Service.js';

const serviceController = {
    async getAll(req, res) {
        try {
            const services = await Service.find();
            return res.status(200).json(services);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take services' });
        }
    },
    async getById(req, res) {
        const { id } = req.params;
        try {
            const service = await Service.findById(id);
            if (!service) return res.status(500).json({ error: 'Service not found' });
            return res.status(200).json(service);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take service' });
        }
    },
    async create(req, res) {
        try {
            const { name, description, price, currency } = req.body;

            const candidate = await Service.findOne({ name });
            if (candidate) return res.status(409).json({ error: 'Service already exist' });
            const serviceToAdd = {
                name,
                description,
                price,
                currency,
            };
            const service = await Service.create(serviceToAdd);
            return res.status(200).json(service);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'failed create service' });
        }
    },
    async delete(req, res) {
        try {
            const serviceId = req.params.id;
            if (!serviceId) return res.status(400).json({ error: 'Service id not provided' });
            await Service.findByIdAndRemove(serviceId);
            return res.status(200).json(null);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'failed delete service' });
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ error: 'Id missed' });
            }
            const updatedService = await Service.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            return res.status(200).json(updatedService);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: 'Update service error' });
        }
    },
};

export default serviceController;
