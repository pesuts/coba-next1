import { signIn } from "@/libs/firebase/service";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// CredentialsProvider
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    fullName: string;
    role: string;
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
        }
      },
      authorize: async (credentials) => { 
        const { email, password } = credentials as {
          email: string,
          password: string,
        };
        // const user = {
        //   id: "1",
        //   email: email,
        //   password: password,
        // }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const user: any = await signIn({ email });
        if (user) {
          const passwordConfirm = await compare(password, user.password);
          if (passwordConfirm) {
            return user;
          } else return null;
          // console.log(user);
        } else { 
          return null;
        }
      }
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    jwt: ({ token, account, profile, user }) => { 
      if (account?.provider === "credentials") { 
        token.email = user.email;
        token.fullName = user.fullName;
        token.role = user.role;
      }
      // console.log(token, account, user);
      return token;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    session: async ({ session, token }: any) => { 
      if ("email" in token) { 
        session.user.email = token.email;
      }
      if ("fullName" in token) { 
        session.user.fullName = token.fullName;
      }
      if ("role" in token) { 
        session.user.role = token.role;
      }
      console.log("session le", session);
      return session;
    }
  },
  pages: {
    signIn: "/auth/login"
  }
};

export default NextAuth(authOptions);