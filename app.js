var express = require('express');
var app = express();

const jugadoresRoutes = require('./routes/jugadores-routes');
app.use('/api', jugadoresRoutes);

app.use(express.json());
app.listen(3000, () => console.log('Server is running on port 3000'));