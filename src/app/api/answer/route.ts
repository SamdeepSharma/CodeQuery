/* eslint-disable @typescript-eslint/no-explicit-any */
import { answerCollection, db } from "@/utils/models/name";
import { databases, users } from "@/utils/models/server/config";
import { NextRequest, NextResponse } from "next/server";
import { ID } from "node-appwrite";
import { UserPrefs } from "@/utils/store/Auth";
 
export async function POST(request: NextRequest) {
     try {
          const { questionId, answer, authorId } = await request.json()
          const response = await databases.createDocument(db, answerCollection, ID.unique(), {
               content: answer,
               authorId,
               questionId,
          })

          // Increase author reputation
          const prefs = await users.getPrefs<UserPrefs>(authorId)
          await users.updatePrefs<UserPrefs>(authorId, { reputation: Number(prefs.reputation) + 1 })
          return NextResponse.json({
               data: response
          }, 
          {
               status: 201 
          })

     } catch (error: any) {
          return NextResponse.json({
               error: error?.message || "Error creating answer"
          },
          { 
               status: error?.status || error?.code || 500 
          })
     }
}
export async function DELETE(request: NextRequest) {
     try {
          const { answerId } = await request.json()
          const response = await databases.deleteDocument(db, answerCollection, answerId)
          
          // Decrease author reputation
          const answer = await databases.getDocument(db, answerCollection, answerId)
          const prefs = await users.getPrefs<UserPrefs>(answer.authorId)
          await users.updatePrefs<UserPrefs>(answer.authorId, { reputation: Number(prefs.reputation) - 1 })

          return NextResponse.json({
               data: response
          }, 
          {
               status: 200 
          })
     } catch (error: any) {
          return NextResponse.json({
               error: error?.message || "Error deleting answer"
          },
          {
               status: error?.status || error?.code || 500 
          })
     }
}