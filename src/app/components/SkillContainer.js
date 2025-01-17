"use client"

export default function SkillsContainer({url, w}) {
    
    return (
        <li className="flex justify-center items-center">
            <img className={"w-" + w} src={url} />
        </li>
    )
}