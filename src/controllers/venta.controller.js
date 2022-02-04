import Plato from '../models/Plato';
import Venta from '../models/Venta';

export async function createVenta(req, res) {
    try {
        const { cliente, fecha } = req.body;
        let newVenta = await Venta.create({
            cliente,
            fecha
        }, {
            fields: ['cliente', 'fecha']
        });

        //newVenta.setPlatos(platos);
        res.json({
            message: 'succes!',
            data: newVenta
        })
    } catch (e) {
        console.log(e);
    }
};

export async function getVentas(req, res) {
    const ventas = await Venta.findAll();
    res.json({
        data: ventas
    })
};

export async function getOneVenta(req, res) {
    try {
        const { id } = req.params;
        const venta = await Venta.findOne({
            where: {
                id
            },
            include: Plato
        });
        res.json(venta);
    } catch (e) {
        console.log(e);
    }
};



export async function addPlatos(req, res) {
    try {
        const { platoId } = req.body;
        const { cantidad } = req.body;
        const plato = await Plato.findOne({
            where: {
                id: platoId
            }
        });

        const { id } = req.params;
        const venta = await Venta.findOne({
            where: {
                id
            }
        });
        await venta.addPlatos(plato, { through: { cantidad: cantidad } });
        res.json({
            message: "plato añadido!"
        });
    } catch (e) {
        console.log(e);
    }
}