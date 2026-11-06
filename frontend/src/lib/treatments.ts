export type TreatmentGroup = { title: string; conditions: string[] };

export const homoeopathyGroups: TreatmentGroup[] = [
  {
    title: "Respiratory System",
    conditions: ["Allergic Rhinitis", "Recurrent Colds", "Sinusitis", "Tonsillitis", "Allergic Cough"],
  },
  {
    title: "Gastrointestinal System",
    conditions: ["Functional Dyspepsia", "Irritable Bowel Syndrome (IBS)", "Constipation", "Acidity", "Haemorrhoids (Piles)"],
  },
  {
    title: "Skin and Hair",
    conditions: ["Eczema", "Acne Vulgaris", "Urticaria", "Psoriasis", "Dandruff"],
  },
  {
    title: "Musculoskeletal System",
    conditions: ["Osteoarthritis", "Chronic Low Back Pain", "Cervical Spondylosis", "Frozen Shoulder", "Muscle Pain"],
  },
  {
    title: "Nervous System",
    conditions: ["Migraine", "Tension-Type Headache", "Insomnia", "Stress-related Symptoms"],
  },
  {
    title: "Female Reproductive System",
    conditions: ["Dysmenorrhoea", "Premenstrual Syndrome (PMS)", "Menopausal Symptoms", "Menstrual Irregularities"],
  },
  {
    title: "Male Reproductive System",
    conditions: ["Benign Prostatic Hyperplasia (BPH) – urinary symptoms", "Chronic Prostatitis – symptom support"],
  },
  {
    title: "Endocrine and Metabolic System",
    conditions: ["Obesity", "Lifestyle-related Complaints", "Supportive care in Diabetes"],
  },
  {
    title: "Urinary System",
    conditions: ["Recurrent Urinary Symptoms", "Overactive Bladder Symptoms"],
  },
  {
    title: "Paediatric Health",
    conditions: ["Recurrent Minor Respiratory Complaints", "Functional Constipation", "Eczema", "Sleep-related Complaints"],
  },
  {
    title: "Geriatric Health",
    conditions: ["Chronic Joint Pain", "Sleep Disturbances", "Age-related"],
  },
  {
    title: "Mental Health and Psychiatric Disorders",
    conditions: [
      "Anxiety Disorders",
      "Depression",
      "Insomnia",
      "Stress-related Disorders",
      "Panic Attacks",
      "Phobias",
      "Obsessive-Compulsive Disorder (OCD)",
      "Post-Traumatic Stress Disorder (PTSD)",
      "Adjustment Disorders",
      "Somatic Symptom Disorders",
      "Grief-related Emotional Distress",
      "Irritability and Mood Disturbances",
    ],
  },
];

export const ayurvedaGroups: TreatmentGroup[] = [
  {
    title: "Musculoskeletal System",
    conditions: ["Osteoarthritis", "Rheumatoid Arthritis", "Cervical Spondylosis", "Lumbar Spondylosis", "Frozen Shoulder", "Sciatica", "Chronic Low Back Pain"],
  },
  {
    title: "Gastrointestinal System",
    conditions: ["Irritable Bowel Syndrome (IBS)", "Functional Dyspepsia", "Chronic Constipation", "Acid Peptic Disorders", "Haemorrhoids (Piles)", "Anal Fissure", "Fatty Liver Disease"],
  },
  {
    title: "Nervous System",
    conditions: ["Migraine", "Tension-Type Headache", "Peripheral Neuropathy", "Facial Palsy", "Insomnia", "Stress-related Complaints"],
  },
  {
    title: "Skin and Hair",
    conditions: ["Psoriasis", "Eczema", "Acne Vulgaris", "Vitiligo", "Chronic Dermatitis", "Dandruff", "Hair Fall"],
  },
  {
    title: "Respiratory System",
    conditions: ["Allergic Rhinitis", "Chronic Sinusitis", "Bronchial Asthma", "Recurrent Respiratory Allergies"],
  },
  {
    title: "Endocrine and Metabolic System",
    conditions: ["Type 2 Diabetes Mellitus", "Obesity"],
  },
  {
    title: "Reproductive System",
    conditions: ["Menstrual Irregularities", "Dysmenorrhoea", "Menopausal Symptoms", "Polycystic Ovary Syndrome (PCOS)"],
  },
  {
    title: "Urinary System",
    conditions: ["Recurrent Urinary Tract Symptoms", "Benign Prostatic Hyperplasia (BPH)", "Urinary Incontinence"],
  },
  {
    title: "Eye and ENT",
    conditions: ["Dry Eye Symptoms", "Allergic Conjunctivitis", "Tinnitus", "Chronic Ear Complaints"],
  },
  {
    title: "Geriatric Health",
    conditions: ["Age-related Joint Pain", "Sleep Disturbances", "Chronic Constipation", "General Mobility Problems"],
  },
];

