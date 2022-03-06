const Models = require("../../../models/index");

async function index(req, res) {
  try {
    const templetes = await Models.Templete.findAll();
    return res.status(200).json(templetes);
  } catch (err) {
    return res.status(500).json({ message: `Error:${err.message}` });
  }
}
async function single(req, res) {
  try {
    const templeteId = req.params.id
    const templete = await Models.Templete.findByPk(templeteId)
    return res.status(200).json(templete.html);
  } catch (err) {
    return res.status(500).json({ message: `Error:${err.message}` });
  }
}

module.exports = {
  index,
  single
};
