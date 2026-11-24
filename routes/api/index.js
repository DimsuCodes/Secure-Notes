import { Router } from 'express';
const router = Router();
import  noteRoutes  from '../api/noteRoutes.js';
import  userRoutes  from '../api/userRoutes.js';

router.use('/users', userRoutes);
router.use('/notes', noteRoutes);

export default  router;