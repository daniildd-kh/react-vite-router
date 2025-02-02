import { createContext, useContext } from "react";

export type FormContextType = {
  type: React.ElementType; 
};

const FormContext = createContext<FormContextType>({type: 'form'});

export const useFormContext = (): React.ElementType => {
  const context = useContext(FormContext);
  return context.type
}

export const FormProvider = FormContext.Provider;

