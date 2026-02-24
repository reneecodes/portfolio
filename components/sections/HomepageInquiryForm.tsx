'use client';

import React, { useState, useEffect } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';

import { 
  InquiryFormData, 
  Step1Data, 
  Step2Data, 
  Step3Data,
  step1Schema,
  step2Schema,
  step3Schema,
  inquiryFormSchema,
  PROJECT_TYPES,
  WEBSITE_SCOPES,
  PRIMARY_GOALS,
  TIMEFRAMES
} from '@/lib/schemas-inquiry';

import { submitHomepageInquiry } from '@/lib/actions-homepage';

// Step 1 Component
function Step1({ form }: { form: UseFormReturn<InquiryFormData> }) {
  const { register, formState: { errors }, watch } = form;
  const selectedProjectType = watch('projectType');

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-2">
        <label htmlFor="fullName" className="block text-sm font-medium text-white">
          Full Name *
        </label>
        <input
          {...register('fullName')}
          id="fullName"
          type="text"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your full name"
          aria-invalid={errors.fullName ? 'true' : 'false'}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
        />
        {errors.fullName && (
          <p id="fullName-error" className="text-sm text-red-400 mt-2">{errors.fullName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="emailAddress" className="block text-sm font-medium text-white">
          Email Address *
        </label>
        <input
          {...register('emailAddress')}
          id="emailAddress"
          type="email"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="your.email@example.com"
          aria-invalid={errors.emailAddress ? 'true' : 'false'}
          aria-describedby={errors.emailAddress ? 'emailAddress-error' : undefined}
        />
        {errors.emailAddress && (
          <p id="emailAddress-error" className="text-sm text-red-400 mt-2">{errors.emailAddress.message}</p>
        )}
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-white">
          Project Type *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="radiogroup" aria-required="true">
          {PROJECT_TYPES.map((type) => (
            <motion.div key={type} whileTap={{ scale: 0.97 }}>
              <label className="relative cursor-pointer">
                <input
                  {...register('projectType')}
                  type="radio"
                  value={type}
                  className="sr-only"
                  aria-invalid={errors.projectType ? 'true' : 'false'}
                />
                <div className={`
                  flex items-center justify-center p-4 rounded-lg border-2 transition-all duration-200
                  ${selectedProjectType === type 
                    ? 'bg-purple-500/20 border-purple-500 text-white shadow-md' 
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }
                  focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2
                `}>
                  <span className="font-medium text-center">{type}</span>
                </div>
              </label>
            </motion.div>
          ))}
        </div>
        {errors.projectType && (
          <p id="projectType-error" className="text-sm text-red-400 mt-2">{errors.projectType.message}</p>
        )}
      </div>
    </motion.div>
  );
}

// Step 2 Component
function Step2({ form }: { form: UseFormReturn<InquiryFormData> }) {
  const { register, formState: { errors }, watch } = form;
  const projectType = watch('projectType');
  const showWebsiteScope = projectType === 'Website';

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {showWebsiteScope && (
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-sm font-medium text-white">
              Scope *
            </label>
            <div className="space-y-2" role="radiogroup" aria-required="true">
              {WEBSITE_SCOPES.map((scope) => (
                <label key={scope} className="flex items-center cursor-pointer">
                  <input
                    {...register('websiteScope')}
                    type="radio"
                    value={scope}
                    className="mr-3 h-4 w-4 text-purple-600 bg-white/10 border-white/20 focus:ring-purple-500"
                    aria-invalid={errors.websiteScope ? 'true' : 'false'}
                  />
                  <span className="text-white">{scope}</span>
                </label>
              ))}
            </div>
            {errors.websiteScope && (
              <p id="websiteScope-error" className="text-sm text-red-400 mt-2">{errors.websiteScope.message}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-2">
        <label htmlFor="projectDescription" className="block text-sm font-medium text-white">
          Tell me about your project. *
        </label>
        <textarea
          {...register('projectDescription')}
          id="projectDescription"
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          placeholder="Describe your project, the problem we are solving, your target audience, and what you hope to achieve."
          aria-invalid={errors.projectDescription ? 'true' : 'false'}
          aria-describedby={errors.projectDescription ? 'projectDescription-error' : undefined}
        />
        <p className="text-xs text-white/70">Minimum 50 characters</p>
        {errors.projectDescription && (
          <p id="projectDescription-error" className="text-sm text-red-400 mt-2">{errors.projectDescription.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="brandDescription" className="block text-sm font-medium text-white">
          Tell me about yourself/your brand. *
        </label>
        <textarea
          {...register('brandDescription')}
          id="brandDescription"
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          placeholder="What is your dream design? What color pallatte fits you and your brand, and what style do you want(Modern, chic, rustic)?"
          aria-invalid={errors.brandDescription ? 'true' : 'false'}
          aria-describedby={errors.brandDescription ? 'brandDescription-error' : undefined}
        />
        <p className="text-xs text-white/70">Minimum 30 characters</p>
        {errors.brandDescription && (
          <p id="brandDescription-error" className="text-sm text-red-400 mt-2">{errors.brandDescription.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="primaryGoal" className="block text-sm font-medium text-white">
          What is your primary goal? *
        </label>
        <select
          {...register('primaryGoal')}
          id="primaryGoal"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-invalid={errors.primaryGoal ? 'true' : 'false'}
          aria-describedby={errors.primaryGoal ? 'primaryGoal-error' : undefined}
        >
          <option value="" className="bg-gray-800">Select a goal...</option>
          {PRIMARY_GOALS.map((goal) => (
            <option key={goal} value={goal} className="bg-gray-800">{goal}</option>
          ))}
        </select>
        {errors.primaryGoal && (
          <p id="primaryGoal-error" className="text-sm text-red-400 mt-2">{errors.primaryGoal.message}</p>
        )}
      </div>
    </motion.div>
  );
}

// Step 3 Component
function Step3({ form }: { form: UseFormReturn<InquiryFormData> }) {
  const { register, formState: { errors } } = form;

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-2">
        <label htmlFor="timeframe" className="block text-sm font-medium text-white">
          Expected Timeframe *
        </label>
        <select
          {...register('timeframe')}
          id="timeframe"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-invalid={errors.timeframe ? 'true' : 'false'}
          aria-describedby={errors.timeframe ? 'timeframe-error' : undefined}
        >
          <option value="" className="bg-gray-800">Select a timeframe...</option>
          {TIMEFRAMES.map((timeframe) => (
            <option key={timeframe} value={timeframe} className="bg-gray-800">{timeframe}</option>
          ))}
        </select>
        {errors.timeframe && (
          <p id="timeframe-error" className="text-sm text-red-400 mt-2">{errors.timeframe.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="budgetRange" className="block text-sm font-medium text-white">
          Budget Range (Optional)
        </label>
        <input
          {...register('budgetRange')}
          id="budgetRange"
          type="text"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="e.g., $5000-10000"
          aria-invalid={errors.budgetRange ? 'true' : 'false'}
          aria-describedby={errors.budgetRange ? 'budgetRange-error' : undefined}
        />
        {errors.budgetRange && (
          <p id="budgetRange-error" className="text-sm text-red-400 mt-2">{errors.budgetRange.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-white">
          Anything else I should know?
        </label>
        <textarea
          {...register('additionalInfo')}
          id="additionalInfo"
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          placeholder="Links to current site, competitors you admire, specific features you envision, preferred technologies, etc."
          aria-invalid={errors.additionalInfo ? 'true' : 'false'}
          aria-describedby={errors.additionalInfo ? 'additionalInfo-error' : undefined}
        />
        {errors.additionalInfo && (
          <p id="additionalInfo-error" className="text-sm text-red-400 mt-2">{errors.additionalInfo.message}</p>
        )}
      </div>
    </motion.div>
  );
}

// Main Form Component
export default function HomepageInquiryForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquiryFormSchema),
    mode: 'onBlur',
    defaultValues: {
      websiteScope: undefined,
      budgetRange: '',
      additionalInfo: ''
    }
  });

  const { trigger, getValues, watch } = form;
  const projectType = watch('projectType');

  const validateStep = async (step: number) => {
    let fieldsToValidate: string[] = [];
    
    switch (step) {
      case 1:
        fieldsToValidate = ['fullName', 'emailAddress', 'projectType'];
        break;
      case 2:
        fieldsToValidate = ['projectDescription', 'brandDescription', 'primaryGoal'];
        if (projectType === 'Website') {
          fieldsToValidate.push('websiteScope');
        }
        break;
      case 3:
        fieldsToValidate = ['timeframe'];
        break;
    }

    const result = await trigger(fieldsToValidate as any);
    return result;
  };

  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    setErrors({});

    try {
      const result = await submitHomepageInquiry(data);
      
      if (result.success) {
        setSubmissionSuccess(true);
      } else {
        if (result.errors) {
          const errorObject: { [key: string]: string } = {};
          for (const [key, value] of Object.entries(result.errors)) {
            if (Array.isArray(value)) {
              errorObject[key] = value.join(', ');
            }
          }
          setErrors(errorObject);
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await validateStep(3);
    if (isValid) {
      const data = getValues();
      await onSubmit(data);
    }
  };

  const sparkleValues = React.useMemo(() => 
    Array.from({ length: 12 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2
    })),
  []);

  if (submissionSuccess) {
    return (
      <div className="max-w-2xl mx-auto relative rounded-lg isolate">
        <div className="absolute -z-10 inset-0 rounded-[inherit] [--angle:0deg] [animation:rotate_4s_linear_infinite] bg-[conic-gradient(from_var(--angle),#ff5722,#e91e63,#9c27b0,#ff5722)] blur-[15px]"></div>
        <div className="h-full w-full bg-warmgray-900/70 backdrop-blur-xl rounded-[inherit] p-8 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-block bg-purple-500/20 text-purple-300 rounded-full p-3 mb-4">
              <Check size={40} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Thank You!</h2>
            <p className="text-white/80 mb-6">Your inquiry has been submitted successfully. I'll be in touch within 24-48 hours.</p>
            <button
              onClick={() => setSubmissionSuccess(false)} // This should ideally reset the entire form state
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-warmgray-900"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto relative rounded-lg isolate">
      <div className="absolute -z-10 inset-0 rounded-[inherit] [--angle:0deg] [animation:rotate_4s_linear_infinite] bg-[conic-gradient(from_var(--angle),#ff5722,#e91e63,#9c27b0,#ff5722)] blur-[15px]"></div>
      <div className="h-full w-full bg-warmgray-900/70 backdrop-blur-xl rounded-[inherit] p-6 border-t border-white/10">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-white">Step {currentStep} of 3</span>
            <span className="text-sm text-white/70">{Math.round((currentStep / 3) * 100)}% Complete</span>
          </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <motion.div 
            className="bg-purple-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-8">
        <AnimatePresence mode="wait">
          {currentStep === 1 && <Step1 key="step1" form={form} />}
          {currentStep === 2 && <Step2 key="step2" form={form} />}
          {currentStep === 3 && <Step3 key="step3" form={form} />}
        </AnimatePresence>

        {errors.submit && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
            <p className="text-red-300">{errors.submit}</p>
          </div>
        )}

        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`
              px-6 py-3 rounded-lg font-medium transition-all duration-200
              ${currentStep === 1 
                ? 'bg-white/5 text-gray-400 cursor-not-allowed' 
                : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
              }
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-warmgray-900
            `}
          >
            Back
          </button>

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-warmgray-900"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                px-6 py-3 rounded-lg font-medium transition-all duration-200
                ${isSubmitting 
                  ? 'bg-gray-400 text-white cursor-not-allowed' 
                  : 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-md'
                }
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-warmgray-900
              `}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Project Inquiry'}
            </button>
          )}
        </div>
      </form>
      </div>
    </div>
  );
}