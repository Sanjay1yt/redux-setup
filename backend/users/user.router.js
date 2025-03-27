const router = require("express").Router();
const userSchema = require("./user.model");
router.post("/addDetails", async (req, res) => {
  const sampleData = {
    name: "sanjay",
    email: "sanjay@mail.com",
    mobileNo: 1234,
  };
  await userSchema.create(sampleData);
  res.send("data inserted successfully");
});
module.exports = router;
