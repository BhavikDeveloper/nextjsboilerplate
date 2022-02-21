import dynamic from "next/dynamic"
import React from "react"

const HeaderComponent = dynamic(() => import("../components/HeaderComponent"))

const Landing = () => {
  // Hooks
  return (
    <div>
      <HeaderComponent
        isNotificationAvl={false}
        pathName={"/"}
        isUserIconAvl
        isHeaderSearchAvail
      />
    </div>
  )
}

export default Landing