export const siddhaGroups: TreatmentGroup[] = [
  { title: "Skin Disorders", conditions: ["Eczema, psoriasis, acne and dermatitis."] },
  { title: "Joint Disorders", conditions: ["Arthritis, joint pain and osteoarthritis."] },
  { title: "Respiratory Disorders", conditions: ["Asthma, bronchitis and allergic rhinitis."] },
  { title: "Gastrointestinal Disorders", conditions: ["Gastritis, constipation and indigestion."] },
  { title: "Neurological Disorders", conditions: ["Headache, migraine and nerve-related complaints."] },
  { title: "Musculoskeletal Disorders", conditions: ["Back pain, muscle pain and cervical spondylosis."] },
  { title: "Metabolic Disorders", conditions: ["Obesity, diabetes and lipid disorders."] },
  { title: "Women's Health", conditions: ["Menstrual irregularities and menopausal complaints."] },
  { title: "Hair and Scalp Disorders", conditions: ["Dandruff and hair fall."] },
  { title: "Chronic Wound Care", conditions: ["Non-healing wounds and ulcers."] },
  { title: "Urinary Disorders", conditions: ["Urinary complaints and kidney stone-related symptoms."] },
  { title: "General Health", conditions: ["Rejuvenation, wellness and preventive healthcare."] },
];

export const allopathyGroups: TreatmentGroup[] = [
  {
    title: "Emergency & Critical Care",
    conditions: [
      "Heart attack, cardiac arrest, stroke, pulmonary embolism",
      "Accidents, fractures, burns, head injury, bleeding",
      "Poisoning, snake bite, anaphylaxis, drowning",
      "Septic shock, respiratory failure, coma",
    ],
  },
  {
    title: "Infections",
    conditions: [
      "Bacterial: Tuberculosis, pneumonia, typhoid, UTI, skin infections",
      "Viral: Influenza, dengue, HIV, hepatitis B/C, COVID, herpes",
      "Fungal, parasitic: Malaria, fungal pneumonia, intestinal worms",
      "Prevention: Through vaccines - polio, measles, tetanus, hepatitis, HPV",
    ],
  },
  {
    title: "Heart & Blood Vessels",
    conditions: [
      "Hypertension, high cholesterol, angina, heart failure",
      "Arrhythmias, valvular disease, congenital heart defects",
      "Deep vein thrombosis, varicose veins",
      "Anemia, leukemia, hemophilia, thalassemia",
    ],
  },
  {
    title: "Digestion & Liver",
    conditions: [
      "GERD, gastritis, IBS, ulcerative colitis, Crohn's",
      "Hepatitis, fatty liver, cirrhosis, gallstones, pancreatitis",
      "Appendicitis, hernia, piles, fissure",
    ],
  },
  {
    title: "Kidney & Urinary",
    conditions: ["Kidney stones, kidney failure", "Dialysis and transplant management"],
  },
  {
    title: "Bones, Joints & Muscles",
    conditions: [
      "Fractures, dislocations, ligament tears",
      "osteoporosis, gout",
      "Slipped disc, scoliosis, sports injuries.",
    ],
  },
];
