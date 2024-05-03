
import Head from 'next/head'
import React, { ReactElement } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import { getPageTitle } from '../config'

const TablesPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Tables')}</title>
      </Head>
    </>
  )
}

TablesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TablesPage
