import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// CredentialsProvider
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    fullName: string;
  }
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",  
        },
        fullName: {
          label: "Full Name",
          type: "text",  
        }
      },

      async authorize(credentials) { 
        const { email, password, fullName } = credentials as {
          email: string,
          password: string
          fullName: string
        };
        const user = {
          id: "1",
          email: email,
          password: password,
          fullName: fullName,
        }

        if (user) {
          // console.log(user);
          return user;
        } else { 
          return null;
        }
      }
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    jwt({ token, account, profile, user }) { 
      if (account?.provider === "credentials") { 
        token.email = user.email;
        token.fullName = user.fullName;
      }
      // console.log(token, account, user);
      return token;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: any) { 
      if ("email" in token) { 
        session.user.email = token.email;
      }
      if ("fullName" in token) {
        session.user.fullName = token.fullName;
      }
      // console.log(session, token);
      return session;
    }
  }
};

export default NextAuth(authOptions);