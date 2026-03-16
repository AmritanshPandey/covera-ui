import {
  IconTruck,
  IconRefresh,
  IconShirt
} from "@tabler/icons-react"

export default function InfoIcons() {

  return (
    <div className="flex justify-between text-sm text-gray-700 pt-4">

      <div className="flex items-center gap-2">
        <IconShirt size={18}/>
        Materials
      </div>

      <div className="flex items-center gap-2">
        <IconTruck size={18}/>
        Shipping
      </div>

      <div className="flex items-center gap-2">
        <IconRefresh size={18}/>
        Care Guide
      </div>

    </div>
  )
}