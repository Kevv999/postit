import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "../../../prisma/client"

const adapter = new PrismaAdapter(prisma)

export const authOptions ={
    adapter: PrismaAdapter(prisma),
    secret: process.env.AUTH_SECRET,
    synchronize: false,
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
],
}

export default NextAuth(authOptions)