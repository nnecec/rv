import { createSignal } from 'solid-js'

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count() + 1)}>increment</button>
    </div>
  );
}

export default App;
