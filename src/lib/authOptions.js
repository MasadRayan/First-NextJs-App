import { dbConnect } from "./dbConnect";
import CredentialsProvider from "next-auth/providers/credentials"
import { collectionNames } from "./dbConnect";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {

    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jhon" },
                email: { label: "Email", type: "email", placeholder: "jhon@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, email, password } = credentials;
                const result = await dbConnect(collectionNames.TEST_USER).findOne({ name: username, email: email, password: password });

                const isPasswordValid = result.password === password;
                // If no error and we have user data, return it
                if (isPasswordValid && result) {
                    return result
                }
                // Return null if user data could not be retrieved
                return <div>Not giving correct data</div>
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account) {
                try {
                    const { provider, providerAccountId, } = account;
                    const { name, email: user_email, image } = user
                    const payload = {
                        role: 'user',
                        providerAccountId, 
                        provider,
                        name, 
                        user_email, 
                        image
                    }
                    const userCollection =  dbConnect(collectionNames.TEST_USER)
                    const isUserExist = await userCollection.findOne({ email: user_email });
                    if (!isUserExist) {
                        await userCollection.insertOne(payload);
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }


            }

            return true
        },
        async session({ session, token, user }) {
            if (token) {
                session.user.name = token.name;
                session.user.role = token.role
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.name = user.name;
                token.role = user.role;
            }
            return token
        }
    },

}