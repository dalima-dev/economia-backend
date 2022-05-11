const mongoose = require('mongoose');

const isIdValid = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam))
    return res.status(404).send({ message: 'Invalid ID!' });

  next();
};

const isObjectBodyValid = (req, res, next) => {
  const body = req.body;

  if (
    !body ||
    !body.descricao ||
    typeof body.atingido != 'boolean' ||
    !body.valor
  )
    return res.status(400).send({ message: `You didn't fill all fields!` });

  next();
};

module.exports = {
  isIdValid,
  isObjectBodyValid,
};
