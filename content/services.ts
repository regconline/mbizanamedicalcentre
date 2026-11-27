/**
 * Services as listed on the practice's own signage ("Our Services" door poster).
 * Descriptions are deliberately general — no prices, outcomes or guarantees.
 * Set `published: false` to hide a service.
 */
export type Service = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  details: string;
  published: boolean;
};

export const services: Service[] = [
  {
    slug: "general-consultation",
    title: "General Consultation",
    icon: "Stethoscope",
    summary: "Consultations for everyday health concerns for adults and children.",
    details:
      "Book a consultation to discuss symptoms, new or ongoing concerns, and your general health. The doctor will assess you and advise on the next steps in your care.",
    published: true,
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    icon: "HeartPulse",
    summary: "Health support for women at every stage of life.",
    details:
      "Consultations covering women's health concerns. Speak to the practice about the specific women's health services available at your appointment.",
    published: true,
  },
  {
    slug: "child-health",
    title: "Child Health",
    icon: "Baby",
    summary: "Care for babies, children and teenagers.",
    details:
      "Consultations for children's health concerns, with time to answer parents' and caregivers' questions.",
    published: true,
  },
  {
    slug: "mens-clinic",
    title: "Men's Clinic incl. Circumcision",
    icon: "User",
    summary: "Men's health consultations, including medical circumcision.",
    details:
      "A dedicated men's health service, including medical circumcision. Contact the practice for information on preparation and aftercare.",
    published: true,
  },
  {
    slug: "minor-surgeries",
    title: "Minor Surgeries",
    icon: "Scissors",
    summary: "Minor procedures performed in the practice.",
    details:
      "Selected minor procedures can be done at the practice. The doctor will first assess whether a procedure is suitable for you.",
    published: true,
  },
  {
    slug: "diagnosis-and-treatment",
    title: "Diagnosis & Treatment",
    icon: "ClipboardPlus",
    summary: "Assessment, diagnosis and treatment planning.",
    details:
      "Clinical assessment to understand what is causing your symptoms, followed by a treatment plan discussed with you.",
    published: true,
  },
  {
    slug: "acute-and-chronic-disease-management",
    title: "Acute & Chronic Disease Management",
    icon: "Activity",
    summary: "Care for sudden illness and ongoing conditions.",
    details:
      "Support for short-term illnesses as well as ongoing monitoring and management of chronic conditions such as high blood pressure and diabetes.",
    published: true,
  },
  {
    slug: "weight-and-nutrition-management",
    title: "Weight & Nutrition Management",
    icon: "Apple",
    summary: "Guidance on weight and healthy eating.",
    details:
      "Consultations to discuss weight, nutrition and lifestyle changes that support your long-term health.",
    published: true,
  },
  {
    slug: "pdps",
    title: "PDPs",
    icon: "IdCard",
    summary: "Medical assessments for Professional Driving Permits.",
    details:
      "Medical examinations required for Professional Driving Permit (PDP) applications. Bring your ID and any forms you have been given.",
    published: true,
  },
  {
    slug: "medical-surveillance",
    title: "Medical Surveillance",
    icon: "ShieldCheck",
    summary: "Workplace and occupational medical assessments.",
    details:
      "Medical surveillance assessments for employers and employees. Contact the practice to discuss your organisation's requirements.",
    published: true,
  },
  {
    slug: "prescriptions",
    title: "Prescriptions",
    icon: "Pill",
    summary: "Prescriptions following a consultation.",
    details:
      "Medication is prescribed following a clinical consultation, including repeat prescriptions for ongoing conditions where appropriate.",
    published: true,
  },
  {
    slug: "iv-therapy",
    title: "IV Therapy",
    icon: "Droplet",
    summary: "Intravenous therapy where clinically indicated.",
    details:
      "Intravenous (IV) therapy is given at the practice when the doctor determines it is clinically appropriate.",
    published: true,
  },
  {
    slug: "pathology",
    title: "Pathology",
    icon: "Microscope",
    summary: "Blood tests and laboratory investigations.",
    details:
      "Samples can be taken for laboratory testing when your doctor requests investigations. Results are discussed with you at follow-up.",
    published: true,
  },
];

export const publishedServices = services.filter((s) => s.published);
