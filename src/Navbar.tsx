import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { ReloadIcon } from "@radix-ui/react-icons";
import { imgdata } from "./store/const";
import { cn } from "./lib/utils";
import { useTheme } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

export default function Navbar() {
  const { theme } = useTheme();

  const image = imgdata.adeeti?.img;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur text-foreground py-2",
        theme === "dark" && "bg-dark/95 text-dark-foreground"
      )}
    >
      <div className="container flex h-14 items-center mx-auto px-24 justify-between ">
        <div className="mr-4 flex">
          <a
            href="/"
            className={cn(
              "mr-6 flex items-center space-x-2 text-neutral-800",
              theme === "dark" && "text-dark-foreground"
            )}
          >
            <span className="flex items-center space-x-2 dark:text-neutral-300">
              <ReloadIcon className="h-6 w-6" />
              <span className="font-bold text-2xl ">Revise</span>
            </span>
          </a>
        </div>
        <nav className="flex items-center justify-between space-x-2 ">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className={cn(
                "relative h-8 w-8 rounded-full",
                theme === "dark" && "border-dark-foreground"
              )}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={"https://github.com/shadcn.png"} alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
            <ModeToggle/>
          </div>
        </nav>
      </div>
    </header>
  );
}


