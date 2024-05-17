import Image from "next/image";
import { NavigationMenuDemo } from "./NavigationMenu";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function NavBar() {
    return (
        <div className=" flex w-full justify-around p-0.2 fixed bg-white top-0 left-0 z-50 shadow-sm shadow-black/10 items-center">
            <Image
                src={'/Danley.png'}
                width={80}
                height={50}
                alt="danley waste logo"
                quality={100}
                priority
            />
            <NavigationMenuDemo/>
            <MagnifyingGlassIcon/>
        </div>
    )
}