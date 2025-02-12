"use client"

import Image from "next/image"


export default function ProjectImage({src, alt}) {
    return (
    <Image
        src={src}
        width={0}
        height={0}
        alt={alt}
        sizes="40vw"
        style={{ width: '100%', height: 'auto' }}
      />
    )
}