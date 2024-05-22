import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Statistics from './components/Statistics';
import { useState } from 'react';
import { initialItems } from './initialItems';

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );

    if (confirmed) setItems([]);
  };

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Statistics items={items} />
    </div>
  );
}

export default App;
