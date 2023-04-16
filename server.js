const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: './config.env' });

const app = express();

const dbconfig = require('./db')
const roomsRoute = require('./routes/roomRoute')
const userRoute = require('./routes/userRoute')
const bookingRoute = require('./routes/bookingRoute')

if (process.env.NODE_ENV = "production") {
    app.use(express.static("client/build"));
}
app.use(express.json())
app.use('/api/rooms', roomsRoute)
app.use('/api/user', userRoute)
app.use('/api/bookings', bookingRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Node server started by using nodemon"))
