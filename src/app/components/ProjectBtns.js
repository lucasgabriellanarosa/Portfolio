"use client"

import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function ResumeBtn({live, rep}) {
    return (
    <div className="flex items-center gap-3">

        <a href={live} target="_blank" className="bg-emerald-600 p-2 rounded-lg text-xs font-OpenSans flex justify-center items-center gap-1">
          <FaEye className="text-sm" />
          Live Project
        </a>

        <a href={rep} target="_blank" className="bg-emerald-600 p-2 rounded-lg text-xs font-OpenSans flex justify-center items-center gap-1">
          <FaGithub className="text-sm" />
          Repository
        </a>
        
      </div>
    )
}