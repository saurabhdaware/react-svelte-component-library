import React from 'react';
import { Button } from 'react-vue-library';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <Button onClick={() => setCount(count + 1)}>Hello from React Button!: {count}</Button>
  )
}

export default App
