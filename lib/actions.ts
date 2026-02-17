import { z } from 'zod';

const inquirySchema = z.object({
  name: z.string().min(1, "Your name is required."),
  projectName: z.string().min(1, "Project name is required."),
  projectType: z.string().min(1, "Project type is required."),
  budget: z.string().min(1, "Budget indication is required."),
  timeline: z.string().min(1, "Desired project start date is required."),
  projectDetails: z.string().min(1, "Project details are required."),
});

export async function submitInquiry(formData: FormData) {
  const data = {
    name: formData.get('name'),
    projectName: formData.get('projectName'),
    projectType: formData.get('projectType'),
    budget: formData.get('budget'),
    timeline: formData.get('timeline'),
    projectDetails: formData.get('projectDetails'),
  };

  const parsed = inquirySchema.safeParse(data);

  if (!parsed.success) {
    console.error("Validation failed:", parsed.error.flatten());
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  // In a real application, you would save this to a database or send an email
  console.log("Inquiry submitted successfully:", parsed.data);

  return { success: true, data: parsed.data };
}