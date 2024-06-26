// import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect } from 'react'
import LayoutGuest from '../layouts/Guest'
// import { gradientBgPurplePink } from '../colors'
// import { appTitle } from '../config'
import { useAppDispatch } from '../stores/hooks'
import { setDarkMode } from '../stores/darkModeSlice'
const StyleSelectPage = () => {
  const dispatch = useAppDispatch()

  dispatch(setDarkMode(false))

  const router = useRouter()

  useEffect(()=>{
    router.push('/dashboard')

  },[])

  // const styles = ['white', 'basic']


  return (
    <>
    </>
  )
}

StyleSelectPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default StyleSelectPage
