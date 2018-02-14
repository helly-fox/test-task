const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const forum = require('./forum');

app.use(bodyParser.json());
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/message', forum.getMessages);
app.post('/message', forum.addMessage);
app.get('/*', (req, res) => res.sendFile('/view/example.html', { root : __dirname}));

app.listen(3200, () => console.log('App listening on port 3200!'));

module.exports = app;