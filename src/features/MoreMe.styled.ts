import styled from 'styled-components'
import { ReactComponent as DividerSvg } from '../../res/divider.svg'
import { ReactComponent as GithubSvg } from '../../res/github.svg'
import { ReactComponent as EmailSvg } from '../../res/email.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export const Title = styled.span`
  font-family: 'Archivo Black', sans-serif;
  font-size: 120px;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 100px;
`

export const Divider = styled(DividerSvg)`
  margin-top: 30px;
  width: 90%;
`

export const ModuleGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  justify-content: space-between;
  margin-top: 65px;
`

export const Module = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border: 5px ${({ theme }) => theme.colors.primary} solid;
  box-shadow: 9px 9px 0 1px ${({ theme }) => theme.colors.primary};
  height: 275px;
  width: 300px;
  color: ${({ theme }) => theme.colors.primary};

  > span {
    opacity: 0;
    transition: opacity 0.25s;
  }

  > svg {
    margin-top: 0;
    transition: margin 0.25s;
  }

  &:hover {
    > span {
      opacity: 1;
    }

    > svg {
      margin-top: -30px;
    }
  }
`

export const GithubIcon = styled(GithubSvg)`
  height: 70%;
  width: 70%;
`

export const EmailIcon = styled(EmailSvg)`
  height: 70%;
  width: 70%;
`

export const Detail = styled.span`
  position: absolute;
  bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
