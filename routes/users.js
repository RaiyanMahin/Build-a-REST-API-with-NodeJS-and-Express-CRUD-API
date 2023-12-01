import express from 'express';

//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import { createUser , getUsers, getUser, deleteUser, updateUser} from '../controllers/users.js';
const router = express.Router();



//all routes in here are standing with /users
router.get('/', getUsers);

router.post('/', createUser);

// /users/2
router.get('/:id', getUser);


router.delete('/:id', deleteUser);


router.patch('/:id', updateUser);


export default router;