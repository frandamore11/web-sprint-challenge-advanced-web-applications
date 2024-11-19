// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import { render, screen } from '@testing-library/react'
import Spinner from './Spinner'

describe('Spinner component', () => {
  test('renders when on prop is true', () => {
    render(<Spinner on={true} />)
    const spinner = screen.getByText(/please wait/i)
    expect(spinner).toBeInTheDocument()
  })

  test('does not render when on prop is false', () => {
    render(<Spinner on={false} />)
    const spinner = screen.queryByText(/please wait/i)
    expect(spinner).not.toBeInTheDocument()
  })

  test('has correct id when rendered', () => {
    render(<Spinner on={true} />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeInTheDocument()
  })

  test('contains the correct loading text', () => {
    render(<Spinner on={true} />)
    const loadingText = screen.getByText(/please wait/i)
    expect(loadingText).toBeInTheDocument()
  })
})
