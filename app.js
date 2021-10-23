const express = require('express');
const path = require('path');

const app = express();
const cors = require('cors');
app.use(cors())

// Static folder
// Not doing server side coding so we will be using static websites
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
})