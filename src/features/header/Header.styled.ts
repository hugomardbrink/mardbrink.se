import styled, { css } from 'styled-components/macro'
import Background from '../../res/background/OceanBoat.jpg'

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 12px;
`

export const OceanBoat = styled.img.attrs({
  src: Background,
  alt: 'OceanBoat',
})`
  width: 100%;
  height: auto;
  z-index: -1;
  position: absolute;

  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 32px;
`

const hoverCss = css`
  cursor: pointer;
  :hover {
    opacity: 0.85;
  }
  :active {
    opacity: 1;
  }
`

const logoCss = css`
  height: 28px;
  width: 28px;
  margin-right: 16px;
  fill: ${({ theme }) => theme.colors.text};
  ${hoverCss};
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div:not(:last-child) {
    margin-right: 24px;
  }
`

export const NavLink = styled.div`
  ${hoverCss};
  font-size: 32px;
  font-weight: bold;
`

export const SocialsContainer = styled.div`
  margin-top: 4px;
  svg {
    ${logoCss};
  }
`

export const EscapeHatch = styled.div`
  font-size: 48px;
  font-weight: bold;
  cursor: pointer;
`

export const Link = styled.a.attrs({ target: '_blank' })`
  text-decoration: none;
  margin-right: 16px;
`
