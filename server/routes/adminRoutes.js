const router = require("express").Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (
        email === "admin@gmail.com" &&
        password === "admin123"
    ) {
        res.json({
            success: true
        });
    } else {
        res.status(400).json({
            success: false
        });
    }
});

module.exports = router;