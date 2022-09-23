const router = require("express").Router();
const uuid = require("../Helpers/uuid");
let data = require("../db/db.json");
const fs = require("fs");
const path = require("path");

router.get("/notes", (req, res) => res.json(data));

router.post("/notes", (req, res) => {
  req.body.id = uuid();
  data.push(req.body);
  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify(data, null, 2),
  
  );
  res.json(req.body)
});

router.delete("/:id", (req, res) => {
  const found = data.some((obj) => obj.id === req.params.id);
  if (found) {
    data = data.filter((obj) => obj.id !== req.params.id);
    res.json(data);
  } else {
    res.status(400).json(data);
  }
});

module.exports = router;
