import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  margin-top: 100px;
  margin-left: 50px;
  line-height: 0.9;
`

export const NameContainer = styled.span`
  position: relative;

  font-family: 'Archivo Black', sans-serif;
  font-size: 120px;
`

export const About = styled.span`
  position: relative;
  margin-top: 90px;
  line-height: 1.2;

  font-size: 40px;
  font-weight: 600;
`

export const ButtonGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 90px;
  width: 500px;
  justify-content: space-between;
`

export const PrimaryButton = styled.button`
  height: 70px;
  width: 240px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondary};

  transition: box-shadow 0.25s, margin 0.25s;

  box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.secondary};
  margin-top: 0px;
  margin-right: 0px;

  &:hover {
    margin-top: -9px;
    margin-left: -9px;
    box-shadow: 9px 9px 0 1px ${({ theme }) => theme.colors.secondary};
  }

  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`

export const SecondaryButton = styled.button`
  height: 70px;
  width: 200px;
  border: 4px ${({ theme }) => theme.colors.secondary} solid;
  cursor: pointer;
  background-color: transparent;

  transition: box-shadow 0.25s, margin 0.25s;

  box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.secondary};
  margin-top: 0px;
  margin-right: 0px;

  &:hover {
    margin-top: -9px;
    margin-right: 9px;
    box-shadow: 9px 9px 0 1px ${({ theme }) => theme.colors.secondary};
  }

  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`
