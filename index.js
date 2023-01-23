const express = require('express')
const app = express();

app.get('/', (req, res) => {
    // create html responce
    res.send('<a href="/contact">Contact us</a> <br> <a href="about">About Us</a>');

});
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us Page</h1>');
})
app.get('/about', (req, res) => {
    // create html responce
    res.send('<h1>About us Page</h1>');

});
app.get('*', (req, res) => {
    res.send('404. This page does not exist. <a href="/">Go to Homepake</a>')
})
// listen app via port
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});


