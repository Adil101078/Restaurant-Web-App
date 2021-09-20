const Menu = require('../../models/menu')
function menuController() {
    return {
        async index(req, res) {
            const foods = await Menu.find()
            return res.render('menu', { foods: foods })
        }
    }
}

module.exports = menuController