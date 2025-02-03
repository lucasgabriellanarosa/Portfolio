"use client"
import { BsDownload } from "react-icons/bs";

export default function ResumeBtn() {
    return (
        <a href="./Lucas Gabriel de Lana Rosa - Fullstack Developer.pdf" download="Lucas Gabriel de Lana Rosa - Fullstack Developer.pdf" className="flex justify-center items-center gap-1 px-2 py-1 rounded-lg text-sm font-OpenSans border-2 font-bold border-red-900 bg-red-900 hover:bg-transparent hover:text-red-900 transition-all duration-300">
            <BsDownload />
            Resume
        </a>
    )
}