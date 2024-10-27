import React from 'react'

import SidebarContent from './SidebarContent'

function DesktopSidebar(props) {
  return (
    <aside className="d-none d-lg-block  border-end" style={{ width: "16rem", overflowY: "auto", zIndex: 30 ,backgroundColor:"var(--dash-nav)"}}>
    <SidebarContent />
  </aside>
  
  )
}

export default DesktopSidebar
