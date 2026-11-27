/**
 * Health education articles.
 * IMPORTANT: every article must be reviewed and approved by Dr Nogemane.
 * Set `reviewed: true` once approved — unreviewed articles show a review notice.
 * Content is general information only and is not a substitute for a consultation.
 */
export type Category = { slug: string; name: string };

export const categories: Category[] = [
  { slug: "general-health", name: "General Health" },
  { slug: "preventive-healthcare", name: "Preventive Healthcare" },
  { slug: "mens-health", name: "Men's Health" },
  { slug: "womens-health", name: "Women's Health" },
  { slug: "childrens-health", name: "Children's Health" },
  { slug: "hiv-education", name: "HIV Education" },
  { slug: "chronic-conditions", name: "Chronic Conditions" },
  { slug: "healthy-living", name: "Healthy Living" },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  featured?: boolean;
  reviewed: boolean;
  published: boolean;
  icon: string;
  body: { h?: string; p?: string; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "importance-of-regular-health-check-ups",
    title: "Understanding the Importance of Regular Health Check-ups",
    excerpt:
      "Many health conditions develop quietly. A regular check-up helps you and your doctor spot changes early, while they are easier to manage.",
    category: "preventive-healthcare",
    date: "2026-11-20",
    featured: true,
    reviewed: false,
    published: true,
    icon: "Stethoscope",
    body: [
      { p: "Feeling well does not always mean everything is fine. Conditions such as high blood pressure, diabetes and high cholesterol often cause no symptoms in their early stages. A routine check-up gives you and your doctor the chance to pick up these changes early." },
      { h: "What a check-up may include" },
      { list: ["A conversation about your health, lifestyle and family history", "Blood pressure, weight and other basic measurements", "Screening tests that suit your age and risk factors", "Advice on vaccinations and healthy habits"] },
      { h: "How often should you go?" },
      { p: "How often you need a check-up depends on your age, your health and your family history. Your doctor can advise on a schedule that makes sense for you." },
      { h: "Preparing for your visit" },
      { p: "Bring a list of any medication you take, note any symptoms or questions you have, and bring previous results if you have them. This helps make the most of your time with the doctor." },
    ],
  },
  {
    slug: "understanding-high-blood-pressure",
    title: "Understanding High Blood Pressure",
    excerpt:
      "High blood pressure often has no symptoms, yet it is a major risk factor for stroke and heart disease. Here is what you should know.",
    category: "chronic-conditions",
    date: "2026-11-18",
    reviewed: false,
    published: true,
    icon: "HeartPulse",
    body: [
      { p: "Blood pressure is the force of blood pushing against the walls of your arteries. When it stays high over time — a condition called hypertension — it puts extra strain on your heart, blood vessels, kidneys and eyes." },
      { h: "Why it is called a 'silent' condition" },
      { p: "Most people with high blood pressure feel completely well. The only reliable way to know your blood pressure is to have it measured." },
      { h: "Factors that can increase your risk" },
      { list: ["Family history of high blood pressure", "Being overweight and physically inactive", "A diet high in salt", "Smoking and drinking too much alcohol", "Getting older"] },
      { h: "What you can do" },
      { p: "Have your blood pressure checked regularly. Reducing salt, staying active, maintaining a healthy weight and limiting alcohol all help. If medication is prescribed, take it as directed — even when you feel well — and do not stop without speaking to your doctor." },
    ],
  },
  {
    slug: "hiv-testing-what-you-should-know",
    title: "HIV Testing: What You Should Know",
    excerpt:
      "Knowing your HIV status is the first step to staying healthy. Testing is quick, confidential and the start of effective care.",
    category: "hiv-education",
    date: "2026-11-15",
    reviewed: false,
    published: true,
    icon: "ShieldCheck",
    body: [
      { p: "HIV testing is quick, confidential and one of the most important things you can do for your health. Knowing your status lets you make informed decisions and, if needed, start treatment early." },
      { h: "Why testing matters" },
      { p: "People living with HIV who take treatment consistently can live long, healthy lives. Treatment that keeps the virus suppressed also greatly reduces the chance of passing HIV on to others." },
      { h: "When to test" },
      { list: ["As part of routine health care", "After possible exposure", "When starting a new relationship", "During pregnancy, to protect mother and baby"] },
      { h: "If you think you were exposed recently" },
      { p: "Seek medical advice as soon as possible. Medication called post-exposure prophylaxis (PEP) must be started within 72 hours to be effective." },
      { h: "Your privacy" },
      { p: "Your test and results are confidential. Counselling is available to help you understand your results and the next steps." },
    ],
  },
  {
    slug: "importance-of-preventive-healthcare",
    title: "The Importance of Preventive Healthcare",
    excerpt:
      "Prevention is better than cure. Small, consistent steps can protect your health and help you avoid serious illness.",
    category: "preventive-healthcare",
    date: "2026-11-12",
    reviewed: false,
    published: true,
    icon: "Shield",
    body: [
      { p: "Preventive healthcare focuses on keeping you well rather than only treating illness once it appears. It includes screening, vaccinations and the everyday choices that protect your long-term health." },
      { h: "Key parts of preventive care" },
      { list: ["Regular check-ups and screening tests", "Keeping vaccinations up to date", "Knowing your family health history", "Healthy eating, physical activity and good sleep", "Avoiding tobacco and limiting alcohol"] },
      { h: "Why it is worth it" },
      { p: "Finding a problem early usually means simpler treatment and better outcomes. Prevention also saves time and money compared with treating advanced illness." },
      { p: "Ask your doctor which screenings and vaccinations are recommended for your age and health." },
    ],
  },
  {
    slug: "understanding-diabetes",
    title: "Understanding Diabetes",
    excerpt:
      "Diabetes affects how your body uses sugar. Learn about the warning signs and why early diagnosis and regular care matter.",
    category: "chronic-conditions",
    date: "2026-11-08",
    reviewed: false,
    published: true,
    icon: "Droplet",
    body: [
      { p: "Diabetes is a condition in which the level of sugar (glucose) in the blood is too high, because the body does not make enough insulin or cannot use it properly." },
      { h: "Types of diabetes" },
      { list: ["Type 1 — the body makes little or no insulin; usually diagnosed in children and young adults", "Type 2 — the most common type; the body does not use insulin well and it is linked to weight, inactivity and family history", "Gestational diabetes — develops during pregnancy"] },
      { h: "Possible warning signs" },
      { list: ["Feeling very thirsty and passing urine often", "Tiredness", "Blurred vision", "Wounds that heal slowly", "Unexplained weight loss"] },
      { p: "Many people with type 2 diabetes have no symptoms at first, which is why testing is important if you are at risk." },
      { h: "Living well with diabetes" },
      { p: "With regular check-ups, a healthy diet, physical activity and medication when needed, diabetes can be well controlled, reducing the risk of complications to the heart, kidneys, eyes and feet." },
    ],
  },
  {
    slug: "maintaining-a-healthy-lifestyle",
    title: "Maintaining a Healthy Lifestyle",
    excerpt:
      "Healthy living does not require dramatic changes. Practical daily habits make a real difference to how you feel.",
    category: "healthy-living",
    date: "2026-11-05",
    reviewed: false,
    published: true,
    icon: "Apple",
    body: [
      { p: "A healthy lifestyle is built from small habits repeated every day. You do not need to change everything at once — start with one or two steps and build from there." },
      { h: "Practical habits" },
      { list: ["Eat plenty of vegetables, fruit and whole grains, and cut down on salt, sugar and fried food", "Drink enough clean water", "Aim to be active most days — walking counts", "Get enough sleep", "Avoid smoking and limit alcohol", "Make time for rest and for people who support you"] },
      { h: "Look after your mental wellbeing" },
      { p: "Stress, low mood and worry affect your physical health too. If you are struggling, speak to someone you trust or to your doctor." },
      { p: "Your doctor can help you set realistic goals that suit your health and circumstances." },
    ],
  },
];

export const publishedPosts = posts
  .filter((p) => p.published)
  .sort((a, b) => b.date.localeCompare(a.date));

export const categoryName = (slug: string) =>
  categories.find((c) => c.slug === slug)?.name ?? "General Health";

export const readingTime = (post: Post) => {
  const words = post.body
    .map((b) => [b.h, b.p, ...(b.list ?? [])].filter(Boolean).join(" "))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};
