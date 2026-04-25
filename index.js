const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// main route 
app.get('/', (req, resp) => {
    resp.send('Hello from Krishna server 🚀');
});

// health check route 
app.get('/health', (req, resp)=> {
    resp.json({ status: 'ok ready to serve' });
});

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});