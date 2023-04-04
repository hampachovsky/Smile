import 'dotenv/config';

const PORT = process.env.PORT || 5001;

const { MONGODB_URI } = process.env;

export { PORT, MONGODB_URI };
