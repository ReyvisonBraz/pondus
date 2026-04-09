import { createContext, useContext, useState, ReactNode } from "react";
import { ProposalModal } from "./ProposalModal";

interface ProposalModalContextType {
  openProposalModal: () => void;
}

const ProposalModalContext = createContext<ProposalModalContextType>({
  openProposalModal: () => {}
});

export function useProposalModal() {
  return useContext(ProposalModalContext);
}

export function ProposalModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openProposalModal = () => setIsOpen(true);

  return (
    <ProposalModalContext.Provider value={{ openProposalModal }}>
      {children}
      <ProposalModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ProposalModalContext.Provider>
  );
}
