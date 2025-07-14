import { Dialog, DialogContent, DialogTrigger } from "@repo/ui/components/dialog";
import { Menu, type LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ModulesSelectProps {
    modules: Module[];
    onSelect?: (module: Module) => void;
}

export interface Module {
    path: string;
    name: string;
    description: string;
    icon: LucideIcon;
}

export default function ModulesSelect({ modules, onSelect }: ModulesSelectProps) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleModuleSelect = (module: Module) => {
        onSelect?.(module);
        navigate(module.path);
        setIsOpen(false); 
    };

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger><Menu /></DialogTrigger>
                <DialogContent>
                    <div className="grid grid-cols-3 gap-4 p-4">
                        {modules.map((module) => (
                            <div 
                                key={module.path} 
                                className="flex flex-col items-center p-4 border rounded-md cursor-pointer hover:bg-gray-100"
                                onClick={() => handleModuleSelect(module)}
                            >
                                <module.icon className="h-10 w-10 mb-2" />
                                <span className="text-center font-medium">{module.name}</span>
                            </div>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}