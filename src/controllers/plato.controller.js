import Plato from "../models/Plato";


export async function createPlato(req, res) {
    try {

        const { nombre, descripcion, precio } = req.body;
        let newPlato = await Plato.create({
            nombre,
            descripcion,
            precio
        }, {
            fields: ['nombre', 'descripcion', 'precio']
        });
        res.json({
            message: 'Plato creado',
            data: newPlato
        })
    } catch (e) {
        res.json({
            message: 'no se creó'
        });
        console.log(e);
    }



}

export async function getPlatos(req, res) {
    const platos = await Plato.findAll();
    res.json({
        data: platos
    })
}