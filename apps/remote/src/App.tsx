

import "@repo/ui/styles/globals.css";

import { Button } from "@repo/ui/components/button";

function App() {
    

  return (
    <>
      <div className="container mx-auto p-4 space-y-4">
        <h1 className="text-xl font-bold mb-2">This is the remote app built with Vite React</h1>
        <p className="mb-4">
          This shadcn/ui button is shared between Vite and other
          applications.
        </p>

        <Button onClick={() => alert("Button clicked!")}>
          Click me!
        </Button>
      </div>
    </>
  )
}

export default App
