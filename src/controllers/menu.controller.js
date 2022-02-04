import Menu from '../models/Menu';
import Plato from '../models/Plato';

export async function createMenu(req, res) {
    try {
        const { fecha } = req.body;
        let newMenu = await Menu.create({
            fecha
        }, {
            fields: ['fecha']
        });

        res.json({
            message: 'Menu Creado',
            data: newMenu
        })
    } catch (e) {
        res.json({
            message: 'no se creó'
        });
        console.log(e);
    }
};

export async function getMenus(req, res) {
    const menus = await Menu.findAll({});
    res.json({
        data: menus
    })
};

export async function getOneMenu(req, res) {
    try {
        const { id } = req.params;
        const menu = await Menu.findOne({
            where: {
                id
            },
            include: Plato
        });
        res.json(menu);
    } catch (e) {
        res.json(e);
        console.log(e);
    }
};

export async function addPlatos(req, res) {
    try {
        const { platoId } = req.body;
        const plato = await Plato.findOne({
            where: {
                id: platoId
            }
        });

        const { id } = req.params;
        const menu = await Menu.findOne({
            where: {
                id
            }
        });
        await menu.addPlatos(plato);
        res.json({
            message: "plato añadido!"
        });

    } catch (e) {
        res.json(e);
        console.log(e);
    }
};