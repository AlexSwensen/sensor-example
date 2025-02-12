import express from "express";


const app = express();

// Add this line to enable JSON parsing
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/data", async (req: express.Request, res: express.Response) => {
    // Now req.body will contain the JSON data

    const data = req.body;

    const { sensorId, temperature, humidity, pressure } = data;

    console.log(sensorId, temperature, humidity, pressure);
    // console.log(req.body);
    res.status(200).send("Data received");

    // log this data to postgres


});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
