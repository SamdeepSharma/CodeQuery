import { Permission } from "node-appwrite";
import { databases } from "./config";
import { db, voteCollection } from "../name";

export default async function createVoteCollection() {
     await databases.createCollection(db, voteCollection, "commentCollection", [
          Permission.read("any"),
          Permission.read("users"),
          Permission.create("users"),
          Permission.update("users"),
          Permission.delete("users"),
     ])
     console.log("Vote collection created")

     await Promise.all([
          databases.createEnumAttribute(db, voteCollection, "type", ["answer", "question"], true),
          databases.createStringAttribute(db, voteCollection, "typeId", 50, true),
          databases.createEnumAttribute(db, voteCollection, "voteStatus", ["upvoted", "downvoted"], true),
          databases.createStringAttribute(db, voteCollection, "votedById", 50, true),
     ])
     console.log("Vote attributes created")
}