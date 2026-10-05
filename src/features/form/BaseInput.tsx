import { FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function BaseInput() {
  return (
      <div className="rounded-sm bg-white">
        <FieldLabel htmlFor="name" className="text-sm font-semibold">
          Full name
        </FieldLabel>
        <Input
          id="name"
          autoComplete="off"
          placeholder="Enter your full name"
          className="
            h-11 rounded-xl border-2 border-slate-200 px-4
            transition-all duration-200
            focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-500/20
          "
        />
      </div>
  )
}