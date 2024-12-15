import '../styles/Experiences.scss';
import TabsExperiences from './TabsExperiences';
import SkillsSection from './SkillsSection';

function Experiences() {
  return (
    <section id="experiences" className="experiences">
      <h1>Experiences</h1>
        <SkillsSection/>
        <TabsExperiences />
    </section>
  );
}

export default Experiences;
