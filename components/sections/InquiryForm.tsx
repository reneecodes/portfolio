'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

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

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };


  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', projectName: '', projectType: '', projectTypeCustom: '', budget: '', timeline: '', vibe: '' };

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
      newErrors.budget = "Let's talk budget, darling!";
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
                newErrors[key as keyof typeof newErrors] = result.errors.get(key)![0];
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
    <section className="w-full max-w-6xl mx-auto py-24 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-lavender-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-sage-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section with Gradient Text */}
      <div className="relative z-10 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-coral-600 via-lavender-600 to-sage-600">
              Let's Create Something
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sage-600 via-coral-600 to-lavender-600">
              Amazing Together!
            </span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-warm-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          Ready to bring your vision to life? I'm here to transform your ideas into 
          <span className="text-coral-600 font-semibold">beautiful, functional designs</span> that 
          <span className="text-lavender-600 font-semibold">captivate your audience</span> and 
          <span className="text-sage-600 font-semibold">drive real results</span>.
        </motion.p>
      </div>

      {submissionSuccess ? (
        <InquiryFormSuccessMessage onReset={resetForm} />
      ) : (
        <>
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
        <div className="relative z-10">
          {/* Progress Indicator */}
          <div className="w-full max-w-lg mx-auto mb-12">
            <div className="flex justify-between items-center mb-2">
              {[...Array(totalSteps)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${currentStep >= i + 1 ? 'bg-coral-600 text-white' : 'bg-gray-200 text-gray-500'}`}
                  >
                    {i + 1}
                  </div>
                  <p className={`mt-2 text-sm font-medium ${currentStep >= i + 1 ? 'text-coral-600' : 'text-gray-500'}`}>
                    {['The Basics', 'Project Details', 'Your Vision'][i]}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-coral-600 h-2 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Step 1: The Basics */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-warm-gray-800 mb-2">First, let's get to know each other!</h2>
                  <p className="text-warm-gray-600">Tell me a bit about yourself and your project.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <FormField
                      label="Your Name"
                      id="name"
                      name="name"
                      placeholder="What's your name, creative soul?"
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
                      placeholder="What should we call this dream project?"
                      value={formData.projectName}
                      onChange={handleChange}
                      error={errors.projectName}
                      required
                    />
                  </motion.div>
                </div>
                
                <div className="flex justify-end mt-8">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-coral-600 text-white rounded-full font-semibold hover:bg-coral-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Next Step →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-warm-gray-800 mb-2">Let's talk details!</h2>
                  <p className="text-warm-gray-600">Help me understand the scope and timeline.</p>
                </div>
                
                <div className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <ToggleGroup
                      label="What type of project is this?"
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <ToggleGroup
                        label="What's your budget range?"
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
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 text-warm-gray-600 hover:text-warm-gray-800 font-semibold transition-colors duration-300"
                  >
                    ← Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-lavender-600 text-white rounded-full font-semibold hover:bg-lavender-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Almost There! →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Your Vision */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-warm-gray-800 mb-2">Share your vision!</h2>
                  <p className="text-warm-gray-600">This is where the magic happens. Tell me everything!</p>
                </div>
                
                <motion.div variants={itemVariants}>
                  <FormField
                    label="Tell me your dream for this project"
                    id="vibe"
                    name="vibe"
                    placeholder="e.g., I envision a website that feels whimsical and modern, with a touch of playful elegance. I want visitors to feel welcomed and inspired to explore..."
                    value={formData.vibe}
                    onChange={handleChange}
                    error={errors.vibe}
                    textarea
                    required
                  />
                </motion.div>
                
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 text-warm-gray-600 hover:text-warm-gray-800 font-semibold transition-colors duration-300"
                  >
                    ← Previous
                  </button>
                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-coral-600 to-lavender-600 text-white rounded-full font-bold text-lg
                                 hover:from-coral-700 hover:to-lavender-700
                                 transition-all duration-300 hover:scale-105 hover:shadow-2xl
                                 focus:outline-none focus:ring-4 focus:ring-lavender-300
                                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                          </svg>
                          Sending Your Dream...
                        </span>
                      ) : (
                        '✨ Send Your Vision to Life!'
                      )}
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </motion.form>
          </AnimatePresence>
        </div>
        </>
      )}
    </section>
  );
};

export default InquiryForm;
