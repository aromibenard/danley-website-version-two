import Image from "next/image"
import { SubHeading } from "./Heading"
import Link from "next/link"

const ServiceGrid = () => {
    return (
        <div className="grid md:grid-cols-2 gap-6 p-2 my-2 h-[26rem]">
            <div className="p-2 border rounded-md grid md:grid-cols-2 items-center shadow-md">
                <div>
                    <SubHeading value={'Garbage Collection & Recycling Services for Residential Clients'}/>
                    <Link href={'/households'} className="bg-purple-800 text-white p-1 mt-2">
                        Get the App
                    </Link>
                </div>
                <Image 
                    src={'/appdemo.png'}
                    alt="app demo"
                    width={200}
                    height={150}
                    className="object-cover w-full"
                />
            </div>
            <div className="p-1 border rounded-md">2</div>
            <div className="p-1 border rounded-md">3</div>
            <div className="p-1 border rounded-md">4</div>
        </div>
    )
}

export default function Services() {
    return (
        <div className="px-3">
            <div className=" space-x-3  flex mb-10">
                <h1 className="text-white font-semibold text-xl bg-purple-600 inline px-1 opacity-75">Services</h1>
                <p className="text-xs flex items-center w-2/5">Explore the services we offer including 
                waste collection and cleaning services for residential and commercial clients
                </p>
            </div>
            <ServiceGrid/>
        </div>
    )
}