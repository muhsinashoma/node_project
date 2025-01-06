import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();

router.get('/', UserController.getAll);
router.get('/create', UserController.createForm);
router.post('/', UserController.create);                  //2nd start from here
router.get('/:id', UserController.show);
router.get('/:id/edit', UserController.editForm);
router.post('/:id/update', UserController.update);
router.post('/:id/delete', UserController.delete);

export default router;