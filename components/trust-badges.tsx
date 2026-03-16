import {
  IconRefresh,
  IconTruck,
  IconCircleCheck,
  IconAward
} from "@tabler/icons-react"

export default function TrustBadges() {

  const badges = [
    {
      icon: IconRefresh,
      label: "7 Day Return"
    },
    {
      icon: IconTruck,
      label: "Cash on Delivery"
    },
    {
      icon: IconCircleCheck,
      label: "100% Genuine"
    },
    {
      icon: IconAward,
      label: "Assured Quality"
    }
  ]

  return (
    <div className="grid grid-cols-4 gap-4 text-center">

      {badges.map((badge, i) => {
        const Icon = badge.icon

        return (
          <div key={i} className="flex flex-col items-center gap-2">

            <div className="bg-gray-100 rounded-full p-3 text-[#1E2A44]">
              <Icon size={20} stroke={1.8} />
            </div>

            <span className="text-[11px] text-gray-600 leading-tight">
              {badge.label}
            </span>

          </div>
        )
      })}

    </div>
  )
}