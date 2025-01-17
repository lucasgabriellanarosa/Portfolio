"use client"

export default function SkillsContainer({url}) {
    
    return (
        <li className="flex justify-center items-center">
            <img className="w-12" src={url} />
        </li>
    )
}