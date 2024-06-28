import { FC } from "react"

interface FinishStepProps {
  displayName: string
}

export const FinishStep: FC<FinishStepProps> = ({ displayName }) => {
  return (
    <div>
      <h1>
        Welcome to Afcfta.ai
        {displayName ? `, ${displayName.split(" ")[0]}` : ""}!
      </h1>
      <br /> {/* This adds a smaller line separation */}
      <p>
        Click <strong>Next</strong> to start chatting.
      </p>
    </div>
  )
}
