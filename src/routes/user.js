import Express  from "express";

const router = Express.Router();

// create user
router.post('/users',(req,res) => {
    res.send('create user endpoint')
})

export default router
