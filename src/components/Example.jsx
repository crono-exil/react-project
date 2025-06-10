import { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    localStorage.setItem('Count', count);
  }, [count]);

  return (
    <div>
      <p>Conteggio: {count}</p>
      <button onClick={() => setCount(count + 1)}>Clicca</button>
    </div>
  );
}

export default Example;
