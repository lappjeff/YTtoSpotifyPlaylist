require("dotenv").config();
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const config = {
	secret: process.env.COOKIE_SECRET,
	cookie: { maxAge: 3600000 },
	saveUninitialized: false,
	resave: false,
	store: new MongoStore({ url: process.env.MONGODB_URI })
};

if ((process.env.ENV = "production")) config.cookie.secure = true;

module.exports = session(config);
