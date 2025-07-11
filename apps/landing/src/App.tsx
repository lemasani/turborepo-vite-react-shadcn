import { useState } from "react";
import { Button } from "@repo/ui/components/button";

import "@repo/ui/styles/globals.css";
import { Card, CardContent } from "@repo/ui/components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold mb-2">This is a landing page</h1>
      <p className="mb-4">
        This shadcn/ui button is shared between Vite and any other
        application.
      </p>
      <Button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </Button>

      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Card Component</h2>
          <p>This is a card component from the shared UI library.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
