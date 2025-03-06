import { Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function JobApplications() {
  return (
    <Card className="h-full w-72 flex-shrink-0 items-stretch shadow-sm transition-shadow transition-transform ease-in-out hover:scale-101 hover:shadow-lg md:h-auto md:w-full">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="h-full flex-1">
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="destructive">
          <Trash2 />
        </Button>
        <Button variant="default">Open</Button>
      </CardFooter>
    </Card>
  );
}

export { JobApplications };
