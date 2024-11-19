// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Spinner from './Spinner'

describe('Spinner', () => {
  test('does not display when on prop is false', () => {
    render(<Spinner on={false} />)
    const spinner = screen.queryByTestId('spinner')
    expect(spinner).not.toBeInTheDocument()
  })

  test('displays when on prop is true', () => {
    render(<Spinner on={true} />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeInTheDocument()
  })

  test('displays "Please wait..." text when rendered', () => {
    render(<Spinner on={true} />)
    const text = screen.getByText(/please wait/i)
    expect(text).toBeInTheDocument()
  })

  test('has correct id when rendered', () => {
    render(<Spinner on={true} />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toHaveAttribute('id', 'spinner')
  })
})
