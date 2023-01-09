import Express  from "express";
import userSchema from "../models/user";

const router = Express.Router();

// create user
router.post('/users',(req,res) => {
    res.send('create user endpoint')
})

export default router
