// Simple Express server setup to serve the build output
/*
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const path = require('path');

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3001;
const DIST_DIR = './dist';

app.use(express.static(DIST_DIR));

app.use('*', (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.listen(PORT, () =>
    console.log(`✅  Server started: http://${HOST}:${PORT}`)
);
*/
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const express = require('express');

//const customServer = require(path.resolve('./src/server/'));


const app = express();
app.use(helmet());
app.use(compression());
customServer(app);
const DIST_DIR = './dist';

app.use(express.static(path.join(DIST_DIR)));

app.use('*', (req, res) => {
    res.sendFile(path.resolve(path.join(DIST_DIR, 'index.html')));
});

app.listen(3002, () => {
    // eslint-disable-next-line no-console
    console.log('Yay, local server started');
});
/*
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const path = require('path');



const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3001;
const DIST_DIR = './src/server/';

app.use(express.static(DIST_DIR));

app.use('*', (req, res) => {
    res.sendFile(path.resolve(DIST_DIR));
});

app.listen(PORT, () =>
    console.log(`✅  Server started: http://${HOST}:${PORT}`)
);
*/