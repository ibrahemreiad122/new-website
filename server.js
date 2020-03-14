const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'dist/scss-project')))

app.get('*', (req, res) => {
    return res.sendfile(path.join(__dirname, 'dist/scss-project/index.html'));
})

app.listen(port, () => console.log(`app start on ${port}`))