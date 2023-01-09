import Express from "express";
import userSchema from "../models/user.js";

const router = Express.Router();

// create user
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get('/users',(req,res) => {
  userSchema
    .find()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
})

export default router;
