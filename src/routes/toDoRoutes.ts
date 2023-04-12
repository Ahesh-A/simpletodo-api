import {Router} from 'express';
import { createToDo, getToDos, updateToDo, deleteToDo } from '../controllers/todo.controllers';
const router = Router();

router.post('/', createToDo);

router.get('/', getToDos );
router.patch('/:id', updateToDo);
router.delete('/:id', deleteToDo);

export default router;