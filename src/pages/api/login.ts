// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { fetch } from '@/services/axios'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const LoginFetch = async () => {
    const { user, pass } = req.body

    const response = await fetch({
      method: 'POST',
      path: '/Login',
      data: {
        UserName: user,
        Password: pass,
        CompanyDB: 'SBOIPOGTESTE',
        Language: 29,
      },
    })

    return res.status(response.status).json(response.data)
  }

  return LoginFetch()
}
