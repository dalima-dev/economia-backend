const router = require('express').Router();
const objetivosController = require('../controllers/objetivos.controller');
const {
  isIdValid,
  isObjectBodyValid,
} = require('../middlewares/objetivos.middleware');

router.get('/find-objetivos', objetivosController.findObjetivosController);
router.get(
  '/find-objetivos/:id',
  isIdValid,
  objetivosController.findObjetivosController,
);
router.post(
  '/create',
  isObjectBodyValid,
  objetivosController.createObjetivoController,
);
router.put(
  '/update/:id',
  isIdValid,
  isObjectBodyValid,
  objetivosController.updateObjetivoController,
);
router.delete('/delete/:id', isIdValid, objetivosController.deleteObjetivoController);

module.exports = router;
