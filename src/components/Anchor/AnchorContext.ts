import { createContext, ReactElement, ReactNode, useContext } from "react";

export type AnchorContextType = {
  type: React.ElementType; 
};

const AnchorContext = createContext<AnchorContextType>({
  type: 'a',
});

export const useAnchorContext = (): React.ElementType => {
  const context = useContext(AnchorContext);
  return context.type;
};

export const AnchorProvider = AnchorContext.Provider;
