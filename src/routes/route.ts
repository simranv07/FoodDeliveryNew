import express from 'express';

const router = express.Router();

router.post('/auth/register',);
router.post('/auth/login',);
router.post('/menu',);
router.patch('/menu/{itemId}',);
router.get('/menu/me',);
router.get('/menu',);
router.post('/orders',);
router.get('/orders/me',);
router.get('/orders/restaurant',);
router.patch('/orders/{orderId}/accept',);
router.patch('/orders/{orderId}/cancel',);

export default router;