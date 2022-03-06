const Models = require("../../../models/index");

async function index(req, res) {
  try {
    const templetes = await Models.Templete.findAll();
    return res.status(200).json(templetes);
  } catch (err) {
    return res.status(500).json({ message: `Error:${err.message}` });
  }
}
async function store(req, res) {
  try {
    const {name, html} = req.body

    const template = {
      name: name,
      html: html
    }
    await Models.Templete.create(template)
    return res.status(201).json({message: "Template created"});
  } catch (err) {
    return res.status(500).json({ message: `Error:${err.message}` });
  }
}

module.exports = {
  index,
  store
};
