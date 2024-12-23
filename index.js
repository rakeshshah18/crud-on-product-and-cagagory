const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGOURL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

// Log the MONGO_URL to verify
console.log("MONGO_URL:", MONGOURL);

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error.message);
    });

// defining routes
const itemsRoutes = require("./routes/itemRoutes");
const catagoryRoutes = require("./routes/categoryRoutes");

app.use("/api/items", itemsRoutes);
app.use("/api/catagories", catagoryRoutes);