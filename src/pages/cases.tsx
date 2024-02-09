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
  
  const CasesPage = () => {
  
  
    return (
      <>
        <Head>
          <title>{getPageTitle('Cases')}</title>
        </Head>
        <SectionMain>
          <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title="Overview" main>
  
          </SectionTitleLineWithButton>

        </SectionMain>
      </>
    )
  }
  
  CasesPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
  }
  
  export default CasesPage
  