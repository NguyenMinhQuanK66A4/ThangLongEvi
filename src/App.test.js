import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page heading', () => {
  render(<App />);
  expect(screen.getByText(/Thi công Trạm xử lý nước thải quy mô nhỏ/i)).toBeInTheDocument();
});
