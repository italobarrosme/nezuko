import CredentialsProvider from 'next-auth/providers/credentials'
import { fetch } from '@/gateway/axios'
import getPublicRuntimeConfig from 'next/config'

const { publicRuntimeConfig } = getPublicRuntimeConfig()

type credentialsProps = {
  user: string
  pass: string
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        user: {
          label: 'user',
          type: 'text',
        },
        pass: { label: 'Password', type: 'text' },
      },
      async authorize(credentials) {
        const { user, pass } = credentials as credentialsProps

        const response = await fetch({
          method: 'POST',
          path: `${publicRuntimeConfig.NEXTAUTH_URL}/api/login`,
          data: {
            user,
            pass,
          },
        })

        if (response.status === 200) {
          return response.data
        }

        return response
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/auth',
    error: '/auth',
  },
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.SessionId,
          sessionTimeout: user.SessionTimeout,
          version: user.Version,
        }
      }
      return token
    },

    async session({ session, token }: any) {
      session.accessToken = token.accessToken
      session.sessionTimeout = token.sessionTimeout
      session.version = token.version

      return session
    },
    async redirect({ baseUrl }: any) {
      return `${baseUrl}/api/auth/callback`
    },
  },
}
