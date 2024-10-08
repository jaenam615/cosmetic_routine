import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { initializeDatabase } from './config/ormconfig';
import { setupRoutes } from './routes/routes';
import dotenv from 'dotenv';
import morgan from 'morgan';
import app from './app';
import createRateLimiter from './middlewares/rate-limit.middleware';

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*', // Replace with your allowed origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
}));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: true }));

app.use(morgan('combined'));

const rateLimiter = createRateLimiter();
app.use(rateLimiter);


async function startServer() {
    try {
        await initializeDatabase();
        console.log('Database initialized successfully');

        setupRoutes(app);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log('Database connected to:', process.env.DB_HOST);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
}

startServer();
