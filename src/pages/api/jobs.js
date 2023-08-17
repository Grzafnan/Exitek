const { MongoClient, ObjectId } = require('mongodb');
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri);

async function run(req, res) {
  try {
    await client.connect();

    const jobsCollection = client.db("exitek").collection("jobs");
    const otherCollection = client.db("exitek").collection("otherCollection");

    if (req.method === "GET") {
      if (req.query?.collection === "jobs") {
        if (req.query?.id) {
          const job = await jobsCollection.findOne({ _id: new ObjectId(req.query.id) });
          if (job) {
            res.status(200).json({ message: "Job retrieved successfully!", success: true, data: job });
          } else {
            res.status(404).json({ message: "Job not found", success: false });
          }
        } else {
          const jobList = await jobsCollection.find({}).toArray();
          res.status(200).json({ message: "Jobs retrieved successfully!", success: true, data: jobList });
        }
      }
      // else if (req.query?.collection === "other") {
      //   const otherList = await otherCollection.find({}).toArray();
      //   res.status(200).json({ message: "Other collection retrieved successfully!", success: true, data: otherList });
      // }
      else {
        res.status(400).json({ message: "Bad Request", success: false });
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed", success: false });
    }
  } finally {
    // Ensure that the client connection is closed when you finish/error
    // await client.close();
  }
}


export default run;
