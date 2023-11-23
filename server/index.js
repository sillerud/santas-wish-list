import express from "express"

const app = express();
const port = 8080;

const server = app.listen(port, () => {
    console.log(`Satan clauses server started on port ${port}`)
});

process.on('SIGTERM', () => {
    server.close(() => console.log("Shutting down server"));
})
