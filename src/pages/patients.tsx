import {
    mdiChartTimelineVariant,
  } from '@mdi/js'
  import Head from 'next/head'
  import React from 'react'
  import type { ReactElement } from 'react'
  import LayoutAuthenticated from '../layouts/Authenticated'
  import SectionMain from '../components/Section/Main'
  import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
  import { getPageTitle } from '../config'
  
  const PatientsPage = () => {
  
  
    return (
      <>
        <Head>
          <title>{getPageTitle('Patients')}</title>
        </Head>
        <SectionMain>
          <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title="Overview" main>
  
          </SectionTitleLineWithButton>

        </SectionMain>
      </>
    )
  }
  
  PatientsPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
  }
  
  export default PatientsPage
  