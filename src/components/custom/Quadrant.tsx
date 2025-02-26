import { QuadrantProps } from "@/types/types"
import { Button } from "@/components/ui/button"
import {  Copy } from 'lucide-react'
import {  useDrop } from "react-dnd"
import { Task } from '@/types/types'
import TaskCard from '@/components/custom/TaskCard'
export default function Quadrant({ title, color, tasks, onTaskToggle, onTaskDelete, onTaskDrop }: QuadrantProps) {
    const [, drop] = useDrop(() => ({
      accept: "TASK",
      drop: (item: Task) => onTaskDrop(item),
    }))
  
    return (
      <div ref={drop} className="relative p-4 h-[50vh] border-[1px] border-gray-200">
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <div
          className="mb-4 inline-flex rounded-md px-4 py-2"
          style={{ backgroundColor: color }}
        >
          <span className="text-sm font-medium text-white">{title}</span>
        </div>
        <div className="space-y-2">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onTaskToggle={() => onTaskToggle(task.id)}
              onTaskDelete={() => onTaskDelete(task.id)}
            />
          ))}
        </div>
      </div>
    )
  }