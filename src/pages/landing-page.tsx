import ContactSectionContainer from "../components/organisms/contact-section/contact-section"
import FooterSectionContainer from "../components/organisms/footer-section/footer-section"
import HeaderSection from "../components/organisms/header-section/header-section"
import ProjectsSectionContainer from "../components/organisms/projects-section/projects-section"
import ServicesSectionContainer from "../components/organisms/services-section/services-section"

function LandingPage() {
  return (
    <div>
      <HeaderSection />
      <ServicesSectionContainer />
      <ProjectsSectionContainer />
      <ContactSectionContainer/>
      <FooterSectionContainer/>
    </div>
  )
}

export default LandingPage
