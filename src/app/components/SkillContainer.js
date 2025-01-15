"use client"

export default function ResumeBtn({url}) {
    return (
        <li className="flex justify-center items-center">
            <img className="w-14" src={url} />
        </li>
    )
}