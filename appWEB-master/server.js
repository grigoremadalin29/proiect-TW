const express = require('express')
const api = require('./routes/activityRoutes')
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.use('/', api);
app.use('/data', express.static('./data'))
app.listen(8080, () => {
    console.log('Server started on port 8080...');
})