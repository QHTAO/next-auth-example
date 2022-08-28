import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  secret: "mysecret",
  session: {
    strategy: "jwt",
    maxAge: 60,
  },
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
          const {
            data: { user, jwt },
          } = await axios.post("http://localhost:3000/api/users/auth", {
            email,
            password,
          });
          return { ...user, jwt };
        } catch (error) {
          throw Error("用户名或密码错误");
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

  // 设置登录页面url，用户没有登入，将重定向到登录页面
  pages: { signIn: "/signin" },
});
