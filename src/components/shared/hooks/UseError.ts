import { useState } from 'react';

const useError = () => {
  const [error, setError] = useState(false);

  const showError = () => setError(true);
  const hideError = () => setError(false);

  return { error, showError, hideError };
};

export default useError;
