import styled, { css } from 'styled-components/macro'

export const Wrapper = styled.div`
  height: auto;
  margin: 32px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
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
  font-weight: 600;
`

export const SocialsContainer = styled.div`
  margin-top: 4px;
  svg {
    ${logoCss};
  }
`

export const EscapeHatch = styled.div`
  font-size: 48px;
  font-weight: 600;
  cursor: pointer;
`

export const Link = styled.a.attrs({ target: '_blank' })`
  text-decoration: none;
  margin-right: 16px;
`
