import { SWRConfig } from 'swr';

interface SWRProps {
  children: React.ReactNode;
}

export function SWR({ children }: SWRProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}
