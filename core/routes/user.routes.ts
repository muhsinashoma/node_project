import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();

router.get('/', UserController.getAll);     //Cannot GET /users    step 1


// Show create form
router.get('/create', UserController.createForm);


//2nd start from here

router.post('/', UserController.create);                 


router.get('/:id', UserController.show);
router.get('/:id/edit', UserController.editForm);
router.post('/:id/update', UserController.update);
router.post('/:id/delete', UserController.delete);

export default router;