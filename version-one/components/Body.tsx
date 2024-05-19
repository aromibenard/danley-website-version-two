'use client'

import { motion } from "framer-motion"
import { Heading, Paragraph } from "./Heading"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Services from "./Services"

export default function Body() {
    return (
      <div className=" mt-16 md:max-w-4xl lg:max-w-5xl mx-auto p-4">
          <motion.div
            className="grid md:grid-cols-2 px-3 mx-1 items-center h-[27rem]"
          >
            <motion.div 
              className="p-2"
            >
              <Heading value ={'Building Zero Waste Communities, One City at a Time'}/>
              <Paragraph 
                value= {'We collect your household & commercial waste reliably through the use of our own trucks, our mobile app, and our network of partner local waste &  haulers. Download the D-Waste Mobile app to get started.'}/>
              
              <motion.div
                whileHover={{ scale: 1.1, position : 'relative' }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={'/households'}
                  className="font-semibold flex items-center text-xl "
                >
                  <p className="flex  items-center">Get Started <span className="mx-2"><ArrowRightIcon/></span></p>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              
            >
              <Image 
                src={'/firstimg.png'}
                width={400}
                height={600}
                alt={'landing image'}
                className="object-cover h-full w-full"
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
          <Services/>
      </div>
    )
}