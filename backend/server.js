require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const datasRoute = require("./router/service-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOption = {
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true
}

app.use(cors(corsOption));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/datas", datasRoute);
app.use(errorMiddleware)

const PORT = 5000;

connectDB().then(() => {

    app.listen(PORT, () => {
        console.log(`server is running at ${"http://localhost:" + PORT} PORT:`, PORT);
    });
})



