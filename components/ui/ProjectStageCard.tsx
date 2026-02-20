import React from 'react';

interface ProjectStageCardProps {
  stage: string;
  icon: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

const ProjectStageCard: React.FC<ProjectStageCardProps> = ({ stage, icon, description, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
        isSelected
          ? 'border-coral-500 bg-white/50 backdrop-blur-sm shadow-coral-500/20'
          : 'border-white/20 bg-white/30 backdrop-blur-sm hover:border-coral-300'
      }`}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-warm-gray-800 mb-2">{stage}</h3>
      <p className="text-sm text-warm-gray-600">{description}</p>
    </div>
  );
};

export default ProjectStageCard;