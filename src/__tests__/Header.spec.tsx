import { render } from '@testing-library/react';
import { Header } from '../components/Header';

describe('Header', () => {
  it('should match snapshot', () => {
    const component = render(<Header />);
    expect(component).toMatchSnapshot();
  });
  it('should have Testing App Demo text', () => {
    const component = render(<Header />);
    const titleText = component.getByText('Testing App Demo');
    expect(titleText).toBeInTheDocument();
    expect(titleText).toBeInstanceOf(HTMLHeadingElement);
  });
  it('should have Login button', () => {
    const component = render(<Header />);
    const btn = component.getByRole('button', { name: 'Login' });
    expect(btn).toBeInTheDocument();
  });
});
