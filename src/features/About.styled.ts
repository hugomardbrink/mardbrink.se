import styled from 'styled-components'
import { ReactComponent as DividerSvg } from '../../res/graphics/divider.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
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
  width: 90%;
  justify-content: space-between;
  margin-top: 65px;
`

export const Module = styled.div`
  display: flex;
  flex-direction: column;

  border: 5px ${({ theme }) => theme.colors.primary} solid;
  box-shadow: 9px 9px 0 1px ${({ theme }) => theme.colors.primary};
  height: 275px;
  width: 300px;
  color: ${({ theme }) => theme.colors.primary};
`

export const ModuleTitle = styled.span`
  font-size: 36px;
  font-weight: bold;
  margin-top: 15px;
  margin-left: 10px;
`

export const ModuleText = styled.span`
  margin-left: 10px;
  margin-top: 50px;
  font-size: 30px;
  font-weight: 500;
`
