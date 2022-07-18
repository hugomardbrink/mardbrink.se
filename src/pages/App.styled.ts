import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};

  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
`
