import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-username",
                },
                password:{
                    label: "Password:",
                    type: "password",
                    placeholder: "your-password",
                }
            },
            async authorize(credentials){
                const user = {id: "1", name: process.env.ADMIN_USERNAME , password: process.env.ADMIN_PASSWORD }

                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user;
                }else{
                    return null;
                }
            }
        })
    ],
}

export default NextAuth(options);