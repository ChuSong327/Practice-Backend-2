const express = require("express");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");

const todoRoute = require("./routes/todo");

const app = express();

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/todo", todoRoute);

//handle errors
app.use((req,res,next) => {
    next(createError(404));
});

app.use((err,req,res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("App is listening on Port: ", port);
})