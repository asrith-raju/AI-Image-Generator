import express from 'express';
import { registerUser, loginUser,userCredits } from '../controllers/userController.js';
import  userauth from  '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.get('/credits',userauth,userCredits);

export default userRouter;
