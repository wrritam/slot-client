import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between h-14 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <div className="flex h-6 w-6">
            <div className="h-full w-1/2 bg-emerald-400" />
            <div className="h-full w-1/2 bg-emerald-600" />
          </div>
          <span className="hidden text-lg font-bold sm:inline-block">
            Get Things Done..
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="hover:text-primary">
            Workspaces
          </Button>
          <Button variant="ghost" className="hover:text-primary">
            About
          </Button>
          <Button variant="ghost" className="hover:text-primary">
            Pricing
          </Button>
          <Button variant="ghost" className="hover:text-primary">
            Feedback
          </Button>
        </nav>
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="default" className="hidden md:inline-block">
            Login
          </Button>
          {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col space-y-1 p-4">
            <Button variant="ghost" className="w-full text-left hover:text-primary">
              Workspaces
            </Button>
            <Button variant="ghost" className="w-full text-left hover:text-primary">
              About
            </Button>
            <Button variant="ghost" className="w-full text-left hover:text-primary">
              Pricing
            </Button>
            <Button variant="ghost" className="w-full text-left hover:text-primary">
              Feedback
            </Button>
            <Button variant="default" className="w-full">
              Login
            </Button>
          </nav>
        </div>
      )}
        </div>
      </div>
    </header>
  )
}
