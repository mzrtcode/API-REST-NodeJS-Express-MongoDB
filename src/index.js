import Express from 'express';

const app = Express();
const port = process.env.PORT || 3000;

// routes
app.get('/',(req,res) =>{
    res.send('Welcome to my API')
})

app.listen(port,() => console.log(`Running on port ${port}`));