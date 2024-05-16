const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/mainRoutes');

app.set('port', process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use("/", mainRouter);

app.listen(app.get('port'), () => {
    console.log(`Server running on localhost:${app.get('port')}`);
});