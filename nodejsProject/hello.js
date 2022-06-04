console.log('Hello World!');



const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'jiwoongDB';

async function main(){
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');
    const insertResult = await collection.insertOne({name:'chulsu',email:'chulsu@email.com',phonenumber:'010-1234-5678'});
    console.log('Inserted documents =>', insertResult);

    return 'done.';
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());