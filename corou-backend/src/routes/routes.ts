import { Express } from 'express';
import { setupUserRouter } from './user.router';
import { setupItemRouter } from './item.router';
import { setupRoutineRouter } from './routine.router';
import { setupReviewRouter } from './review.router';
import { setupOrderRouter } from './order.router';

export function setupRoutes(app: Express) {
    app.use('/api/user', setupUserRouter());
    app.use('/api/routine', setupRoutineRouter());
    app.use('/api/item', setupItemRouter());
    app.use('/api/review', setupReviewRouter());
    app.use('/api/order', setupOrderRouter());
}