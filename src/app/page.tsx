import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { PlusCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto mt-5">
      <form>
        <div className="mb-2">
          <Input
            placeholder="Enter your name"
            className="focus:border-blue-600 focus:outline-none"
          />
        </div>
        <Button variant="outline" type="submit">
          <PlusCircle className="mr-1" size={14} /> Submit
        </Button>
      </form>
    </div>
  );
}
