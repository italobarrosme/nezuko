'use client'

import { Button, InputNumber, Text } from '@coqueirodigital/react-components'

export const Example = () => {
  const handleValue = (value: number | string) => {
    console.log(value)
  }

  return (
    <div>
      <Text tag="h1" variant="md/bold">
        Example
      </Text>

      <Button
        variant="medium/regular"
        className="bg-primary-light"
        onClick={() => console.log('click')}
      >
        Hellow World
      </Button>

      <InputNumber
        label="Enter a number"
        name="number-input"
        currency="USD"
        onChangeValue={handleValue}
      />
    </div>
  )
}
