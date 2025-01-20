import { db, questionCollection } from "@/utils/models/name";
import { databases } from "@/utils/models/server/config";
import React from "react";
import EditQues from "./EditQues";

const Page = async ({ params }: { params: { quesId: string; quesName: string } }) => {
    const question = await databases.getDocument(db, questionCollection, params.quesId);

    return <EditQues question={question} />;
};

export default Page;
