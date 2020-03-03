require("dotenv").config();
const qs = require("query-string");
const router = require("express").Router();

const isAuthenticated = (req, res, next) => {
	if (req.isAuthenticated) return next();
	else {
		return res.status(401).json({ error: "Unauthenticated" });
	}
};
router.get("/checkAuth", isAuthenticated, (req, res) => {
	res.status(200).json({
		status: "Login Successful",
		user: req.user
	});
});
module.exports = router;
