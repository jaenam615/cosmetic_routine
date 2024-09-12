import { Router } from 'express';
import { container } from 'tsyringe';
import { ItemController } from '../controllers/item.controller';
import { ReviewController } from '../controllers/review.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

export function setupUserRouter(): Router {
    const router = Router();
    const itemController = container.resolve(ItemController);
    const reviewController = container.resolve(ReviewController);

    router.get('/:item_key', (req, res) => itemController.getItemByKey(req, res));
    router.get('/', (req, res) => itemController.getAllItems(req, res));
    router.post('/:item_key/review', authMiddleware, (req, res) => reviewController.createItemReview(req, res));
    router.put('/:item_key', authMiddleware, (req, res) => itemController.updateItem(req, res));

    return router;
}