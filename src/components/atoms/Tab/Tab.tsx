interface TabProps {
  label: string;
  url: string;
}

export function Tab({ label, url }: TabProps) {
  return <a href={url}>{label}</a>;
}
