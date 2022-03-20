import { useState } from 'react';

interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}

type UseMutationStateResult = [
  (data?: any) => void,
  { loading: boolean; data: undefined | any; error: undefined | any }
];

export default function useMutation(url: string): UseMutationStateResult {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });

  const mutation = (data: any) => {
    console.log(data);
    setState({
      ...state,
      loading: true,
    });

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => {}))
      .then((data) =>
        setState({
          ...state,
          data,
        })
      )
      .catch((error) =>
        setState({
          ...state,
          error,
        })
      )
      .finally(() =>
        setState({
          ...state,
          loading: false,
        })
      );
  };

  return [mutation, state];
}
