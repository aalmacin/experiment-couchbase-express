const couchbase = require("couchbase");

async function main() {
    const cluster = await couchbase.connect("couchbase://localhost", {
        username: "Administrator",
        password: "password"
    });

    const bucket = cluster.bucket("default");

    const collection = bucket.scope('experiment').collection('person')

    const upsertDocument = async (doc) => {
        const key = doc.id;
        await collection.upsert(key, doc);
    }

    await upsertDocument({id: "1", firstName: "John", lastName: "Doe"});

    const getPersonById = async (id) => {
        const result = await collection.get(id);
        return result.content;
    }

    const person = await getPersonById("1");
    console.log(person);
}

main().catch(console.error).then(() => process.exit());