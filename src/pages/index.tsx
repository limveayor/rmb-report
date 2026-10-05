import BaseButton from "@/features/form/BaseButton";
import BaseInput from "@/features/form/BaseInput";

export default function Home() {
    return (
        <div className=" flex flex-col min-h-screen items-center justify-center bg-background">
                <BaseInput />
                <BaseButton />
        </div>
    )
}