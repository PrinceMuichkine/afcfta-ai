import { FC } from "react"

interface FinishStepProps {
  displayName: string
}

export const FinishStep: FC<FinishStepProps> = ({ displayName }) => {
  return (
    <div className="space-y-3 text-center">
      <div className="text-2xl font-bold text-gray-800">
        Welcome to Afcfta.ai
        {displayName.length > 0 ? `, ${displayName.split(" ")[0]}` : null}!
      </div>

      <div className="text-lg text-gray-600">
        Click <span className="text-black-600 font-semibold">Next</span> to
        start chatting.
      </div>
    </div>
  )
}
