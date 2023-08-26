import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ButtonIcon, type ButtonIconProps } from './ButtonIcon'

const renderComponent = ({
  label = 'ButtonIcon',
  icon = 'mdi:home',
  onClick = jest.fn(),
  height = 24,
  width = 24,
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
  it('render component', () => {
    renderComponent({
      label: 'ButtonIcon',
      icon: 'mdi:home',
      onClick: () => {
        console.log('click')
      },
      height: 24,
      width: 24,
    })
    const button = screen.getByRole('button', { name: 'ButtonIcon' })

    expect(button).toBeInTheDocument()
    userEvent.click(button)

    expect(button).toHaveTextContent('ButtonIcon')
  })
})
