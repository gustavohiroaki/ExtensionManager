import * as yup from 'yup';
import db from '../database/connection';

export default {
    async index(req, res) {
        const data = await db('extensions')
            .select([
                'extension',
                `extensions.name`,
                'position',
                'description',
                `sectors.name as sector`,
                `sectors.color as color`,
            ])
            .innerJoin('sectors', 'extensions.sector', 'sectors.id');

        return res.json(data);
    },

    async find(req, res) {
        const data = await db('extensions')
            .where(`extensions.extension`, req.params.id)
            .select([
                'extension',
                `extensions.name`,
                'position',
                'description',
                `sectors.name as sector`,
                `sectors.color as color`,
                `sectors.id as sector_id`,
            ])
            .first()
            .innerJoin('sectors', 'extensions.sector', 'sectors.id');

        return res.json(data);
    },

    async create(req, res) {
        const bodyValidation = yup.object().shape({
            extension: yup.number().positive().required(),
            name: yup.string().required(),
            sector: yup.number().positive(),
            position: yup.string(),
            description: yup.string(),
        });

        if (!(await bodyValidation.isValid(req.body)))
            return res.json({
                error:
                    'Error on validate these informations, please try again later',
            });

        const { extension, name, sector, position, description } = req.body;

        const extensionExists = await db('extensions')
            .where('extension', extension)
            .select('*')
            .first();

        if (extensionExists)
            return res
                .status(400)
                .json({ error: 'This extension is already registered' });

        const data = await db('extensions').insert({
            extension,
            name,
            sector,
            position,
            description,
        });

        return res.json(data);
    },

    async delete(req, res) {
        const paramValidation = yup.object().shape({
            extensionParam: yup.number().positive().required(),
        });

        if (!(await paramValidation.isValid(req.params)))
            return res.status(400).json({ error: 'Extension is not valid' });

        const { extensionParam } = req.params;

        const extensionExists = await db('extensions')
            .where('extension', extensionParam)
            .select('*')
            .first();

        if (!extensionExists)
            return res.status(400).json({ error: 'Extension does not exists' });

        const deleteExtension = await db('extensions')
            .where('extension', extensionParam)
            .del();

        return res.json(deleteExtension);
    },

    async update(req, res) {
        const bodyValidation = yup.object().shape({
            extension: yup.number().positive(),
            name: yup.string(),
            sector: yup.string(),
            position: yup.string(),
            description: yup.string(),
        });

        if (!(await bodyValidation.isValid(req.body)))
            return res.json({
                error:
                    'Error on validate these informations, please try again later',
            });

        const paramValidation = yup.object().shape({
            extensionParam: yup.number().positive().required(),
        });

        if (!(await paramValidation.isValid(req.params)))
            return res.status(400).json({ error: 'Extension is not valid' });

        const { extensionParam } = req.params;
        const { extension, position, name, description } = req.body;
        let { sector } = req.body;

        const extensionExists = await db('extensions')
            .where('extension', extensionParam)
            .select('*')
            .first();

        if (!extensionExists)
            return res.status(400).json({ error: 'Extension does not exists' });

        if (sector) {
            const sectorExists = await db('sectors')
                .where('id', sector)
                .select('*')
                .first();

            if (!sectorExists) {
                return res
                    .status(400)
                    .json({ error: 'The sector selected does not exists' });
            }
        }

        const updateExtension = await db('extensions')
            .where('extension', extensionParam)
            .update({ extension, description, position, name, sector });

        return res.json(updateExtension);
    },
};
