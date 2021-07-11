import { fireEvent } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import { deviceWidthBreakpoint } from './breakpoint'
import useClientInfo from './useClientInfo'

const { mobile, desktop } = deviceWidthBreakpoint

const customGlobal = global as any

it('returns only `isMobile` to be `true`', () => {
  customGlobal.innerWidth = mobile.min
  const { result } = renderHook(() => useClientInfo())
  const { isMobile, isDesktop } = result.current

  expect(isMobile).toBe(true)
  expect(isDesktop).toBe(false)
})

it('returns only `isDesktop` to be `true`', () => {
  customGlobal.innerWidth = desktop.min
  const { result } = renderHook(() => useClientInfo())

  const { isMobile, isDesktop } = result.current

  expect(isMobile).toBe(false)
  expect(isDesktop).toBe(true)
})

it('updates innerWidth values when window resizes', () => {
  customGlobal.innerWidth = desktop.min
  const { result } = renderHook(() => useClientInfo())

  expect(result.current.isMobile).toBe(false)
  expect(result.current.isDesktop).toBe(true)

  act(() => {
    customGlobal.innerWidth = mobile.min

    fireEvent(customGlobal, new Event('resize'))
  })

  expect(result.current.isMobile).toBe(true)
  expect(result.current.isDesktop).toBe(false)
})
