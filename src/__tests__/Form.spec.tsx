import {
  render,
  RenderResult,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from '../components/Form';

describe('Form', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Form />);
  });

  it('should render the form correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should display an error if missing password field', async () => {
    const username = component.getByLabelText('Username');
    const btn = component.getByRole('button', { name: 'Submit' });
    expect(username).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    userEvent.type(username, 'React');
    userEvent.click(btn);
    await waitFor(() => {
      expect(component.getByText('Something went wrong!')).toBeInTheDocument();
    });
  });

  it('should display an error if missing username field', async () => {
    const password = component.getByLabelText('Password');
    const btn = component.getByRole('button', { name: 'Submit' });
    expect(password).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    userEvent.type(password, 'React');
    userEvent.click(btn);
    await waitFor(() => {
      expect(component.getByText('Something went wrong!')).toBeInTheDocument();
    });
  });

  it('should display an error if missing both fields', async () => {
    const btn = component.getByRole('button', { name: 'Submit' });
    expect(btn).toBeInTheDocument();
    userEvent.click(btn);
    await waitFor(() => {
      expect(component.getByText('Something went wrong!')).toBeInTheDocument();
    });
  });

  it('should display an error when missing fields, then disappear when fields are present', async () => {
    const username = component.getByLabelText('Username');
    const password = component.getByLabelText('Password');
    const btn = component.getByRole('button', { name: 'Submit' });
    userEvent.click(btn);
    await waitFor(() => {
      expect(component.getByText('Something went wrong!')).toBeInTheDocument();
    });
    userEvent.type(username, 'john');
    userEvent.type(password, 'john');
    userEvent.click(btn);
    await waitForElementToBeRemoved(() =>
      component.getByText('Something went wrong!')
    );
    expect(
      component.queryByText('Something went wrong!')
    ).not.toBeInTheDocument();
  });
});
