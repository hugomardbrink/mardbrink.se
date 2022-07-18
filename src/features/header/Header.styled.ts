import styled, { css } from 'styled-components/macro'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  padding-top: 16px;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
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

export const SocialsContainer = styled.div`
  margin-top: -4px;
  svg {
    ${logoCss};
  }
`

export const EscapeHatch = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-left: 16px;
  ${hoverCss};
`

export const Link = styled.a.attrs({ target: '_blank' })`
  text-decoration: none;
`
