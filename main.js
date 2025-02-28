db.contactlist.find().pretty()

db.contactlist.findOne({ _id: ObjectId("l'ID_de_la_personne") })

db.contactlist.find({ "âge": { $gt: 18 } }).pretty()

db.contactlist.find({ "âge": { $gt: 18 }, "Nom": { $regex: "ah", $options: "i" } }).pretty()

db.contactlist.updateOne(
    { "Nom": "Kefi", "Prénom": "Seif" },
    { $set: { "Prénom": "Anis" } }
)

db.contactlist.deleteMany({ "âge": { $lt: 5 } })

db.contactlist.find().pretty()