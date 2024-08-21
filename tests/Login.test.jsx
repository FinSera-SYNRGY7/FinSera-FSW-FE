import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Testing from '../src/pages/Testing';

test("Example 1 renders successfully", () => {
    render(<Testing/>);

    const element = screen.getByText(/first test/i);

    expect(element).toBeInTheDocument();
})