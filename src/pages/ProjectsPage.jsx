import { Routes, Route, useNavigate } from 'react-router-dom';
import { ProjectsGrid } from '../SuperpositionComponents';
import { CaseStudyModal } from '../components/sections';
import { PageWrapper } from '../components/shared';

const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
  <PageWrapper>
    <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">CASE STUDIES</span>
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Blue Panda has delivered 11+ projects spanning infrastructure, security, AI, automation, and custom development.
        </p>
        <ProjectsGrid onProjectClick={(project) => navigate(`/case-studies/${slugify(project.title)}`)} />
      </div>
    </div>
    <Routes>
      <Route path=":slug" element={<CaseStudyModal />} />
    </Routes>
  </PageWrapper>

  );
};

export default ProjectsPage;
