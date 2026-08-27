import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Phone Number",
      credentials: {
        phone: { label: "Phone Number", type: "tel" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.phone) return null;

        // For demo purposes, accept any phone number with OTP "123456"
        if (credentials.otp === "123456") {
          return {
            id: credentials.phone,
            name: "User",
            email: `${credentials.phone}@phone.user`,
            phone: credentials.phone,
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
        (session.user as any).phone = token.phone;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.phone = (user as any).phone;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
