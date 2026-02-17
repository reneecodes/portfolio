import React, { useState } from 'react';
import FormField from '@/components/ui/FormField';
import ToggleGroup from '@/components/ui/ToggleGroup';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    projectName: '',
    projectType: '',
    projectTypeCustom: '',
    budget: '',
    timeline: '',
    vibe: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    projectName: '',
    projectType: '',
    projectTypeCustom: '',
    budget: '',
    timeline: '',
    vibe: '',
  });

  const projectTypeOptions = [
    { label: 'Web Design', value: 'web-design' },
    { label: 'Mobile App', value: 'mobile-app' },
    { label: 'Branding', value: 'branding' },
    { label: 'Something Else', value: 'something-else' },
  ];

  const budgetOptions = [
    { label: 'Small & Mighty', value: 'small-mighty' },
    { label: 'Growth Mode', value: 'growth-mode' },
    { label: 'The Works', value: 'the-works' },
  ];

  const timelineOptions = [
    { label: 'Immediately', value: 'immediately' },
    { label: 'Within 1-3 Months', value: '1-3-months' },
    { label: '3-6 Months', value: '3-6-months' },
    { label: 'Flexible', value: 'flexible' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear error on change
  };

  const handleProjectTypeChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      projectType: value,
      projectTypeCustom: value !== 'something-else' ? '' : prevData.projectTypeCustom,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, projectType: '' }));
  };

  const handleBudgetChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, budget: value }));
    setErrors((prevErrors) => ({ ...prevErrors, budget: '' }));
  };

  const handleTimelineChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, timeline: value }));
    setErrors((prevErrors) => ({ ...prevErrors, timeline: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', projectName: '', projectType: '', projectTypeCustom: '', budget: '', timeline: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Your name is required, sweetie!';
      isValid = false;
    }

    if (!formData.projectName.trim()) {
      newErrors.projectName = 'Every dream project needs a name!';
      isValid = false;
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
      isValid = false;
    } else if (formData.projectType === 'something-else' && !formData.projectTypeCustom.trim()) {
      newErrors.projectTypeCustom = 'Please tell me what else you have in mind!';
      isValid = false;
    }

    if (!formData.budget) {
      newErrors.budget = 'Let's talk budget, darling!';
      isValid = false;
    }

    if (!formData.timeline) {
                  newErrors.timeline = 'When do we start? This is important!';
                  isValid = false;
                }

                if (!formData.vibe.trim()) {
                  newErrors.vibe = 'Don\'t be shy, tell me your dreams!';
                  isValid = false;
                }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      // Here we will integrate Next.js Server Actions later
      alert('Form submitted successfully! (Check console for data)');
    } else {
      alert('Oops! Please fix the errors in the form.');
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-24">
      <h1 className="text-5xl font-bold tracking-tight text-center mb-16">
        Let's Create Something Amazing Together!
      </h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <FormField
          label="Your Name"
          id="name"
          name="name"
          placeholder="Renee Martinez"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <FormField
          label="Project Name"
          id="projectName"
          name="projectName"
          placeholder="My Dream Portfolio Site"
          value={formData.projectName}
          onChange={handleChange}
          error={errors.projectName}
          required
        />
        <ToggleGroup
          label="Project Type"
          name="projectType"
          options={projectTypeOptions}
          selectedValue={formData.projectType}
          onChange={handleProjectTypeChange}
          error={errors.projectType}
          required
          allowCustom
          customValue={formData.projectTypeCustom}
          onCustomChange={handleChange}
          customPlaceholder="e.g., UX Research, Content Strategy"
        />
        <ToggleGroup
          label="The Budget"
          name="budget"
          options={budgetOptions}
          selectedValue={formData.budget}
          onChange={handleBudgetChange}
          error={errors.budget}
          required
        />
        <ToggleGroup
          label="When do we start?"
          name="timeline"
          options={timelineOptions}
          selectedValue={formData.timeline}
          onChange={handleTimelineChange}
          error={errors.timeline}
                      required
                    />
                    <FormField
                      label="Tell me your dream for this project"
                      id="vibe"
                      name="vibe"
                      placeholder="e.g., I envision a website that feels whimsical and modern, with a touch of playful elegance."
                      value={formData.vibe}
                      onChange={handleChange}
                      error={errors.vibe}
                      textarea
                      required
                    />
                    {/* Other form fields will go here */}
                    <div className="md:col-span-2 lg:col-span-3 flex justify-center mt-8">
          <button
            type="submit"
            className="px-8 py-4 bg-coral-700 text-white rounded-full font-semibold text-lg
                       hover:bg-coral-600 transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-4 focus:ring-lavender-600 focus:ring-opacity-50"
          >
            Send Your Dream Project
          </button>
        </div>
      </form>
    </section>
  );
};

export default InquiryForm;
