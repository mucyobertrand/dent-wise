import Navbar from '@/components/Navbar'
import ActivityOverview from '@/components/dashboard/ActivityOverview'
import MainActions from '@/components/dashboard/MainActions'
import WelcomeSection from '@/components/dashboard/WelcomeSection'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto px-6 py-8 pt-24'>
        <WelcomeSection/>
        <MainActions/>
        <ActivityOverview/>
      </div>
    </div>
  )
}

export default DashboardPage
