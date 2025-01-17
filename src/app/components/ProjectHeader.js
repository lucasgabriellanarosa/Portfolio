"use client"
import ProjectBtns from "./ProjectBtns";

export default function ProjectHeader({title, live, rep}) {
    return (
        <header className="flex flex-col gap-2">
            <h3 className="text-red-900 font-Agbalumo text-3xl">{title}</h3>

            <ProjectBtns live={live} rep={rep}/>

        </header>
    )
}