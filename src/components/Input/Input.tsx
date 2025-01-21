import { InputType } from "./types"

type InputProps = {
  inputTypeProp?: InputType;
  value?: string;
  onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void);
  placeholder?: string;
  className?: string;
}

function withInput(defaults: InputProps){
  return function Input({
    value,
    onChange,
    placeholder,
    className,
    inputTypeProp = defaults.inputTypeProp || 'text',
  }:InputProps
  ){
    return(
      <input
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