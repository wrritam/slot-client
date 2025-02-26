import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog" 
import { DialogBoxProps } from "@/types/types"
import { useState } from "react"
  const DialogBox = ({ trigger, title, description, buttons,action }: DialogBoxProps) => {
    const [inputValue,setInputValue] = useState('')
    return (
      <Dialog>
        <DialogTrigger>{trigger}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {action && (
          <div className="mt-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder={action === "add" ? "Enter item to add" : "Enter updated value"}
            />
          </div>
        )}
          <div className="mt-4 flex justify-end gap-2">
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className={`px-4 py-2 text-sm rounded ${
                  button.variant === "danger"
                    ? "bg-red-500 text-white"
                    : button.variant === "secondary"
                    ? "bg-gray-300 text-black"
                    : "bg-blue-500 text-white"
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  export default DialogBox
  