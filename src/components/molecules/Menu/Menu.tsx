import { Tab } from '../../atoms/Tab';

export function Menu() {
  return (
    <nav className="flex gap-2 h-10">
      <Tab label="Expenses" url="/expenses" />
      <Tab label="New expense" url="/new-expense" />
      <Tab label="New income" url="/new-income" />
    </nav>
  );
}
