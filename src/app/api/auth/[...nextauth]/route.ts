import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "SchoolMart Login",
      credentials: {
        loginMethod: { label: "Login Method", type: "text" },
        email: { label: "Email", type: "email", placeholder: "user@gmail.com" },
        phone: { label: "Phone", type: "tel", placeholder: "+91XXXXXXXXXX" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.loginMethod) return null;

        if (
          credentials.loginMethod === "gmail" &&
          credentials.email &&
          credentials.email.endsWith("@gmail.com")
        ) {
          return {
            id: "user_1",
            name: credentials.email.split("@")[0],
            email: credentials.email,
            role: "patron",
          };
        }

        if (
          credentials.loginMethod === "phone" &&
          credentials.phone &&
          credentials.otp === "123456"
        ) {
          const phoneNumber = credentials.phone.replace(/\s+/g, "");

          return {
            id: `phone_${phoneNumber}`,
            name: "Phone User",
            email: `${phoneNumber}@phone.schoolmart.local`,
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
