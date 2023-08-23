import { render, screen } from '@testing-library/react'
import { Button, ButtonProps } from './Button'

const renderComponent = ({ label, className, icon, onClick }: ButtonProps) =>
  render(
    <Button label={label} className={className} icon={icon} onClick={onClick} />
  )

describe('Button', () => {
  it('should render correctly', () => {
    renderComponent({
      label: 'Test',
      className: 'test',
      icon: 'test',
      onClick: () => jest.fn(),
      type: 'button',
    })

    expect(screen.getByText('Test')).toBeTruthy()
  })

  it('should render correctly background color', () => {
    renderComponent({
      label: 'Test',
      icon: 'test',
      onClick: () => jest.fn(),
      type: 'button',
    })

    const element = screen.getByRole('button')

    expect(element.className).toMatch('bg-brand-primary')
  })

  it('should will snapshot', () => {
    const { container } = renderComponent({
      label: 'Test',
      icon: 'test',
      className: 'test',
      onClick: () => jest.fn(),
      type: 'button',
    })

    expect(container).toMatchSnapshot()
  })
})
