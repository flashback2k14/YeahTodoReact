export const YeahHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <header className="fixed top-0 w-full flex items-center justify-between px-8 py-2">
    {children}
  </header>
);
