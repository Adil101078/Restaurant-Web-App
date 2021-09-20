const Menu = require("../../models/menu");
function addItemController() {
  return {
    
        async index(req, res) {
        
            return res.render('addItem')
        }
    ,
    async postAddItem(req, res) {
           // Create a menu
      const menu = new Menu({
        name:req.body.name,
        image:req.body.image,
        price:req.body.price,
        size:req.body.size
      });

    menu.save()
        .then((menu) => {
          return res.redirect("/adminMenu");
        })
        .catch((err) => {
          req.flash("error", "Something went wrong");
          return res.redirect("/addItem");
        });
    },
    
  };
  
}

module.exports = addItemController;
