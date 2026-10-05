import { Button } from "@/components/ui/button"

export default function BaseButton() {
  return (
    <div>
      <Button
        variant="outline"
        className="
          rounded-sm px-10 py-4 text-base font-semibold
          border-2 border-indigo-500 text-indigo-600
          transition-all duration-200
          hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:-translate-y-0.5
          active:translate-y-0 active:scale-95
        "
      >
        Button
      </Button>
    </div>
  )
}