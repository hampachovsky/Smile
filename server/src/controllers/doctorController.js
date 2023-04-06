import Doctor from '../models/Doctor.js';

const doctorController = {
    async getAll(req, res) {
        try {
            const doctors = await Doctor.find();
            return res.status(200).json(doctors);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take doctors' });
        }
    },
    async getById(req, res) {
        const { id } = req.params;
        try {
            const doctor = await Doctor.findById(id);
            if (!doctor) return res.status(500).json({ error: 'Doctor not found' });
            return res.status(200).json(doctor);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take doctor' });
        }
    },
    async create(req, res) {
        try {
            const { photo, fullName, specialization, experience } = req.body;

            if (!photo) {
                return res.status(400).json({ error: 'Photo not provided' });
            }
            const candidate = await Doctor.findOne({ fullName });
            if (candidate) return res.status(409).json({ error: 'Doctor already exist' });
            const doctorToAdd = {
                photo,
                fullName,
                specialization,
                experience,
            };
            const doctor = await Doctor.create(doctorToAdd);
            return res.status(200).json(doctor);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'failed create category' });
        }
    },
};

export default doctorController;
