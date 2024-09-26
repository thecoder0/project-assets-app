import { LogOut } from "lucide-react"
import { Button } from "./ui/button"
  
export default function Header({email, logout}) {
    return (
      <header className="h-20 bg-slate-900">
        <div className="flex items-center justify-between h-full container max-w-screen-lg">
          <div className="text-2xl font-extrabold uppercase">
            Project <span className="font-extralight">Assets</span>
          </div>
  
          <div className="flex items-center">
            <span className="mr-4 text-white">{email}</span>
            <Button onClick={logout} variant="outline" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </Button>
          </div>
        </div>
      </header>
    );
  }