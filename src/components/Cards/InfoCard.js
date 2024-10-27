import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'

function InfoCard({ title, value, children: icon }) {
  return (
    <Card style={{backgroundColor:"var(--dash-nav) !important"}}>
      <CardBody className="d-flex items-center">
        {icon}
        <div>
          <p className="mb-2 text-sm font-medium " style={{color:"var(--li-color)"}}>{title}</p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200" style={{color:"var(--li-color)"}}>{value}</p>
        </div>
      </CardBody>
    </Card>
  )
}

export default InfoCard
