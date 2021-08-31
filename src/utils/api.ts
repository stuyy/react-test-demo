import { FormAuthCredentialFields } from './types';

export const submitForm = async (data: FormAuthCredentialFields) => {
  if (!data.username || !data.password) throw new Error('Invalid Form Fields');
  return;
};
