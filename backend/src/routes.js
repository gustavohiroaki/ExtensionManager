import { Router } from 'express';

import ExtensionController from './app/controllers/ExtensionController';
import SectorController from './app/controllers/SectorController';

const router = Router();

router.get('/extension', ExtensionController.index);
router.get('/extension/:id', ExtensionController.find);
router.post('/extension', ExtensionController.create);
router.delete('/extension/:extensionParam', ExtensionController.delete);
router.put('/extension/:extensionParam', ExtensionController.update);

router.get('/sector', SectorController.index);
router.post('/sector', SectorController.create);
router.delete('/sector/:id', SectorController.delete);
router.put('/sector/:id', SectorController.update);

export default router;
