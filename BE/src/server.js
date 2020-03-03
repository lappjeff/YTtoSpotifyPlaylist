require("dotenv").config();
const express = require("express");
const authRouter = require("./routes/auth/authRoutes");
const passport = require("./helpers/passport/passportConfig");
const app = express();

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRouter);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.status(200).json({ message: `Server running on port ${port}` });
});

app.listen(port, async () => {
	console.info(`Server running on port ${port}`);
});
