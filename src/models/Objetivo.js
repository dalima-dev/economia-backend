const mongoose = require('mongoose');

const ObjetivoSchema = new mongoose.Schema({
  descricao: {
    type: String,
    require: true,
  },
  valor: {
    type: Number,
    require: true,
  },
  atingido: {
    type: Boolean,
    require: true,
  },
});

const Objetivo = mongoose.model('medics', ObjetivoSchema);

module.exports = Objetivo;
