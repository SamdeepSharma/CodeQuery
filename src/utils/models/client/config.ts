import env from "@/env";
import { Client, Account, Avatars, Databases, Storage } from "appwrite";

const client = new Client()
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId);

const account = new Account(client)
const databases = new Databases(client)
const avatars = new Avatars(client)
const storage = new Storage(client)

export {account, databases, storage, avatars, client}