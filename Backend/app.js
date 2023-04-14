// const express = require("express");
// const env = require("dotenv").config();
// const bodyparser = require("body-parser");
// const dbConfig = require("./config/dbConfig");

// const cors = require("cors");

// // const corsOptions = {
// //   origin: "http://localhost:3000",
// //   credentials: true, //access-control-allow-credentials:true
// //   optionSuccessStatus: 200,
// // };
// // app.use(cors(corsOptions));

// const app = express();
// const user = require("./Routes/userRouter");
// app.use(express.json());
// app.use("/user", user);
// app.use(bodyparser.json());
// app.use(cors());
// const PORT = process.env.PORT;

// app.listen(PORT, console.log(`server listing to the port ${PORT}`));
const express = require("express");
const env = require("dotenv").config();
const bodyparser = require("body-parser");
const dbConfig = require("./config/dbConfig");
const cors = require("cors");

const app = express();
const user = require("./Routes/userRouter");
app.use(express.json());
app.use(bodyparser.json());
app.use(cors());
app.use("/user", user);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`server listing to the port ${PORT}`));
