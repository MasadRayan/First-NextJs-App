import { dbConnect } from "@/lib/dbConnect"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jhon" },
                email: { label: "Email", type: "email", placeholder: "jhon@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, email, password } = credentials;
                const result = await dbConnect("test_user").findOne({ name: username, email: email, password: password });

                const isPasswordValid = result.password === password;
                // If no error and we have user data, return it
                if (isPasswordValid && result) {
                    return result
                }
                // Return null if user data could not be retrieved
                return <div>Not giving correct data</div>
            }
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
            if (token) {
                session.user.name = token.name;
                session.user.role = token.role
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.name =  user.name;
                token.role = user.role;
            }
            return token
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }