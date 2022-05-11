const objetivosService = require('../services/objetivos.service');

const findObjetivosController = async (req, res) => {
  const allObjetivos = await objetivosService.findObjetivosService();
  if (allObjetivos.length == 0)
    return res.status(400).send({ message: `Nao ha objetivo registrado` });

  res.send(allObjetivos);
};

const findObjetivoByIdController = async (req, res) => {
  const idParam = req.params.id;
  const chosenObjetivo = await objetivosService.findObjetivoByIdService(idParam);
  if (!chosenObjetivo)
    return res.status(404).send({ message: 'objetivo nao encontrado' });

  res.send(chosenObjetivo);
};

const createObjetivoController = async (req, res) => {
  const objetivo = req.body;
  const newObjetivo = await objetivosService.createObjetivoService(objetivo);
  res.send(newObjetivo);
};

const updateObjetivoController = async (req, res) => {
  const idParam = req.params.id;
  const objetivoUpdate = req.body;
  const nonUpdatedObjetivo = await objetivosService.updateObjetivoService(
    idParam,
    objetivoUpdate,
  );
  res.send(nonUpdatedObjetivo);
};

const deleteObjetivoController = async (req, res) => {
  const idParam = req.params.id;
  await objetivosService.deleteObjetivoService(idParam);
  res.send({ message: `objetivo removido com sucesso` });
};

module.exports = {
  findObjetivosController,
  findObjetivoByIdController,
  createObjetivoController,
  updateObjetivoController,
  deleteObjetivoController,
};
