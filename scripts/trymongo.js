const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost/reservations';


function testWithCallbacks(callback) {
  console.log('\n--- testWithCallbacks ---');
  const client = new MongoClient(url, { useNewUrlParser: true });
  client.connect(function(err, client) {
    if (err) {
      callback(err);
      return;
    }
    console.log('Connected to MongoDB');

    const db = client.db();
    const collection = db.collection('reservations');

    const reservation = { id: "1", name: "A. Callback", created: Date.now(), phone: "12341234" };
    collection.insertOne(reservation, function(err, result) {
      if (err) {
        client.close();
        callback(err);
        return;
      }
      console.log('Result of insert:\n', result.insertedId);
      collection.find({ _id: result.insertedId})
        .toArray(function(err, docs) {
        if (err) {
          client.close();
          callback(err);
          return;
        }
        console.log('Result of find:\n', docs);
        client.close();
        callback(err);
      });
    });
    collection.update({id: "1"}, {$set: {name: "Another. Callback"}})
    collection.find( {id: "1"} ).toArray(function(err, docs) {
        if (err) {
            client.close();
            callback(err);
            return;
        }
        console.log("Result of find:\n", docs);
        client.close();
        callback(err);
    });
    collection.remove({id: "1"})
    collection.find( {id: "1"} ).toArray(function(err, docs) {
        if (err) {
            client.close();
            callback(err);
            return;
        }
        console.log("Result of find:\n", docs);
        client.close();
        callback(err);
    });
  });
}

async function testWithAsync() {
  console.log('\n--- testWithAsync ---');
  const client = new MongoClient(url, { useNewUrlParser: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db();
    const collection = db.collection('reservations');

    const id = Date.now().toString()
    const reservation = { id: id, name: 'B. Async', phone:"12312312", created: Date.now() };
    const result = await collection.insertOne(reservation);
    console.log('Result of insert:\n', result.insertedId);

    const docs = await collection.find({ _id: result.insertedId })
      .toArray();
    console.log('Result of find1:\n', docs);

    const updateres = await collection.update({id: id}, {$set: {name: "Brother Async"}})
    const updatedocs = await collection.find({ _id: result.insertedId })
      .toArray();
    console.log('Result of find2:\n', updatedocs);

    const deleteres = await collection.remove({id: id})
    const deletedocs = await collection.find({ _id: result.insertedId })
      .toArray();
    console.log('Result of find3:\n', deletedocs);

  } catch(err) {
    console.log(err);
  } finally {
    client.close();
  }
}

testWithCallbacks(function(err) {
  if (err) {
    console.log(err);
  }
  testWithAsync();
});