const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/contact', (req, res) => {
  const formData = req.body;
  fetch('https://formspree.io/f/mbljkgwl', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(() => res.send('Success'))
  .catch(err => res.status(500).send('Error'));
});

app.listen(3000, () => console.log('Proxy server running on port 3000'));
