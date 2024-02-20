import { ModmarkWrapper, ModmarkText, ModmarkIconBox, ModmarkIcon, Module, ModulePrimaryButton, ModuleButtonGroup, ModuleSecondaryButton, ModuleTitle, ModuleText, ProjectRow, Title, Wrapper } from './Projects.styled'
import ModmarkLogo from '../../res/modmark.png'

export const Projects = () => {
  return (
    <Wrapper>
      <Title>PROJECTS</Title>
      <ProjectRow>
        <Module>
          <ModuleTitle>MODMARK</ModuleTitle>
          <ModuleText>A modular markup language built in Rust. The language utilises WebAssembly programs for easy package development.</ModuleText>
          <ModuleButtonGroup>
            <ModulePrimaryButton>VISIT PAGE</ModulePrimaryButton>
            <ModuleSecondaryButton>CODE</ModuleSecondaryButton>
          </ModuleButtonGroup>
        </Module>
        <ModmarkWrapper>
          <ModmarkIconBox>
            <ModmarkIcon src={ModmarkLogo} />
          </ModmarkIconBox>

          <ModmarkText>[config]<br/>import catalog:prettify<br/><br/># [prettify](Header)<br/>[link](modmark.org)</ModmarkText>
        </ModmarkWrapper>
      </ProjectRow>
    </Wrapper>
  )
}