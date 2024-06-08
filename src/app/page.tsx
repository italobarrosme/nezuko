import { Example } from '@/modules/example'
import { cn } from '@/utils'
import { Text } from '@coqueirodigital/react-components'

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
      <section className="max-w-5xl text-primary-regular">
        <Text tag="h1" variant="3xl/bold">
          Hello World
        </Text>
        <Text tag="h2" variant="xl/normal">
          This is an example of a page
        </Text>

        <Example />

        <ul>
          {data.map((item: any, index: number) => (
            <li key={item.id} className={cn('text-brand-primary')}>
              {index} - {item.name}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
