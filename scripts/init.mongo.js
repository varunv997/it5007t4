db.reservations.remove({});

const reservationsDB = [
  {
    id: "1", name: "Varun", phone: "12341234", created: new Date()
  },
];

const blacklistDB = [
  {
    id: "1", name: "Hitman", phone: "12344321", created: new Date()
  }
]


db.reservations.insertMany(reservationsDB);
const count = db.reservations.count();
print('Inserted', count, 'reservations');

db.blacklist.insertMany(blacklistDB);
const countbl = db.reservations.count();
print('Inserted', countbl, 'blacklists');

db.reservations.deleteOne({id:"1"})
print('Deleted reservation');
db.blacklist.deleteOne({id:"1"})
print('Deleted blacklist');

db.reservations.updateOne(
  { id : "1" },
  { $set: { name : "Yash" } }
);
print('Updated reservation');
db.blacklist.updateOne(
  { id : "1" },
  { $set: { name : "Prithvi" } }
);
print('Updated blacklist');

db.reservations.createIndex({ id: 1 }, { unique: true });
db.reservations.createIndex({ name: 1 });
db.reservations.createIndex({ phone: 1 });