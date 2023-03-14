import { render, screen } from "@testing-library/react";
import Book from './Book';

test('Renders the BookingForm heading', () => {
    render(<Book />);
    const headingElement = screen.getByText("Book now!");
    expect(headingElement).toBeInTheDocument();
})