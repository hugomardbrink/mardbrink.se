import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 750px;
  margin-left: 50px;
  margin-right: 50px;
`

export const Title = styled.span`
  position: relative;

  font-family: 'Archivo Black', sans-serif;
  font-size: 120px;
  margin-top: 100px;
`

export const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`

export const Module = styled.div`
  display: flex;
  flex-direction: column;

  height: 300px;
  width: 500px;

  border: 5px ${({ theme }) => theme.colors.secondary} solid;
  box-shadow: 9px 9px 0 1px ${({ theme }) => theme.colors.secondary};
`

export const ModuleTitle = styled.span`
  margin-top: 30px;
  margin-left: 35px;

  font-size: 36px;
  font-weight: 500;
`

export const ModuleText = styled.span`
  margin-top: 40px;
  margin-left: 35px;
  margin-right: 35px;

  font-size: 22px;
  font-weight: 500;
`

export const ModuleButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`

export const ModulePrimaryButton = styled.button`
  width: 200px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  border: none;
  cursor: pointer;

  transition: box-shadow 0.25s, margin 0.25s;

  box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.accent};
  margin-top: 0px;
  margin-left: 35px;

  &:hover {
    margin-top: -9px;
    margin-left: 26px;
    box-shadow: 9px 9px 0 1px ${({ theme }) => theme.colors.accent};
  }
`

export const ModuleSecondaryButton = styled.button`
  width: 200px;
  height: 60px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  font-weight: 600;
  margin-right: 35px;
  border: 5px ${({ theme }) => theme.colors.secondary} solid;
  cursor: pointer;

  transition: box-shadow 0.25s, margin 0.25s;

  box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.secondary};
  margin-top: 0px;
  margin-right: 35px;

  &:hover {
    margin-top: -9px;
    margin-right: 44px;
    box-shadow: 9px 9px 0 1px ${({ theme }) => theme.colors.secondary};
  }
`

export const ModmarkWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 40px;
  height: 250px;
  width: 350px;
  border: 5px ${({ theme }) => theme.colors.secondary} solid;
  box-shadow: 9px 9px 0 1px ${({ theme }) => theme.colors.secondary};
`

export const ModmarkIconBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -45px;
  right: -35px;
  height: 75px;
  width: 80px;
  border: 5px ${({ theme }) => theme.colors.secondary} solid;
  box-shadow: 9px 9px 0 1px ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
`

export const ModmarkIcon = styled.img`
  height: 55px;
  width: 55px;
`

export const ModmarkText = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 24px;
  font-weight: 500;
  margin-left: 5px;
`
