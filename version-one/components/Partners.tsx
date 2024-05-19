import Image from "next/image"

export default function Partners() {
    return(
        <div className="px-3 grid md:grid-cols-4 bg-slate-400 gap-3 items-center my-10">
            <Image 
                src={'/technogen.png'}
                height={200}
                width={150}
                alt="technogen"
            />
            <Image 
                src={'/amaco.png'}
                height={200}
                width={150}
                alt="amaco"
            />
            <Image 
                src={'/kengen.png'}
                height={200}
                width={150}
                alt="kengen"
            />
            <Image 
                src={'/tononoka.jpg'}
                height={200}
                width={150}
                alt="tononoka"
            />
        </div>
    )
}