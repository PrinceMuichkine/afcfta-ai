"use client"

import { FC } from "react"
import Image from "next/image" // Import the Image component from next/image

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <div className="flex cursor-pointer flex-col items-center">
      <a href="https://au-afcfta.org" className="mb-2">
        {" "}
        {/* Add anchor tag around the Image */}
        <Image
          src="/DARK_BRAND_LOGO.png" // Path to your logo in the public folder
          alt="Brand Logo"
          width={110} // Set the width of the image
          height={110} // Set the height of the image
        />
      </a>

      <a href="https://au-afcfta.org">
        {" "}
        {/* Add anchor tag around the text */}
        <h1 className="text-4xl font-semibold tracking-wide">AfCFTA.ai</h1>
      </a>
      <div className="flex flex-col items-center py-2">
        <h4 className="text-sm">
          The AI-Powered Chatbot of the AfCFTA Secretariat.
        </h4>
      </div>
    </div>
  )
}
