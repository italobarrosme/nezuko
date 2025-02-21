import { cn } from '@/utils'

export default async function Home() {
  async function exampleFetchData() {
    const delay = 2000 // 2 seconds
    await new Promise((resolve) => setTimeout(resolve, delay))

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return data
  }

  const data = await exampleFetchData()

  return (
    <>
      <section className="flex max-w-5xl flex-col gap-16 text-primary-regular">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <div>
          <h2 className="text-2xl font-bold">Example Data from API</h2>
          <ul>
            {data.map((item: any, index: number) => (
              <li key={item.id} className={cn('text-primary-regular')}>
                {index} - {item.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
