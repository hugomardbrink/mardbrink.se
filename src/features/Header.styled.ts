import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 600px;
`

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
`
export const SecondRow = styled.div``

export const NameContainer = styled.span`
  font-size: 48px;
  font-weight: bold;
`

export const LinkTree = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 8px;
`

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    text-decoration: underline;
  }
`

export const HeaderColor = styled.div`
  position: absolute;
  height: 600px;
  width: 100%;
  z-index: -100;

  background-color: ${({ theme }) => theme.colors.selection};
`

export const About = styled.div`
  margin-top: 70px;

  font-size: 28px;
  width: 256px;
`

export const Interest = styled.span`
  font-size: 28px;

  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
`
