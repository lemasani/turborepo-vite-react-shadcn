import { Button } from "@repo/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded-md"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input 
              type="password" 
              className="w-full p-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <Button className="w-full">Sign In</Button>
        </CardContent>
      </Card>
    </div>
  );
}