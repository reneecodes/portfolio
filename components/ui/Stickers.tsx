import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const Sparkle = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export const Squiggle = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 100 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="8"
    strokeLinecap="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M5 10C15 0 25 20 35 10C45 0 55 20 65 10C75 0 85 20 95 10" />
  </svg>
);

export const Blob = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 200 200"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.4,35.2C60.6,47.5,50.3,58.5,38,66.5C25.7,74.5,11.4,79.5,-2.2,83.3C-15.8,87.1,-28.7,89.7,-40.3,85.1C-51.9,80.5,-62.2,68.7,-71.3,56C-80.4,43.3,-88.3,29.7,-88.1,16.2C-87.9,2.7,-79.6,-10.7,-70.8,-23.3C-62,-35.9,-52.7,-47.7,-41.3,-56.3C-29.9,-64.9,-16.4,-70.3,-1.7,-67.4C13,-64.5,26,-53.3,30.5,-83.6L44.7,-76.4Z" transform="translate(100 100)" />
  </svg>
);

export const Donut = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
  </svg>
);

export const Cross = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M6 6L18 18M6 18L18 6" />
  </svg>
);

export const Triangle = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M12 4L20 20H4L12 4Z" />
  </svg>
);

export const Arch = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12" />
  </svg>
);

export const StarBurst = ({ className, ...props }: IconProps) => (
  <svg
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     xmlns="http://www.w3.org/2000/svg"
     className={className}
     {...props}
  >
      <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"/>
  </svg>
);
