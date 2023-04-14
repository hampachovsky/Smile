import Router from 'express';

const router = new Router();

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (username === 'admin' && password === 'admin') {
            return res.status(200).json({ status: 200 });
        }
        return res.status(400).json({ message: 'invalid login or password' });
    } catch (error) {
        return res.status(404).send('failed login');
    }
});

export default router;
