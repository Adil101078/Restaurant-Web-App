const Menu = require("../../models/menu");
function adminMenuController() {
  return {
    async index(req, res) {
      const foods = await Menu.find();
      return res.render("adminMenu", { foods: foods });
    },
    async deleteItem(req, res) {
      const menu = await Menu.findOneAndDelete(req.params.id);
      try {
        console.log(menu);
      } catch (err) {
        res.send("Error" + err);
      }
    },
  };
}

module.exports = adminMenuController;
