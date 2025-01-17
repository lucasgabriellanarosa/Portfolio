"use client"

export default function SkillsContainer({url, w}) {
    
    const skillClass = "w-" + w

    return (
        <li className="flex justify-center items-center">
            <img className={skillClass} src={url} />
        </li>
    )
}