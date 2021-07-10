import { useEffect, useState, useMemo, useCallback } from 'react'

import { deviceWidthBreakpoint } from './breakpoint'

const { mobile, tablet, smallLaptop, desktop, largeScreen } =
  deviceWidthBreakpoint

export default function useClient() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const setClientInfo = useCallback(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', setClientInfo, false)

    return () => window.removeEventListener('resize', setClientInfo, false)
  }, [setClientInfo])

  const isMobile = useCallback(() => screenWidth <= mobile.max, [screenWidth])

  const isTablet = useCallback(
    () => screenWidth >= tablet.min && screenWidth <= tablet.max,
    [screenWidth]
  )

  const isSmallLaptop = useCallback(
    () => screenWidth >= smallLaptop.min && screenWidth <= smallLaptop.max,
    [screenWidth]
  )

  const isDesktop = useCallback(
    () => screenWidth >= desktop.min && screenWidth <= desktop.max,
    [screenWidth]
  )

  const isLargeScreen = useCallback(
    () => screenWidth >= largeScreen.min,
    [screenWidth]
  )

  return useMemo(
    () => ({
      isMobile,
      isTablet,
      isSmallLaptop,
      isDesktop,
      isLargeScreen,
    }),
    [isMobile, isTablet, isSmallLaptop, isDesktop, isLargeScreen]
  )
}
