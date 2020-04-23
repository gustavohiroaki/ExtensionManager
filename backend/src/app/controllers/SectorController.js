import * as yup from 'yup';
import randomcolor from 'randomcolor';
import db from '../database/connection';

export default {
    async index(req, res) {
        const data = await db('sectors').select('*');

        return res.json(data);
    },

    async create(req, res) {
        const bodyValidation = yup.object().shape({
            name: yup.string().required(),
        });
        if (!(await bodyValidation.isValid(req.body)))
            return res.json({ error: 'Name field is not valid' });

        const { name } = req.body;
        const color = randomcolor();

        const data = await db('sectors').insert({
            name,
            color,
        });

        return res.json(data);
    },

    async delete(req, res) {
        const paramValidation = yup.object().shape({
            id: yup.number().positive().required(),
        });

        if (!(await paramValidation.isValid(req.params)))
            return res.status(400).json({ error: 'Sector id is not valid' });

        const { id } = req.params;

        const sectorExists = await db('sectors')
            .where('id', id)
            .select('*')
            .first();

        if (!sectorExists)
            return res.status(400).json({ error: 'Sector does not exists' });

        const deleteSector = await db('sectors').where('id', id).del();

        return res.json(deleteSector);
    },

    async update(req, res) {
        const bodyValidation = yup.object().shape({
            name: yup.string(),
            color: yup.string(),
        });
        if (!(await bodyValidation.isValid(req.body)))
            return res.json({ error: 'Name or color field are not valid' });

        const paramValidation = yup.object().shape({
            id: yup.number().positive().required(),
        });

        if (!(await paramValidation.isValid(req.params)))
            return res.status(400).json({ error: 'Sector id is not valid' });

        const { name, color } = req.body;
        const { id } = req.params;

        const sectorExists = await db('sectors')
            .where('id', id)
            .select('*')
            .first();

        if (!sectorExists)
            return res.status(400).json({ error: 'Sector does not exists' });

        const updateSector = await db('sectors').where('id', id).update({
            name,
            color,
        });

        return res.json(updateSector);
    },
};
