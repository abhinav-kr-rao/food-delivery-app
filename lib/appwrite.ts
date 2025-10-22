import { SignInParams, SignUpParams } from '@/type';
import { Account, Avatars, Client, Databases, ID, TablesDB } from 'react-native-appwrite';


export const appwrite = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    platform: "com.rao.myfood",
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!,
    table: process.env.EXPO_PUBLIC_APPWRITE_DB_TABLE!,
}
// Init your React Native SDK
export const client = new Client();

client
    .setEndpoint(appwrite.endpoint) // Your Appwrite Endpoint
    .setProject(appwrite.projectId) // Your project ID
    .setPlatform(appwrite.platform) // Your application ID or bundle ID.
    ;

export const account = new Account(client);
export const databases = new Databases(client);
export const tablesDB = new TablesDB(client);
export const avatars = new Avatars(client);


export const createUser = async ({ name, email, password }: SignUpParams) => {
    try {

        // console.log("Creating user");


        const newAccount = await account.create({
            userId: ID.unique(),
            email: email,
            password: password,
            name: name
        });

        if (!newAccount) {
            console.log("Error in creating user");

            throw new Error("Error creating user");
        }

        const avatarURL = avatars.getInitialsURL(name);
        await signIn({ email, password });


        const promise = await tablesDB.createRow({
            databaseId: appwrite.databaseId,
            tableId: appwrite.table,
            rowId: ID.unique(),
            data: {
                name: name,
                email: email,
                accountId: newAccount.$id,
                avatar: avatarURL
            }
        });

        // promise.then(function (response) {
        //     console.log(response);
        // }, function (error) {
        //     console.log(error);
        // });


        // return await databases.cr

    } catch (error) {
        throw new Error(error as string)
    }
}

export const signIn = async ({ email, password }: SignInParams) => {
    try {
        const session = await account.createEmailPasswordSession({
            email: email,
            password: password
        });

        // if (session) {
        //     console.log("Signed in success");
        // }

    } catch (error) {
        throw new Error(error as string)
    }
}