const WilderModel = require("../models/Wilder");

module.exports = {
  create: (req, res) => {
    WilderModel.init().then(() => {
      const wilder = new WilderModel(req.body);
      wilder
        .save()
        .then((result) => {
          res.json({ success: true, result: result });
        })
        .catch((err) => {
          res.json({ success: false, result: err });
        });
    });
  },
  read: (req, res) => {
    WilderModel.init().then(() => {
      WilderModel.find()
        .then((result) => {
          res.json({ success: true, result: result });
        })
        .catch((err) => {
          res.json({ success: false, result: err });
        });
    });
  },
  updateOne: (req, res) => {
    WilderModel.init().then(() => {
      const idWilder = req.params.id
      //on utilise la méthode updateOne pour mettre à jour le document
      //on lui passe en param l'id
      WilderModel.updateOne({_id: idWilder}, {...req.body})
      .then((result) => {
        res.status(200).json({ success: true, result: result });
      })
      .catch((err) => {
        res.status(404).json({ success: false, result: err });
      });
    });
  },
  deleteOne: (req, res) => {
    WilderModel.init().then(() => {
      const idWilder = req.params.id
      //on utilise la méthode deleteOne pour supprimer le document
      //on lui passe en param l'id
      WilderModel.deleteOne({_id: idWilder})
      .then((result) => {
        res.status(200).json({ success: true, result: result });
      })
      .catch((err) => {
        res.status(404).json({ success: false, result: err });
      });
    });
  },
};
