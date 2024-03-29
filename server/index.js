import express from "express"
import dotenv from "dotenv"
import sequelize from "./db.js"
import cors from "cors"
import fileUpload from "express-fileupload"
import errorHandler from "./middleware/ErrorHandlingMiddleware.js"
import router from "./routes/index.js"
import path from "path"
import suppliersRouter from "./routes/suppliersRouter.js";

dotenv.config();

const __dirname = path.resolve()
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))

app.use('/api', router)

//last middleware
app.use(errorHandler)

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'static', 'MainPage.tsx'));
});


const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => `server started at port ${PORT}`);
  } catch (error) {
      console.log(error);
  }
}



start();