import React from 'react'
import _tw from 'twin.macro'
import DashboardSideBar from '@components/Layout/SideBar/DashboardSideBar'
import GeneralInformation from '@views/dashboard/products/create/GeneralInformation'
import { IsAuthenticated } from '@components/Auth'

const DashboardProductsCreate = () => {
  return (
    <>
      <IsAuthenticated>
        <DashboardSideBar>
          <GeneralInformation />
        </DashboardSideBar>
      </IsAuthenticated>
    </>
  )
}

export default DashboardProductsCreate
