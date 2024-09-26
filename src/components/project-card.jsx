import { PlusIcon, TrashIcon } from "lucide-react"
import ColorForm from "./color-form"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover"

export default function ProjectCard({
  handleUpdate,
  handleDelete,
  project: { id, name, description, colors },
}) {
  async function handleAdd(colorHex) {
    await handleUpdate(id, {
      colors: [...colors, colorHex],
    })
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={() => handleDelete(id)}
          >
            <TrashIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <div key={color} className="bg-white p-2 rounded-sm">
              <div
                className="w-full h-12 rounded-sm"
                style={{
                  backgroundColor: color,
                }}
              />
              <div className="text-neutral-500 mt-2">{color}</div>
            </div>
          ))}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="h-auto">
                <PlusIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <ColorForm handleAdd={handleAdd} />
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  )
}