import HeaderSection from "../components/organisms/header-section/header-section"
import ProjectsSectionContainer from "../components/organisms/projects-section/projects-section"
import ServicesSectionContainer from "../components/organisms/services-section/services-section"

function LandingPage() {
  return (
    <div>
      <HeaderSection />
      <ServicesSectionContainer/>
      <ProjectsSectionContainer />
    </div>
  )
}

export default LandingPage
