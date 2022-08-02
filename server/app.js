require("./db/connect");
const express = require("express");
const app = express();
const port = 5000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
var cors = require("cors");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/customError");
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

//middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
