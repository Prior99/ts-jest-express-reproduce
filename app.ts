import * as express from "express";

console.log(`'import * as express from "express"' returned a ${typeof express}`);

export const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Some text.");
});
