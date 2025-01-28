import { db, questionCollection } from "@/utils/models/name";
import { databases } from "@/utils/models/server/config";
import React from "react";
import EditQues from "./EditQues";

interface PageProps {
    params: {
        quesId: string;
        quesName: string;
    };
}

const Page = async ({ params }: PageProps): Promise<React.ReactNode> => {
    const question = await databases.getDocument(db, questionCollection, params.quesId);

    return <EditQues question={question} />;
};

export default Page;
