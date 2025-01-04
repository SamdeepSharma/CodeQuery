/* eslint-disable @typescript-eslint/no-unused-vars */

import { db } from "../name";
import createAnswerCollection from "./answer.colllection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";
import { databases } from "./config";

export default async function getOrCreateDB() {
     try {
          // get db
          await databases.get(db)
          console.log("Database connected")
     } catch (error) {
          try {
               // create db
               await databases.create(db, "db")
               console.log("Database created")

               // create collections
               await Promise.all([
                    createQuestionCollection(),
                    createAnswerCollection(),
                    createCommentCollection(),
                    createVoteCollection(),
               ])
               console.log("Collection created")
               console.log("Database connected")
          } catch (error) {
               console.log("Error creating database/collections: ", error)
          }
     }
     return databases
}