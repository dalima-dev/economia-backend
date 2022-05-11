const Objetivo = require('../models/Objetivo');

const findObjetivosService = async () => {
  const allObjetivos = await Objetivo.find();
  return allObjetivos;
};

const findObjetivoByIdService = async (id) => {
  const objetivo = await Objetivo.findById(id);
  return objetivo;
};

const createObjetivoService = async (newObjetivo) => {
  const createdObjetivo = await Objetivo.create(newObjetivo);
  return createdObjetivo;
};

const updateObjetivoService = async (id, objetivoUpdate) => {
  return await Objetivo.findByIdAndUpdate(id, objetivoUpdate);
};

const deleteObjetivoService = async (id) => {
  return await Objetivo.findByIdAndDelete(id);
};

module.exports = {
  findObjetivosService,
  findObjetivoByIdService,
  createObjetivoService,
  updateObjetivoService,
  deleteObjetivoService,
};
