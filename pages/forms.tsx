import {FieldError, useForm} from 'react-hook-form';

interface LoginForm {
  username: string,
  email: string,
  password: number,
  errors?: string;
}

export default function forms() {
  const {register, handleSubmit, formState: {errors},
    setError,
    reset
  } = useForm<LoginForm>({
    // mode: "onChange"
    mode: "onBlur"
  });
  // console.log(errors);

  const onValid = (data: LoginForm) => {
    console.log('im valid');
    // setError("errors", { message: "backend error"})
    reset();
  };
  const onInValid = (err: FieldError) => {

  };

  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input {...register('username', {
        required: 'username is required',
        minLength: {
          message: 'username is should be longer then 5 chars',
          value: 5
        },
      })} type="text" placeholder="username"/>
      {errors.username?.message}

      <input {...register('email', {
        required: 'email is required',
        validate: {
          notGmail: (value) => !value.includes('gmail.com') || 'gmail is not allowed'
        }
      })} type="text" 
        placeholder="email"
        className={`${Boolean(errors.email) ? "border-red-500" : ""}`} 
      />
      {errors.email?.message}

      <input {...register('password', {
        required: 'password is required',
      })} type="text" placeholder="password"/>
      {errors.password?.message}

      {errors.errors?.message}


      <input type="submit" value="create account"/>
    </form>
  );

}
