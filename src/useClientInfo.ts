import { useEffect, useState, useMemo, useCallback } from 'react'

import { deviceWidthBreakpoint } from './breakpoint'
import { getCurrentUserAgent } from './utils'

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

  const isMobile = useMemo(() => screenWidth <= mobile.max, [screenWidth])

  const isTablet = useMemo(
    () => screenWidth >= tablet.min && screenWidth <= tablet.max,
    [screenWidth]
  )

  const isSmallLaptop = useMemo(
    () => screenWidth >= smallLaptop.min && screenWidth <= smallLaptop.max,
    [screenWidth]
  )

  const isDesktop = useMemo(
    () => screenWidth >= desktop.min && screenWidth <= desktop.max,
    [screenWidth]
  )

  const isLargeScreen = useMemo(
    () => screenWidth >= largeScreen.min,
    [screenWidth]
  )

  const isAndroid = useMemo(() => getCurrentUserAgent() === 'Android', [])

  const isIOS = useMemo(() => getCurrentUserAgent() === 'IOS', [])

  const isChrome = useMemo(() => getCurrentUserAgent() === 'Chrome', [])

  const isSafari = useMemo(() => getCurrentUserAgent() === 'Safari', [])

  const isFirefox = useMemo(() => getCurrentUserAgent() === 'Firefox', [])

  const isOpera = useMemo(() => getCurrentUserAgent() === 'Opera', [])

  const isIE = useMemo(() => getCurrentUserAgent() === 'IE', [])

  return useMemo(
    () => ({
      isMobile,
      isTablet,
      isSmallLaptop,
      isDesktop,
      isLargeScreen,
      isAndroid,
      isIOS,
      isChrome,
      isSafari,
      isFirefox,
      isOpera,
      isIE,
    }),
    [
      isMobile,
      isTablet,
      isSmallLaptop,
      isDesktop,
      isLargeScreen,
      isAndroid,
      isIOS,
      isChrome,
      isSafari,
      isFirefox,
      isOpera,
      isIE,
    ]
  )
}
