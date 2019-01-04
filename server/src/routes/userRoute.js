import express from 'express';
const userRoute = express.Router();
import userController from '../controllers/userController';
const { signupUser,loginUser,getAllUsers,deleteUser,getUserById } = userController;


userRoute.post('/user/signup',signupUser);
userRoute.post('/user/login',loginUser);
userRoute.get('/user',getAllUsers);
userRoute.delete('/user/:userid',deleteUser);
userRoute.get('/user/:userid',getUserById);



export default userRoute;