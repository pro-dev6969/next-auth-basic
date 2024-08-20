import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const { handlers:{ GET , POST} , auth , signIn , signOut } = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: { label: 'email', type: 'text', placeholder: '' },
              password: { label: 'password', type: 'password', placeholder: '' },
            },
            async authorize(credentials: any) {
                // whatever u fill in the form ,can be accessed using credentials
                const email = credentials.email;
                const password = credentials.password;
                
                // return what you want to be stored in the jwt token
                return {
                    id: "user1"
                };
            },
          }),
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
          GitHubProvider({
            clientId: process.env.MY_GITHUB_ID,
            clientSecret: process.env.MY_GITHUB_SECRET
          })
      ],
      secret: process.env.NEXTAUTH_SECRET
})