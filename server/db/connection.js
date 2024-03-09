const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.connect("mongodb+srv://bridgeline:bridgeline123@cluster0.0vimvgy.mongodb.net/BridgeLine");
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Database connected");
        });

        connection.on("error", () => {
            console.log("Error connecting to database");
            process.exit();
        });
    } catch (error) {
        console.log("Error connecting to database");
    }
}

module.exports = { connect };
