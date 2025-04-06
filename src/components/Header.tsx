import { Grip } from "lucide-react";

export const Header = ({ title }: { title: string }) => (
  <h1 className="flex items-center gap-2 py-6">
    <Grip size={16} color="#343330" />
    {title}
  </h1>
);
