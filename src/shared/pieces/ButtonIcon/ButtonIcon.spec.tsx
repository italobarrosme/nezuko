import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ButtonIcon, type ButtonIconProps } from './ButtonIcon'

const renderComponent = ({
  label = 'ButtonIcon',
  icon = 'mdi:home',
  onClick = vi.fn(),
  height = 32,
  width = 32,
}: ButtonIconProps) => {
  render(
    <ButtonIcon
      label={label}
      icon={icon}
      onClick={onClick}
      height={height}
      width={width}
    />
  )
}

describe('ButtonIcon', () => {
  afterAll(() => {
    vi.clearAllMocks()
  })

  it('render component', () => {
    renderComponent({
      label: 'ButtonIcon',
      icon: 'mdi:home',
    })
    const button = screen.getByRole('button', { name: 'ButtonIcon' })

    expect(button).toBeInTheDocument()

    expect(button).toHaveTextContent('ButtonIcon')
  })
  it('should render with custom width and height', () => {
    vi.mock('@iconify/react', () => ({
      Icon: () => <svg data-testid="icon" height={32} width={32} />,
    }))

    renderComponent({
      label: 'ButtonIcon',
      icon: 'mdi:home',
      height: 32,
      width: 32,
    })
    const icon = screen.getByTestId('icon')

    expect(icon).toHaveAttribute('height', '32')
    expect(icon).toHaveAttribute('width', '32')
  })

  it('should render without label', () => {
    renderComponent({
      label: '',
      icon: 'mdi:home',
    })
    const button = screen.getByRole('button')
    const label = button.querySelector('label')

    expect(label).not.toBeInTheDocument()
  })
})
