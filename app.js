const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 

// Route voor de homepage
app.get('/', (req, res) => {
    res.send('Hallo, mijn naam is [Matthew Aerts]!'); 
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server is running op http://localhost:${PORT}`);
});
