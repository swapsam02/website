const express = require('experss');
const path = require('path');
const app = express();

if(process.env.NOV_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/build/index.html'));
    });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('port', POST);
});