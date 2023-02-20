import { fetch } from '../axios'

export const getPurchaseRequests = async (
  skip: any,
  orderby: any,
  filter?: any
) => {
  return await fetch({
    method: 'GET',
    path: `/api/purchase-request`,
    params: {
      skip,
      orderby,
      filter
    }
  })
}
