import db from "../models/";
let getHomePage = async (req, res) => {
  let data = await db.User.findAll({ raw: true });
  console.log("cechk daata user", data);
  return res.render("homePage.ejs");
};
module.exports = {
  getHomePage,
};
