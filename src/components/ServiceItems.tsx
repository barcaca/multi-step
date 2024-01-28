interface ServiceItemsProps {
  isYear: boolean
  planOns: {
    online: boolean
    storage: boolean
    custom: boolean
  }
  planUser: string
}
export function ServiceItems({ isYear, planUser, planOns }: ServiceItemsProps) {
  return (
    <div className="flex flex-col gap-2 pt-3 text-[#9699ab]">
      {planOns.online && (
        <div className="flex justify-between">
          <p>Online Service</p>
          <span className="text-[#02295a]">
            +${isYear ? '10' : '1'}/{planUser}
          </span>
        </div>
      )}
      {planOns.storage && (
        <div className="flex justify-between">
          <p>Large Storage</p>
          <span className="text-[#02295a]">
            +${isYear ? '20' : '2'}/{planUser}
          </span>
        </div>
      )}
      {planOns.custom && (
        <div className="flex justify-between">
          <p>Custom Profile</p>
          <span className="text-[#02295a]">
            +${isYear ? '20' : '2'}/{planUser}
          </span>
        </div>
      )}
    </div>
  )
}
