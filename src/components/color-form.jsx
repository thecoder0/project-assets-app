import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../components/ui/form"

export default function ColorForm({ handleAdd }) {
  const form = useForm({
    defaultValues: {
      colorHex: "",
    },
  })

  function onSubmit(values) {
    handleAdd(values.colorHex)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="colorHex"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter the Hex Value</FormLabel>
              <FormControl>
                <Input placeholder="hex" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Add
        </Button>
      </form>
    </Form>
  );
}