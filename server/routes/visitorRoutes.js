const router = require("express").Router();
const Visitor = require("../models/Visitor");

router.post("/", async (req, res) => {

    console.log("SERVER:", req.body);

    const visitor = new Visitor({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        company: req.body.company,
        type: req.body.type,
        purpose: req.body.purpose,
        date: req.body.date,
        department: req.body.department,
        checkIn: new Date()
    });

    await visitor.save();

    res.json(visitor);
});

router.get("/", async (req, res) => {
    const visitors = await Visitor.find();
    res.json(visitors);
});

router.put("/:id", async (req, res) => {
    const visitor = await Visitor.findByIdAndUpdate(
        req.params.id,
        {
            checkOut: new Date()
        },
        { new: true }
    );

    res.json(visitor);
});

module.exports = router;