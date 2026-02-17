import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FormField from '@/components/ui/FormField';
import ToggleGroup from '@/components/ui/ToggleGroup';
import { submitInquiry } from '@/lib/actions';
import InquiryFormSuccessMessage from './InquiryFormSuccessMessage';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

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

  const resetForm = () => {
    setFormData({
      name: '',
      projectName: '',
      projectType: '',
      projectTypeCustom: '',
      budget: '',
      timeline: '',
      vibe: '',
    });
    setErrors({
      name: '',
      projectName: '',
      projectType: '',
      projectTypeCustom: '',
      budget: '',
      timeline: '',
      vibe: '',
    });
    setSubmissionSuccess(false);
    setSubmissionError(null);
    setIsSubmitting(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionSuccess(false);
    setSubmissionError(null);
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formDataToSend.append(key, value);
        });

        const result = await submitInquiry(formDataToSend);

        if (result.success) {
          setSubmissionSuccess(true);
          // No need to reset form data here, it will be handled by resetForm if user clicks "Send Another Dream"
        } else {
          if (result.errors) {
            // Map server-side validation errors to client-side errors
            const newErrors: typeof errors = { ...errors };
            for (const key in result.errors) {
              if (key in newErrors) {
                newErrors[key as keyof typeof newErrors] = result.errors[key]![0];
              }
            }
            setErrors(newErrors);
          }
          setSubmissionError(result.message || 'An unexpected error occurred.');
        }
      } catch (error) {
        console.error('Submission error:', error);
        setSubmissionError('Oops! Something went wrong on our end. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-24">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-16">
        Let's Create Something Amazing Together!
      </h1>
      {submissionSuccess ? (
        <InquiryFormSuccessMessage onReset={resetForm} />
      ) : (
        <>
          {submissionError && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-coral-100 text-coral-800 rounded-lg text-center font-medium"
            >
              {submissionError}
            </motion.div>
          )}
          <motion.form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
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
            </motion.div>
            <motion.div variants={itemVariants}>
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
            </motion.div>
            <motion.div variants={itemVariants}>
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
            </motion.div>
            <motion.div variants={itemVariants}>
              <ToggleGroup
                label="The Budget"
                name="budget"
                options={budgetOptions}
                selectedValue={formData.budget}
                onChange={handleBudgetChange}
                error={errors.budget}
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ToggleGroup
                label="When do we start?"
                name="timeline"
                options={timelineOptions}
                selectedValue={formData.timeline}
                onChange={handleTimelineChange}
                error={errors.timeline}
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
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
            </motion.div>
            {/* Other form fields will go here */}
            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-3 flex justify-center mt-8">
              <button
                type="submit"
                className="px-8 py-4 bg-coral-700 text-white rounded-full font-semibold text-lg
                           hover:bg-coral-600 hover:shadow-xl hover:shadow-coral-500/50 hover:scale-105
                           transition-all duration-300 ease-in-out
                           focus:outline-none focus:ring-4 focus:ring-lavender-600 focus:ring-opacity-50
                           disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Your Dream Project...' : 'Send Your Dream Project'}
              </button>
            </motion.div>
          </motion.form>
        </>
      )}
    </section>
  );
};

export default InquiryForm;
