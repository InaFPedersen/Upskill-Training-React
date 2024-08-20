import { useMutation } from '@tanstack/react-query';
import { signUp as signUpApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
  });

  return { signup, isLoading };
};
