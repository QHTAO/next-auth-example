import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  secret: "mysecret",
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        if (credentials == null) return null;
        try {
          const { email, password } = credentials;
          if (email === "test@test.com" && password === "123456") {
            return { id: 1, name: "jason", email: email, jwt: "jwt token" };
          } else {
            throw Error("用户名或密码错误");
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      //从authorize返回的user提取属性，添加到JSON Web  令牌
      if (user) {
        token.jwt = user.jwt;
      }
      return token;
    },
    async session({ session, token }) {
      // 从JSON Web 令牌中提取属性，添加到session
      session.jwt = token.jwt;
      return session;
    },
  },
});
