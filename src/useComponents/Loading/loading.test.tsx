import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Loading } from './Loading'

const renderComponent = () => render(<Loading />)

describe('Loading', () => {
  it('should render', () => {
    renderComponent()

    expect(screen.getByTestId('loading')).toBeTruthy()
  })
})
