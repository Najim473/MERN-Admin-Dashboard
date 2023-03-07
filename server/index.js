import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRotes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
// DATA IMPORTS
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductState from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import { dataUser, dataProductStat, dataProduct, dataTransaction } from "./data/index.js";
// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// ROUTES
app.use("/client", clientRoutes);
app.use("/management", managementRotes);
app.use("/general", generalRoutes);
app.use("/sales", salesRoutes);
// MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port :${PORT}`));
        // ONLY ADD DATA ONE TIME
        // Product.insertMany(dataProduct);
        // ProductState.insertMany(dataProductStat)
        // User.insertMany(dataUser);
        // Transaction.insertMany(dataTransaction)
    })
    .catch((error) => console.log(`${error} did not connect`));
// MONGOOSE SETUP
