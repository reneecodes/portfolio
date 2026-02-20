import React from 'react';

interface DesignNeedsGridProps {
  selectedNeeds: string[];
  onToggleNeed: (need: string) => void;
}

const designNeeds = [
  { id: 'wireframing', label: 'Wireframing', icon: '📐' },
  { id: 'prototyping', label: 'Prototyping', icon: '✨' },
  { id: 'ui-aesthetics', label: 'UI/Aesthetics', icon: '🎨' },
  { id: 'full-ux', label: 'Full UX', icon: '🧠' },
  { id: 'design-system', label: 'Design System', icon: '📚' },
];

const DesignNeedsGrid: React.FC<DesignNeedsGridProps> = ({ selectedNeeds, onToggleNeed }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {designNeeds.map((need) => (
        <div
          key={need.id}
          onClick={() => onToggleNeed(need.id)}
          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
            selectedNeeds.includes(need.id)
              ? 'border-lavender-500 bg-white/50 backdrop-blur-sm shadow-lavender-500/20'
              : 'border-white/20 bg-white/30 backdrop-blur-sm hover:border-lavender-300'
          }`}
        >
          <div className="text-2xl mb-2">{need.icon}</div>
          <p className="text-sm font-medium text-warm-gray-800">{need.label}</p>
        </div>
      ))}
    </div>
  );
};

export default DesignNeedsGrid;