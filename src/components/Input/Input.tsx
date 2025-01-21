import { InputType } from "./types"

type InputProps = {
  inputTypeProp?: InputType;
  value?: string;
  onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void);
  placeholder?: string;
  className?: string;
  name?: string;
}

function withInput(defaults: InputProps){
  return function Input({
    value,
    onChange,
    placeholder,
    name,
    className,
    inputTypeProp = defaults.inputTypeProp || 'text',
  }:InputProps
  ){
    return(
      <input
        name={name}
        value={value}
        type={inputTypeProp}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    )
  }
}

export const Input = withInput({});
export const InputPassword = withInput({inputTypeProp: 'password'});
export const InputEmail = withInput({inputTypeProp: 'email'})