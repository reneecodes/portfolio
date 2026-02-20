'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FormField from '@/components/ui/FormField';
import ProjectStageCard from '@/components/ui/ProjectStageCard';
import DesignNeedsGrid from '@/components/ui/DesignNeedsGrid';
import { submitHomepageInquiry } from '@/lib/actions-homepage';

const HomepageInquiryForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectStage: '',
    designNeeds: [] as string[],
    playground: '',
    northStar: '',
    vibeCheck: '',
    winCondition: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const totalSteps = 3;

  const projectStages = [
    { stage: 'Idea', icon: '💡', description: 'Just an idea brewing' },
    { stage: 'Sketches', icon: '✏️', description: 'Got some rough sketches' },
    { stage: 'MVP/Redesign', icon: '✨', description: 'Ready to level up' },
  ];

  const playgroundOptions = [
    { value: 'mobile', label: 'Mobile 📱' },
    { value: 'desktop', label: 'Desktop 💻' },
    { value: 'both', label: 'Both 🌈' },
  ];

  const vibeOptions = [
    { value: 'minimal', label: 'Minimal' },
    { value: 'bold', label: 'Bold' },
    { value: 'approachable', label: 'Approachable' },
  ];

  const winOptions = [
    { value: 'sign-ups', label: 'Sign-ups' },
    { value: 'speed', label: 'Speed' },
    { value: 'credibility', label: 'Credibility' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleProjectStageChange = (stage: string) => {
    setFormData((prev) => ({ ...prev, projectStage: stage }));
    if (errors.projectStage) {
      setErrors((prev) => ({ ...prev, projectStage: '' }));
    }
  };

  const handleDesignNeedsToggle = (need: string) => {
    setFormData((prev) => ({
      ...prev,
      designNeeds: prev.designNeeds.includes(need)
        ? prev.designNeeds.filter((n) => n !== need)
        : [...prev.designNeeds, need],
    }));
    if (errors.designNeeds) {
      setErrors((prev) => ({ ...prev, designNeeds: '' }));
    }
  };

  const handlePlaygroundChange = (value: string) => {
    setFormData((prev) => ({ ...prev, playground: value }));
    if (errors.playground) {
      setErrors((prev) => ({ ...prev, playground: '' }));
    }
  };

  const handleVibeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, vibeCheck: value }));
    if (errors.vibeCheck) {
      setErrors((prev) => ({ ...prev, vibeCheck: '' }));
    }
  };

  const handleWinChange = (value: string) => {
    setFormData((prev) => ({ ...prev, winCondition: value }));
    if (errors.winCondition) {
      setErrors((prev) => ({ ...prev, winCondition: '' }));
    }
  };

  const validateStep = (step: number) => {
    const newErrors: { [key: string]: string } = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!formData.projectStage) newErrors.projectStage = 'Please select a project stage';
    }
    if (step === 2) {
      if (formData.designNeeds.length === 0) newErrors.designNeeds = 'Select at least one design need';
      if (!formData.playground) newErrors.playground = 'Please select a platform';
    }
    if (step === 3) {
      if (!formData.northStar.trim()) newErrors.northStar = 'Tell us about your vision';
      if (!formData.vibeCheck) newErrors.vibeCheck = 'Choose a vibe';
      if (!formData.winCondition) newErrors.winCondition = 'How do we measure success?';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(item => form.append(key, item));
      } else {
        form.append(key, value);
      }
    });

    const result = await submitHomepageInquiry(form);

    if (result.success) {
      setSubmissionSuccess(true);
    } else {
      setErrors(result.errors || { submit: result.message });
    }

    setIsSubmitting(false);
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      y: -30, 
      scale: 0.98,
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
    },
  };

  if (submissionSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12 relative"
      >
        {/* Floating sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              initial={{ 
                opacity: 0, 
                scale: 0,
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100
              }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -100, -200],
                rotate: Math.random() * 360
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: i * 0.2,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: Math.random() * 2
              }}
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${30 + Math.random() * 40}%`
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-6xl mb-4 inline-block"
        >
          🎉
        </motion.div>
        <h3 className="text-2xl font-bold text-warm-gray-800 mb-2">Your vision has been sent!</h3>
        <p className="text-warm-gray-600">I'll be in touch within 24 hours to start crafting your dream project.</p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setSubmissionSuccess(false);
            setCurrentStep(1);
            setFormData({
              name: '',
              email: '',
              projectStage: '',
              designNeeds: [],
              playground: '',
              northStar: '',
              vibeCheck: '',
              winCondition: '',
            });
            setErrors({});
          }}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-coral-600 to-lavender-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
        >
          Send Another Vision ✨
        </motion.button>
      </motion.div>
    );
  }

  return (
    <section className="w-full max-w-4xl mx-auto py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-coral-600 via-lavender-600 to-sage-600">
            Let's Create Something
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sage-600 via-coral-600 to-lavender-600">
            Amazing Together!
          </span>
        </h2>
        <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
          Ready to bring your vision to life? I'm here to transform your ideas into beautiful, functional designs.
        </p>
      </motion.div>

      {/* Progress Indicator */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-4">
          {[...Array(totalSteps)].map((_, i) => (
            <div key={i} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  currentStep >= i + 1 ? 'bg-coral-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {i + 1}
              </div>
              {i < totalSteps - 1 && (
                <div className={`w-16 h-1 mx-2 transition-all duration-300 ${currentStep > i + 1 ? 'bg-coral-600' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Identity & Status */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-warm-gray-800 mb-6">Step 1: Your Identity & Project Status</h3>
                  <motion.div variants={fieldVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <FormField
                      label="Your Name"
                      id="name"
                      name="name"
                      placeholder="What's your name?"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      required
                    />
                    <FormField
                      label="Email Address"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                    />
                  </motion.div>
                  <motion.div variants={fieldVariants}>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-4">Where are we on the map?</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {projectStages.map((stage) => (
                        <ProjectStageCard
                          key={stage.stage}
                          stage={stage.stage}
                          icon={stage.icon}
                          description={stage.description}
                          isSelected={formData.projectStage === stage.stage}
                          onClick={() => handleProjectStageChange(stage.stage)}
                        />
                      ))}
                    </div>
                    {errors.projectStage && <p className="text-coral-600 text-sm mt-2">{errors.projectStage}</p>}
                  </motion.div>
                </div>
              </div>
            )}

            {/* Step 2: Scope & Playground */}
            {currentStep === 2 && (
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-xl font-bold text-warm-gray-800 mb-6">Step 2: The Scope & Playground</h3>
                              <motion.div variants={fieldVariants} className="mb-6">
                                <label className="block text-sm font-medium text-warm-gray-700 mb-4">What magic do you need?</label>
                                <DesignNeedsGrid
                                  selectedNeeds={formData.designNeeds}
                                  onToggleNeed={handleDesignNeedsToggle}
                                />
                                {errors.designNeeds && <p className="text-coral-600 text-sm mt-2">{errors.designNeeds}</p>}
                              </motion.div>
                              <motion.div variants={fieldVariants}>
                                <label className="block text-sm font-medium text-warm-gray-700 mb-4">Where will this live?</label>
                                <ToggleGroup
                                  label=""
                                  name="playground"
                                  options={playgroundOptions}
                                  selectedValue={formData.playground}
                                  onChange={handlePlaygroundChange}
                                  error={errors.playground}
                                  required
                                />
                              </motion.div>
                            </div>
                          </div>
                        )}

            {/* Step 3: Vision & Vibe */}
            {currentStep === 3 && (
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-xl font-bold text-warm-gray-800 mb-6">Step 3: The Vision & Vibe</h3>
                              <div className="space-y-6">
                                <motion.div variants={fieldVariants}>
                                  <FormField
                                    label="What's the biggest pain point we're solving?"
                                    id="northStar"
                                    name="northStar"
                                    placeholder="Describe the core challenge..."
                                    value={formData.northStar}
                                    onChange={handleChange}
                                    error={errors.northStar}
                                    required
                                    textarea
                                  />
                                </motion.div>
                                <motion.div variants={fieldVariants}>
                                  <label className="block text-sm font-medium text-warm-gray-700 mb-4">If this project was a person, how would they dress?</label>
                                  <ToggleGroup
                                    label=""
                                    name="vibeCheck"
                                    options={vibeOptions}
                                    selectedValue={formData.vibeCheck}
                                    onChange={handleVibeChange}
                                    error={errors.vibeCheck}
                                    required
                                  />
                                </motion.div>
                                <motion.div variants={fieldVariants}>
                                  <label className="block text-sm font-medium text-warm-gray-700 mb-4">How do we know we've won?</label>
                                  <ToggleGroup
                                    label=""
                                    name="winCondition"
                                    options={winOptions}
                                    selectedValue={formData.winCondition}
                                    onChange={handleWinChange}
                                    error={errors.winCondition}
                                    required
                                  />
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lavender-600 focus:shadow-lg focus:shadow-lavender-500/20 ${
              currentStep === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white/50 text-warm-gray-700 hover:bg-white/70 hover:scale-105'
            }`}
          >
            ← Previous
          </button>
          
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-coral-600 text-white rounded-full font-semibold hover:bg-coral-700 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-lavender-600 focus:shadow-lg focus:shadow-lavender-500/20"
            >
              Next Step →
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-coral-600 to-lavender-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-lavender-600 focus:shadow-lg focus:shadow-lavender-500/20"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send My Vision ✨'
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomepageInquiryForm;