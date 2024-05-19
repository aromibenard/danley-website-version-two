import Image from "next/image"
import { SubHeading } from "./Heading"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRightIcon } from "@radix-ui/react-icons"

const ServiceGrid = () => {
    return (
        <div className="grid md:grid-cols-2 gap-6 p-2 my-2">
            <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 border-2 border-gray-300 grid md:grid-cols-2 items-center shadow-md rounded-md hover:border-purple-400">
                <div>
                    <SubHeading value={'Garbage Collection & Recycling Services for Residential Clients'}/>
                    <Link href={'/households'} className=" p-2 mt-4 flex items-center">
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow-md hover:scale-110 transition">Get the App</p> <span className="px-3"><ArrowRightIcon className="text-pink-500"/></span>
                    </Link>
                </div>
                <Image 
                    src={'/appdemo.png'}
                    alt="app demo"
                    width={200}
                    height={150}
                    className="object-cover w-full"
                />
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 border-2 border-gray-300 grid md:grid-cols-2 items-center shadow-md rounded-md hover:border-purple-400">
                <div>
                    <SubHeading value={'Office Cleaning Services for Commercial Clients'}/>
                    <Link href={'/office'} className=" p-2 mt-4 flex items-center">
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow-md hover:scale-110 transition">Explore</p> <span className="px-3"><ArrowRightIcon className="text-pink-500"/></span>
                    </Link>
                </div>
                <Image 
                    src={'/garbage.jpg'}
                    alt="app demo"
                    width={200}
                    height={150}
                    className="object-cover w-full"
                />
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 border-2 border-gray-300 grid md:grid-cols-2 items-center shadow-md rounded-md hover:border-purple-400">
                <div>
                    <SubHeading value={'Waste Disposal & Recycling for Businesses'}/>
                    <Link href={'/office'} className=" p-2 mt-4 flex items-center">
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow-md hover:scale-110 transition">Learn More</p> <span className="px-3"><ArrowRightIcon className="text-pink-500"/></span>
                    </Link>
                </div>
                <Image 
                    src={'/bin.jpeg'}
                    alt="app demo"
                    width={200}
                    height={150}
                    className="object-cover w-full"
                />
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 border-2 border-gray-300 grid md:grid-cols-2 items-center shadow-md rounded-md hover:border-purple-400">
                <div>
                    <SubHeading value={'Industries'}/>
                    <Link href={'/office'} className=" p-2 mt-4 flex items-center">
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow-md hover:scale-110 transition">Explore</p> <span className="px-3"><ArrowRightIcon className="text-pink-500"/></span>
                    </Link>
                </div>
                <Image 
                    src={'/grocery.jpeg'}
                    alt="app demo"
                    width={200}
                    height={150}
                    className="object-cover w-full"
                />
            </motion.div>
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