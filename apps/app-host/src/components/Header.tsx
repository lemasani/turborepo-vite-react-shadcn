import { Grid2x2Plus, SquareSlash, Weight } from "lucide-react";
import ModulesSelect from "./modulesSelect";
import { Link } from "react-router-dom";

const modules = [
    {
        path: "/module1",
        name: "Module 1",
        description: "Description for Module 1",
        icon: Grid2x2Plus,
    },
    {
        path: "/module2",
        name: "Module 2",
        description: "Description for Module 2",
        icon: SquareSlash,
    },
    {
        path: "/module3",
        name: "Module 3",
        description: "Description for Module 3",
        icon: Weight,
    },
];

export default function Header() {
  return (
    <header className="flex items-center mx-auto justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-4">
            <Link to="/" className="text-lg font-bold hover:text-gray-300">
                App Host
            </Link>
            <div className="modules">
                <ModulesSelect modules={modules} />
            </div>
        </div>
        <div className="profile flex items-center space-x-3">
            <span className="profile-name">User Name</span>
            <img 
                src="/path/to/profile-pic.jpg" 
                alt="Profile" 
                className="profile-pic w-8 h-8 rounded-full"
            />
        </div>
    </header>
  );
}