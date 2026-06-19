import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from '@/components/sections/navbar'

// Mock framer-motion since it relies on DOM APIs
jest.mock('framer-motion', () => ({
  motion: new Proxy({}, {
    get: (_target, element) => {
      return ({ children, ...props }: any) => {
        const {
          whileHover,
          whileTap,
          initial,
          animate,
          transition,
          layoutId,
          viewport,
          ...domProps
        } = props

        return React.createElement(element as string, domProps, children)
      }
    },
  }),
  AnimatePresence: ({ children }: any) => children,
}))

describe('Navbar Component', () => {
  it('renders the navbar with brand name', () => {
    render(<Navbar activeSection="home" />)
    const brandName = screen.getByText('Kyle Masangcay')
    expect(brandName).toBeInTheDocument()
  })

  it('renders navigation menu on desktop', () => {
    render(<Navbar activeSection="home" />)
    // Check if navigation links are rendered
    const navElement = screen.getByRole('navigation')
    expect(navElement).toBeInTheDocument()
  })

  it('marks the active section as current', () => {
    render(<Navbar activeSection="projects" />)

    const projectButtons = screen.getAllByText('Projects')
    const activeButton = projectButtons.find((element) => element.closest('button')?.getAttribute('aria-current') === 'page')

    expect(activeButton?.closest('button')).toHaveAttribute('aria-current', 'page')
  })

  it('toggles the mobile menu button state', async () => {
    const user = userEvent.setup()
    render(<Navbar activeSection="home" />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)

    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute('aria-expanded', 'true')
  })
})
