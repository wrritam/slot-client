import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Task } from "@/types/types"
import {  Trash2,  PenLine } from 'lucide-react'
import { useDrag } from "react-dnd"

export default function TaskCard({ task, onTaskToggle, onTaskDelete }: { task: Task, onTaskToggle: () => void, onTaskDelete: () => void }) {
    const [, drag] = useDrag(() => ({
      type: "TASK",
      item: { ...task },
    }))
  
    return (
      <Card
        ref={drag}
        className="flex items-center gap-2 p-2 bg-background/50 backdrop-blur-sm"
      >
        <Checkbox
          checked={task.completed}
          onCheckedChange={onTaskToggle}
        />
        <span className="flex-1 text-sm">{task.text}</span>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <PenLine className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive"
            onClick={onTaskDelete}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    )
  }
  