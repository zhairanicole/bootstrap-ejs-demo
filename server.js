const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

// Serve static files (Bootstrap, CSS, Images)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

// Routes
app.get('/', (req, res) => {
    res.render('pages/home', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About' });
});

// ✅ Add this missing route
app.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
