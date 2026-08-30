import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "SchoolMart Login",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@school.in" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // Demo authentication - accept any credentials for testing
        if (credentials.email.endsWith("@school.in") || credentials.email.endsWith("@gmail.com")) {
          return {
            id: "user_1",
            name: "Patron",
            email: credentials.email,
            role: "patron",
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };