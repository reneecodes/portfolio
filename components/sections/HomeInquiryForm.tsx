'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Assuming we reuse FormField from ui, or I'll define a simple one if needed
// For now, placeholder for structure

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stepVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: 'easeIn' } },
};

export default function HomeInquiryForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectStage: '',
    designNeeds: [],
    playground: '',
    northStar: '',
    vibeCheck: '',
    win: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation and submission logic to come
    setSubmissionSuccess(true); // Placeholder
  };

  return (
    <section className="py-16 bg-cream-50"> {/* Breathable section */}
      <div className="max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {!submissionSuccess ? (
            <motion.form
              key={currentStep}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
              className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-soft border border-white/20" // Glassmorphism
            >
              <AnimatePresence>
                {currentStep === 1 && (
                  <motion.div variants={stepVariants} initial="initial" animate="animate" exit="exit">
                  <h2 className="text-3xl font-bold text-coral-600 mb-6">Step 1: The Identity & Status</h2>
                  <motion.div variants={itemVariants} className="space-y-6">
                    <FormField
                      label="Your Name"
                      id="name"
                      name="name"
                      placeholder="What's your name?"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      required
                      className="focus:ring-2 focus:ring-coral-400 focus:ring-offset-2 focus:ring-opacity-50"
                    />
                    <FormField
                      label="Your Email"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                      className="focus:ring-2 focus:ring-coral-400 focus:ring-offset-2 focus:ring-opacity-50"
                    />
                    <div>
                      <label className="block text-warm-gray-700 font-medium mb-2">Where are we on the map?</label>
                      <div className="grid grid-cols-3 gap-4">
                        {['Idea 💡', 'Sketches ✏️', 'MVP/Redesign ✨'].map((stage) => (
                          <motion.div
                            key={stage}
                            variants={itemVariants}
                            onClick={() => setFormData((prev) => ({ ...prev, projectStage: stage }))}
                            className={`p-4 rounded-lg cursor-pointer transition-all ${
                              formData.projectStage === stage
                                ? 'bg-coral-100 border-2 border-coral-400 shadow-glow'
                                : 'bg-white border border-warm-gray-200 hover:shadow-soft'
                            }`}
                          >
                            <p className="text-center font-medium">{stage}</p>
                          </motion.div>
                        ))}
                      </div>
                      {errors.projectStage && <p className="text-rose-500 text-sm mt-1">{errors.projectStage}</p>}
                    </div>
                  </motion.div>
                    <div className="flex justify-between mt-8">
                      <button type="button" onClick={prevStep} disabled={currentStep === 1} className="px-6 py-2 bg-warm-gray-300 text-white rounded-full">Previous</button>
                      <button type="button" onClick={nextStep} className="px-6 py-2 bg-coral-600 text-white rounded-full">Next</button>
                    </div>
                  </motion.div>
                )}
                {currentStep === 2 && (
                  <motion.div variants={stepVariants} initial="initial" animate="animate" exit="exit">
                  <h2 className="text-3xl font-bold text-lavender-600 mb-6">Step 2: The Scope & Playground</h2>
                  <motion.div variants={itemVariants} className="space-y-6">
                    <div>
                      <label className="block text-warm-gray-700 font-medium mb-2">What magic do you need? (Select all that apply)</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {['Wireframing', 'Prototyping', 'UI/Aesthetics', 'Full UX', 'Design System'].map((need) => (
                          <motion.div
                            key={need}
                            variants={itemVariants}
                            onClick={() => {
                              setFormData((prev) => {
                                const newNeeds = prev.designNeeds.includes(need)
                                  ? prev.designNeeds.filter((n) => n !== need)
                                  : [...prev.designNeeds, need];
                                return { ...prev, designNeeds: newNeeds };
                              });
                            }}
                            className={`p-4 rounded-lg cursor-pointer transition-all ${
                              formData.designNeeds.includes(need)
                                ? 'bg-lavender-100 border-2 border-lavender-400 shadow-glow'
                                : 'bg-white border border-warm-gray-200 hover:shadow-soft hover:border-lavender-300'
                            }`}
                          >
                            <p className="text-center font-medium">{need}</p>
                          </motion.div>
                        ))}
                      </div>
                      {errors.designNeeds && <p className="text-rose-500 text-sm mt-1">{errors.designNeeds}</p>}
                    </div>
                    <div>
                      <label className="block text-warm-gray-700 font-medium mb-2">Where will this live?</label>
                      <div className="grid grid-cols-3 gap-4">
                        {['Mobile 📱', 'Desktop 💻', 'Both 🌈'].map((option) => (
                          <motion.div
                            key={option}
                            variants={itemVariants}
                            onClick={() => setFormData((prev) => ({ ...prev, playground: option }))}
                            className={`p-4 rounded-lg cursor-pointer transition-all ${
                              formData.playground === option
                                ? 'bg-sage-100 border-2 border-sage-400 shadow-glow'
                                : 'bg-white border border-warm-gray-200 hover:shadow-soft'
                            }`}
                          >
                            <p className="text-center font-medium">{option}</p>
                          </motion.div>
                        ))}
                      </div>
                      {errors.playground && <p className="text-rose-500 text-sm mt-1">{errors.playground}</p>}
                    </div>
                  </motion.div>
                    <div className="flex justify-between mt-8">
                      <button type="button" onClick={prevStep} className="px-6 py-2 bg-warm-gray-300 text-white rounded-full">Previous</button>
                      <button type="button" onClick={nextStep} className="px-6 py-2 bg-coral-600 text-white rounded-full">Next</button>
                    </div>
                  </motion.div>
                )}
                {currentStep === 3 && (
                  <motion.div variants={stepVariants} initial="initial" animate="animate" exit="exit">
                  <h2 className="text-3xl font-bold text-sage-600 mb-6">Step 3: The Vision & Vibe</h2>
                  <motion.div variants={itemVariants} className="space-y-6">
                    <FormField
                      label="What’s the biggest pain point we’re solving?"
                      id="northStar"
                      name="northStar"
                      placeholder="Tell me about the main challenge..."
                      value={formData.northStar}
                      onChange={handleChange}
                      error={errors.northStar}
                      required
                      textarea={true}
                      className="focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 focus:ring-opacity-50"
                    />
                    <div>
                      <label className="block text-warm-gray-700 font-medium mb-2">If this project was a person, how would they dress?</label>
                      <div className="grid grid-cols-3 gap-4">
                        {['Minimal', 'Bold', 'Approachable'].map((vibe) => (
                          <motion.div
                            key={vibe}
                            variants={itemVariants}
                            onClick={() => setFormData((prev) => ({ ...prev, vibeCheck: vibe }))}
                            className={`p-4 rounded-lg cursor-pointer transition-all ${
                              formData.vibeCheck === vibe
                                ? 'bg-sage-100 border-2 border-sage-400 shadow-glow'
                                : 'bg-white border border-warm-gray-200 hover:shadow-soft'
                            }`}
                          >
                            <p className="text-center font-medium">{vibe}</p>
                          </motion.div>
                        ))}
                      </div>
                      {errors.vibeCheck && <p className="text-rose-500 text-sm mt-1">{errors.vibeCheck}</p>}
                    </div>
                    <div>
                      <label className="block text-warm-gray-700 font-medium mb-2">How do we know we’ve won? (Select all that apply)</label>
                      <div className="grid grid-cols-3 gap-4">
                        {['Sign-ups', 'Speed', 'Credibility'].map((win) => (
                          <motion.div
                            key={win}
                            variants={itemVariants}
                            onClick={() => {
                              setFormData((prev) => {
                                const newWins = prev.win.includes(win)
                                  ? prev.win.filter((w) => w !== win)
                                  : [...prev.win, win];
                                return { ...prev, win: newWins };
                              });
                            }}
                            className={`p-4 rounded-lg cursor-pointer transition-all ${
                              formData.win.includes(win)
                                ? 'bg-coral-100 border-2 border-coral-400 shadow-glow'
                                : 'bg-white border border-warm-gray-200 hover:shadow-soft hover:border-coral-300'
                            }`}
                          >
                            <p className="text-center font-medium">{win}</p>
                          </motion.div>
                        ))}
                      </div>
                      {errors.win && <p className="text-rose-500 text-sm mt-1">{errors.win}</p>}
                    </div>
                  </motion.div>
                    <div className="flex justify-between mt-8">
                      <button type="button" onClick={prevStep} className="px-6 py-2 bg-warm-gray-300 text-white rounded-full">Previous</button>
                      <button type="submit" className="px-6 py-2 bg-coral-600 text-white rounded-full">Submit</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          ) : (
            <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-center p-8"
                        >
                          <h2 className="text-3xl font-bold text-sage-600 mb-4">Thanks for sharing your vision!</h2>
                          <p className="text-warm-gray-700 mb-6">I'll be in touch soon to make some magic happen! ✨</p>
                          {/* Floating SVG sparkles animation */}
                          {[...Array(5)].map((_, i) => (
                            <motion.svg
                              key={i}
                              className="absolute top-0 left-1/2 transform -translate-x-1/2"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              initial={{ y: 0, opacity: 1, scale: 1 }}
                              animate={{
                                y: -50 - Math.random() * 50,
                                x: (Math.random() - 0.5) * 100,
                                opacity: 0,
                                scale: 0.5 + Math.random(),
                                rotate: Math.random() * 360,
                              }}
                              transition={{ duration: 1 + Math.random(), delay: i * 0.1, ease: "easeOut" }}
                            >
                              <path
                                d="M10 0C10.5 5 15 9.5 20 10C15 10.5 10.5 15 10 20C9.5 15 5 10.5 0 10C5 9.5 9.5 5 10 0Z"
                                fill={['#FF6B6B', '#A78BFA', '#6EE7B7'][i % 3]} // Coral, Lavender, Sage
                                fillOpacity="0.8"
                              />
                            </motion.svg>
                          ))}
                        </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
