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

  const isAndroid = useCallback(() => getCurrentUserAgent() === 'Android', [])

  const isIOS = useCallback(() => getCurrentUserAgent() === 'IOS', [])

  const isChrome = useCallback(() => getCurrentUserAgent() === 'Chrome', [])

  const isSafari = useCallback(() => getCurrentUserAgent() === 'Safari', [])

  const isFirefox = useCallback(() => getCurrentUserAgent() === 'Firefox', [])

  const isOpera = useCallback(() => getCurrentUserAgent() === 'Opera', [])

  const isIE = useCallback(() => getCurrentUserAgent() === 'IE', [])

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
