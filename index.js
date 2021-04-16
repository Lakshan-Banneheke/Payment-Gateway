const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config();

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('./public'));

app.use('/', require('./routes/index'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Express server listening on port %d in %s mode', process.env.PORT, app.settings.env);
});

