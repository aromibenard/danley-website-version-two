import React from "react"

interface HeadingProps {
    value: string
}

export const Heading : React.FC<HeadingProps> = ({ value }) => {
    return (
        <h1 className=" mb-2 font-extrabold text-4xl text-balance text-gray-700 tracking-tight">
            {value}
        </h1>
    )

}

export const Paragraph : React.FC<HeadingProps> = ({ value }) => {
    return (
        <p className="text-balance my-3">
            {value}
        </p>
    )

}

export const SubHeading : React.FC<HeadingProps> = ({ value }) => {
    return (
        <h2 className="text-wrap tracking-tight text-xl font-bold text-gray-700 my-3">
            {value}
        </h2>
    )

} 