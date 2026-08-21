/**
 * Farmakode — Functional OTC Medicine Safety Platform
 * SPA Router · Medicine Database · Cabinet Logic · Safety Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. MEDICINE DATABASE
  // ==========================================================================
  const MED_DATABASE = {
    // Original core catalog
    panadol_extra: {
      id: 'panadol_extra',
      brand: 'Panadol Extra',
      category: 'Pain Relief',
      strength: '500mg + 65mg',
      description: 'Extra-strength pain and fever relief with added caffeine for enhanced efficacy.',
      image: 'assets/med_paracetamol.jpg',
      activeIngredients: {
        'Paracetamol': 500,
        'Caffeine': 65
      }
    },
    tylolhot: {
      id: 'tylolhot',
      brand: 'Tylolhot',
      category: 'Cold & Flu',
      strength: '500mg',
      description: 'Paracetamol-based cold and flu relief for daytime use.',
      image: 'assets/med_nightflu.jpg',
      activeIngredients: {
        'Paracetamol': 500
      }
    },
    night_cold_flu: {
      id: 'night_cold_flu',
      brand: 'Night Cold & Flu',
      category: 'Cold & Flu',
      strength: 'Multi-Symptom',
      description: 'Nighttime multi-symptom cold and flu relief with sedating antihistamine.',
      image: 'assets/med_nightflu.jpg',
      activeIngredients: {
        'Paracetamol': 500,
        'Phenylephrine HCl': 10,
        'Diphenhydramine HCl': 25
      }
    },
    vicks_dayquil: {
      id: 'vicks_dayquil',
      brand: 'Vicks DayQuil',
      category: 'Cold & Flu',
      strength: '325mg + 5mg',
      description: 'Non-drowsy daytime cold symptom relief with decongestant.',
      image: 'assets/med_sinus.jpg',
      activeIngredients: {
        'Paracetamol': 325,
        'Phenylephrine HCl': 5
      }
    },
    sinus_relief: {
      id: 'sinus_relief',
      brand: 'Sinus Relief',
      category: 'Cold & Flu',
      strength: '60mg',
      description: 'Powerful decongestant for sinus pressure and nasal congestion.',
      image: 'assets/med_sinus.jpg',
      activeIngredients: {
        'Pseudoephedrine HCl': 60
      }
    },
    brufen: {
      id: 'brufen',
      brand: 'Brufen',
      category: 'Pain Relief',
      strength: '400mg',
      description: 'NSAID anti-inflammatory for pain, fever and inflammation.',
      image: 'assets/med_paracetamol.jpg',
      activeIngredients: {
        'Ibuprofen': 400
      }
    },
    nurofen_plus: {
      id: 'nurofen_plus',
      brand: 'Nurofen Plus',
      category: 'Pain Relief',
      strength: '200mg + 12.8mg',
      description: 'Combined ibuprofen and codeine for stronger pain relief.',
      image: 'assets/med_paracetamol.jpg',
      activeIngredients: {
        'Ibuprofen': 200,
        'Codeine Phosphate': 12.8
      }
    },
    aspirin: {
      id: 'aspirin',
      brand: 'Aspirin',
      category: 'Pain Relief',
      strength: '500mg',
      description: 'Classic analgesic and anti-inflammatory. Also used for cardiovascular protection.',
      image: 'assets/med_paracetamol.jpg',
      activeIngredients: {
        'Acetylsalicylic Acid': 500
      }
    },
    clarityne: {
      id: 'clarityne',
      brand: 'Clarityne',
      category: 'Allergy',
      strength: '10mg',
      description: 'Non-drowsy 24-hour antihistamine for allergy symptom relief.',
      image: 'assets/med_allergy.jpg',
      activeIngredients: {
        'Loratadine': 10
      }
    },
    zyrtec: {
      id: 'zyrtec',
      brand: 'Zyrtec',
      category: 'Allergy',
      strength: '10mg',
      description: '24-hour antihistamine for allergies, hay fever and hives.',
      image: 'assets/med_allergy.jpg',
      activeIngredients: {
        'Cetirizine HCl': 10
      }
    },
    benadryl: {
      id: 'benadryl',
      brand: 'Benadryl',
      category: 'Allergy',
      strength: '25mg',
      description: 'First-generation antihistamine for allergy relief and sleep aid.',
      image: 'assets/med_allergy.jpg',
      activeIngredients: {
        'Diphenhydramine HCl': 25
      }
    },
    gaviscon: {
      id: 'gaviscon',
      brand: 'Gaviscon',
      category: 'Digestive',
      strength: '500mg',
      description: 'Antacid and alginate forming a raft to relieve heartburn and reflux.',
      image: 'assets/med_sinus.jpg',
      activeIngredients: {
        'Sodium Alginate': 500,
        'Sodium Bicarbonate': 267
      }
    },
    omeprazole: {
      id: 'omeprazole',
      brand: 'Omeprazole',
      category: 'Digestive',
      strength: '20mg',
      description: 'Proton pump inhibitor for reducing stomach acid production.',
      image: 'assets/med_sinus.jpg',
      activeIngredients: {
        'Omeprazole': 20
      }
    },
    supradyn: {
      id: 'supradyn',
      brand: 'Supradyn',
      category: 'Vitamins',
      strength: 'Multivitamin',
      description: 'Complete multivitamin and mineral complex for daily nutritional support.',
      image: 'assets/med_paracetamol.jpg',
      activeIngredients: {
        'Vitamin A': 0.8,
        'Vitamin C': 60,
        'Vitamin D': 0.005,
        'Vitamin B12': 0.001
      }
    },
    vitamin_c: {
      id: 'vitamin_c',
      brand: 'Vitamin C 1000mg',
      category: 'Vitamins',
      strength: '1000mg',
      description: 'High-dose Vitamin C supplement for immune support and antioxidant protection.',
      image: 'assets/med_paracetamol.jpg',
      activeIngredients: {
        'Ascorbic Acid (Vitamin C)': 1000
      }
    },

    // Integrated Farmakode MVP OpenFDA Dataset
    betadine: {
      id: 'betadine',
      brand: 'Betadine',
      category: 'Other OTC',
      strength: '10% Solution',
      description: 'Topical antiseptic microbicidal solution for preventing skin infections in minor cuts and scrapes.',
      image: 'images/medicines/betadine.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=00002127-02bc-4c66-b0c3-ca29d8224afc&name=bottle-label.jpg',
      local_image_path: '.\\images\\Betadine.jpg',
      manufacturer: 'Atlantis Consumer Healthcare, Inc.',
      generic_name_source: 'Povidone-Iodine',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Povidone-Iodine': 100
      }
    },
    naproxen: {
      id: 'naproxen',
      brand: 'Naproxen',
      category: 'Pain Relief',
      strength: '220mg',
      description: 'All-day NSAID analgesic and antipyretic for relief of muscle aches, backaches, and minor arthritis pain.',
      image: 'images/medicines/naproxen.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=000155a8-709c-44e5-a75f-cd890f3a7caf&name=NaproxinNaStructure.jpg',
      local_image_path: '.\\images\\Naproxen.jpg',
      manufacturer: 'A-S Medication Solutions',
      generic_name_source: 'Naproxen',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Naproxen': 220
      }
    },
    quick_action: {
      id: 'quick_action',
      brand: 'Quick Action',
      category: 'Other OTC',
      strength: '2% Solution',
      description: 'Targeted topical salicylic acid solution for clearing blemishes and deep pore skin renewal.',
      image: 'images/medicines/quick_action.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=00025ea5-d15f-49d2-a52a-6c1bd8c6a033&name=mm01.jpg',
      local_image_path: '.\\images\\Quick_Action.jpg',
      manufacturer: 'Walmart Inc.',
      generic_name_source: 'Salicylic Acid',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Salicylic Acid': 20
      }
    },
    anti_itch: {
      id: 'anti_itch',
      brand: 'Anti Itch',
      category: 'Allergy',
      strength: '1% Cream',
      description: 'Hydrocortisone anti-itch maximum strength cream for relief of rashes, eczema, and insect bites.',
      image: 'images/medicines/anti_itch.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=00040bfe-001a-484e-bec0-e21e8b27f369&name=319-6e-anti-itch-cream.jpg',
      local_image_path: '.\\images\\Anti_Itch.jpg',
      manufacturer: 'Meijer, Inc.',
      generic_name_source: 'Hydrocortisone',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Hydrocortisone': 10
      }
    },
    pain_reliever_extra_strength: {
      id: 'pain_reliever_extra_strength',
      brand: 'Pain Reliever Extra Strength',
      category: 'Pain Relief',
      strength: '500mg',
      description: 'Extra-strength acetaminophen caplets for temporary relief of minor aches, pains, and fever reduction.',
      image: 'images/medicines/pain_reliever_extra_strength.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=0005aafa-08f8-4990-a54d-cc097195708f&name=best-choice-44-519-delisted-1.jpg',
      local_image_path: '.\\images\\Pain_Reliever_Extra_Strength.jpg',
      manufacturer: 'Valu Merchandisers Company',
      generic_name_source: 'Acetaminophen',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Acetaminophen': 500
      }
    },
    oasis_tears_lubricant_eye: {
      id: 'oasis_tears_lubricant_eye',
      brand: 'Oasis Tears Lubricant Eye',
      category: 'Other OTC',
      strength: '15mL Drops',
      description: 'Preservative-free sterile lubricating eye drops for prolonged comfort and dry eye irritation relief.',
      image: 'images/medicines/oasis_tears_lubricant_eye.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=00071697-4ac6-4962-8eee-388b8b52bd40&name=OASIS+TEARS+Multidose+Box.jpg',
      local_image_path: '.\\images\\Oasis_Tears_Lubricant_Eye.jpg',
      manufacturer: 'OASIS Medical, Inc.',
      generic_name_source: 'Glycerin',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Glycerin': 10
      }
    },
    thera_plus_feminine_anti_itch: {
      id: 'thera_plus_feminine_anti_itch',
      brand: 'Thera Plus Feminine Anti-Itch',
      category: 'Other OTC',
      strength: '20% + 3%',
      description: 'Maximum strength soothing cream formulated with Benzocaine and Resorcinol for instant external relief.',
      image: 'images/medicines/thera_plus_maximum_strength_feminine_anti_itch.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=0007e3ea-882b-4000-8e70-2bcec2c08613&name=Outer+Package.jpg',
      local_image_path: '.\\images\\Thera_Plus_Maximum_Strength_Feminine_AntiItch.jpg',
      manufacturer: 'FOURSTAR GROUP USA, INC.',
      generic_name_source: 'Benzocaine, Resorcinol',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Benzocaine': 200,
        'Resorcinol': 30
      }
    },
    lights_povidone_iodine_scrub: {
      id: 'lights_povidone_iodine_scrub',
      brand: 'Lights Povidone Iodine Scrub',
      category: 'Other OTC',
      strength: '7.5% Scrub',
      description: 'Surgical antiseptic hand wash and skin cleansing scrub containing microbicidal Povidone-Iodine.',
      image: 'images/medicines/lights_povidone_iodine_scrub.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=000bf57b-1805-4746-bf1c-32856241213a&name=Povidone+iodine+Scrub6.jpg',
      local_image_path: '.\\images\\Lights_Povindone_Iodine_Scrub.jpg',
      manufacturer: 'Lights Medical Manufacture Co., Ltd.',
      generic_name_source: 'Povidone-Iodine',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Povidone-Iodine': 75
      }
    },
    basic_care_acetaminophen: {
      id: 'basic_care_acetaminophen',
      brand: 'Basic Care Acetaminophen',
      category: 'Pain Relief',
      strength: '500mg',
      description: 'Fast fever reducer and pain reliever caplets with pure acetaminophen for multi-symptom body relief.',
      image: 'images/medicines/basic_care_acetaminophen.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=00146b91-008d-4b16-95b0-6077f98821be&name=image-01.jpg',
      local_image_path: '.\\images\\Basic_Care_Acetaminophen.jpg',
      manufacturer: 'Amazon.com Services LLC',
      generic_name_source: 'Acetaminophen',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Acetaminophen': 500
      }
    },
    anticavity_rinse: {
      id: 'anticavity_rinse',
      brand: 'Anticavity Rinse',
      category: 'Other OTC',
      strength: '0.05% Fluoride',
      description: 'Daily sodium fluoride oral rinse formulated to prevent dental caries and strengthen enamel.',
      image: 'images/medicines/anticavity_rinse.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=001777fb-196c-499a-94c8-6cdcef0958e9&name=mm01.jpg',
      local_image_path: '.\\images\\Anticavity_Rinse.jpg',
      manufacturer: 'Meijer, Inc.',
      generic_name_source: 'Sodium Fluoride',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Sodium Fluoride': 1
      }
    },
    acid_reducer: {
      id: 'acid_reducer',
      brand: 'Acid Reducer',
      category: 'Digestive',
      strength: '20mg',
      description: 'Delayed-release esomeprazole magnesium capsules for 24-hour treatment of frequent heartburn.',
      image: 'images/medicines/acid_reducer.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=001817ea-906e-47f7-8605-41ba5a9abd21&name=esomeprazole-20-mg-tablets-delisted-1.jpg',
      local_image_path: '.\\images\\Acid_Reducer.jpg',
      manufacturer: 'CVS Pharmacy',
      generic_name_source: 'Esomeprazole Magnesium',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Esomeprazole Magnesium': 20
      }
    },
    foster_thrive_dry_eye_relief: {
      id: 'foster_thrive_dry_eye_relief',
      brand: 'Foster And Thrive Dry Eye Relief',
      category: 'Other OTC',
      strength: '15mL Drops',
      description: 'Soothing lubricant eye drops with Polyethylene Glycol 400 to protect against eye dryness.',
      image: 'images/medicines/foster_thrive_dry_eye_relief.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=0018ade9-5856-db6c-e063-6394a90a2ccf&name=Foster+and+Thrive+Dry+Eye+Relief+15mL+%28revised%29.jpg',
      local_image_path: '.\\images\\Foster_And_Thrive_Dry_Eye_Relief.jpg',
      manufacturer: 'Strategic Sourcing Services LLC',
      generic_name_source: 'Polyethylene Glycol 400',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Polyethylene Glycol 400': 10
      }
    },
    foster_thrive_advanced_relief_eye_drops: {
      id: 'foster_thrive_advanced_relief_eye_drops',
      brand: 'Foster And Thrive Advanced Relief Eye Drops',
      category: 'Other OTC',
      strength: '15mL Drops',
      description: 'Dual-action eye drops combining PEG 400 lubricant and Tetrahydrozoline HCl redness reliever.',
      image: 'images/medicines/foster_thrive_advanced_relief_eye_drops.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=0019cd99-b245-2ffc-e063-6294a90a9f27&name=Foster+and+Thrive+Adv+Relief+Eye+Drops+15mL+%28revised%29.jpg',
      local_image_path: '.\\images\\Foster_And_Thrive_Advanced_Relief_Eye_Drops.jpg',
      manufacturer: 'Strategic Sourcing Services LLC',
      generic_name_source: 'Polyethylene Glycol 400, Tetrahydrozoline Hcl',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Polyethylene Glycol 400': 10,
        'Tetrahydrozoline Hcl': 0.5
      }
    },
    naproxen_sodium_220mg: {
      id: 'naproxen_sodium_220mg',
      brand: 'Naproxen Sodium 220Mg',
      category: 'Pain Relief',
      strength: '220mg',
      description: 'NSAID pain reliever and fever reducer caplets providing up to 12 hours of uninterrupted pain relief.',
      image: 'images/medicines/naproxen_sodium_220mg.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=002052df-83ac-4efd-926c-b60a8f64cec4&name=naproxen-sodium-220mg-1.jpg',
      local_image_path: '.\\images\\Naproxen_Sodium_220Mg.jpg',
      manufacturer: 'Command Brands, LLC',
      generic_name_source: 'Naproxen Sodium 220Mg',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Naproxen Sodium': 220
      }
    },
    leader_earwax_removal_drops: {
      id: 'leader_earwax_removal_drops',
      brand: 'Leader Earwax Removal Drops',
      category: 'Other OTC',
      strength: '6.5% Drops',
      description: 'Gentle foaming carbamide peroxide otic drops for softening and safely removing stubborn earwax.',
      image: 'images/medicines/leader_earwax_removal_drops.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=0022a174-8377-44af-84a9-31adb27de131&name=label+bottle.jpg',
      local_image_path: '.\\images\\Leader_Earwax_Removal_Drops_Earwax_Removal_Aid.jpg',
      manufacturer: 'Cardinal Health, Inc.',
      generic_name_source: 'Carbamide Peroxide',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Carbamide Peroxide': 65
      }
    },
    famotidine: {
      id: 'famotidine',
      brand: 'Famotidine',
      category: 'Digestive',
      strength: '20mg',
      description: 'H2-blocker acid reducer tablets for prevention and fast relief of heartburn and acid indigestion.',
      image: 'images/medicines/famotidine.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=002875d2-8c30-2d2e-e063-6294a90ae01e&name=72789331.jpg',
      local_image_path: '.\\images\\Famotidine.jpg',
      manufacturer: 'PD-Rx Pharmaceuticals, Inc.',
      generic_name_source: 'Famotidine',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Famotidine': 20
      }
    },
    equate_honey_lemon_cough_drops: {
      id: 'equate_honey_lemon_cough_drops',
      brand: 'Equate Honey Lemon Cough Drops',
      category: 'Cold & Flu',
      strength: '7.5mg Menthol',
      description: 'Menthol throat lozenges providing fast soothing relief for coughs and irritated sore throats.',
      image: 'images/medicines/equate_honey_lemon_cough_drops.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=0028be18-5162-ff51-e063-6294a90ae517&name=00289617-86f5-7a52-e063-6294a90a09b1.jpg',
      local_image_path: '.\\images\\Equate_Honey_Lemon_Cough_Drops.jpg',
      manufacturer: 'WalMart',
      generic_name_source: 'Menthol',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Menthol': 7.5
      }
    },
    dragon_pain_relieving_balm: {
      id: 'dragon_pain_relieving_balm',
      brand: 'Dragon Pain Relieving Balm',
      category: 'Pain Relief',
      strength: '11% + 10%',
      description: 'Topical analgesic balm with Camphor and Menthol for deep penetrating muscle and joint pain relief.',
      image: 'images/medicines/dragon_pain_relieving_balm.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=002997d0-3176-3918-e063-6294a90a4408&name=1.jpg',
      local_image_path: '.\\images\\Dragon_Pain_Relieving_Balm.jpg',
      manufacturer: 'Americanna Wellness, Inc.',
      generic_name_source: 'Camphor, Menthol',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Camphor': 110,
        'Menthol': 100
      }
    },
    eminence_radiant_protection_spf_fluid: {
      id: 'eminence_radiant_protection_spf_fluid',
      brand: 'Eminence Radiant Protection Spf Fluid',
      category: 'Other OTC',
      strength: 'SPF 30',
      description: 'Mineral broad-spectrum SPF fluid formulated with pure non-nano Zinc Oxide for daily skin defense.',
      image: 'images/medicines/eminence_radiant_protection_spf_fluid.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=002a4766-0c7e-4ec7-e063-6294a90a78d8&name=RadiantSPFRetailBox.jpg',
      local_image_path: '.\\images\\Eminence_Radiant_Protection_Spf_Fluid.jpg',
      manufacturer: 'Eminence Organic Skin Care',
      generic_name_source: 'Zinc Oxide',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Zinc Oxide': 150
      }
    },
    foster_thrive_original_formula_eye_drops: {
      id: 'foster_thrive_original_formula_eye_drops',
      brand: 'Foster And Thrive Original Formula Eye Drops',
      category: 'Other OTC',
      strength: '0.05% Drops',
      description: 'Fast redness reliever sterile eye drops containing Tetrahydrozoline HCl for immediate clear eyes.',
      image: 'images/medicines/foster_thrive_original_formula_eye_drops.png',
      image_url: 'https://dailymed.nlm.nih.gov/dailymed/image.cfm?setid=002da62b-aec6-8e2a-e063-6294a90a5efc&name=Foster+and+Thrive+Original+Formula+Eye+Drops+15mL.jpg',
      local_image_path: '.\\images\\Foster_And_Thrive_Original_Formula_Eye_Drops.jpg',
      manufacturer: 'Strategic Sourcing Services LLC',
      generic_name_source: 'Tetrahydrozoline Hcl',
      mvp_include: true,
      data_status: 'OpenFDA MVP Catalog',
      activeIngredients: {
        'Tetrahydrozoline Hcl': 0.5
      }
    }
  };

  // Image map for fallback display (medicines without unique images use shared ones)
  const IMAGE_MAP = {
    'Pain Relief': 'assets/med_paracetamol.jpg',
    'Cold & Flu': 'assets/med_nightflu.jpg',
    'Allergy': 'assets/med_allergy.jpg',
    'Digestive': 'assets/med_sinus.jpg',
    'Vitamins': 'assets/med_paracetamol.jpg',
    'Other OTC': 'assets/med_sinus.jpg'
  };

  // Ingredient alias normalizer helper
  const INGREDIENT_ALIASES = {
    'paracetamol': 'Paracetamol / Acetaminophen (APAP)',
    'acetaminophen': 'Paracetamol / Acetaminophen (APAP)',
    'naproxen': 'Naproxen',
    'naproxen sodium': 'Naproxen',
    'naproxen sodium 220mg': 'Naproxen',
    'ibuprofen': 'Ibuprofen',
    'povidone-iodine': 'Povidone-Iodine',
    'polyethylene glycol 400': 'Polyethylene Glycol 400',
    'tetrahydrozoline hcl': 'Tetrahydrozoline HCl',
    'tetrahydrozoline': 'Tetrahydrozoline HCl',
    'menthol': 'Menthol',
    'salicylic acid': 'Salicylic Acid',
    'hydrocortisone': 'Hydrocortisone',
    'esomeprazole magnesium': 'Esomeprazole Magnesium',
    'famotidine': 'Famotidine',
    'omeprazole': 'Omeprazole',
    'pseudoephedrine hcl': 'Pseudoephedrine HCl',
    'phenylephrine hcl': 'Phenylephrine HCl',
    'diphenhydramine hcl': 'Diphenhydramine HCl',
    'loratadine': 'Loratadine',
    'cetirizine hcl': 'Cetirizine HCl'
  };

  function getCanonicalIngredientName(name) {
    const clean = (name || '').trim().toLowerCase();
    return INGREDIENT_ALIASES[clean] || name;
  }

  function getIngredientDose(med, ingredientName) {
    if (!med || !med.activeIngredients) return undefined;
    if (med.activeIngredients[ingredientName] !== undefined) {
      return med.activeIngredients[ingredientName];
    }
    const targetCanonical = getCanonicalIngredientName(ingredientName);
    for (const [key, val] of Object.entries(med.activeIngredients)) {
      if (getCanonicalIngredientName(key) === targetCanonical) {
        return val;
      }
    }
    return undefined;
  }

  // ==========================================================================
  // 2. INTERACTION RULES ENGINE
  // ==========================================================================
  const INTERACTION_RULES = [
    {
      id: 'duplicate_paracetamol_acetaminophen',
      type: 'duplicate',
      ingredientAliases: ['Paracetamol', 'Acetaminophen'],
      title: 'Duplicate Paracetamol / Acetaminophen',
      typeLabel: '🚨 Duplicate Active Ingredient',
      explanation: (medA, medB, doseA, doseB) =>
        `Both <strong>${medA}</strong> and <strong>${medB}</strong> contain Paracetamol/Acetaminophen (APAP).${doseA && doseB ? ` Combined dose: <strong>${doseA + doseB}mg</strong>.` : ''} The recommended maximum single dose is 1,000mg and max daily limit is 4,000mg. Taking multiple APAP products simultaneously creates a severe acute hepatotoxicity (liver injury) risk.`,
      ruleSource: 'FDA Acetaminophen Safety Warning / WHO Essential Medicines',
      ruleDetail: 'Duplicate APAP analgesic ingredient — acute liver injury risk. Max single dose 1000mg; max daily 4000mg.'
    },
    {
      id: 'duplicate_ibuprofen',
      type: 'duplicate',
      ingredient: 'Ibuprofen',
      title: 'Duplicate Ibuprofen (NSAID)',
      typeLabel: '🚨 Duplicate NSAID',
      explanation: (medA, medB, doseA, doseB) =>
        `Both <strong>${medA}</strong> and <strong>${medB}</strong> contain Ibuprofen. Combined dose: <strong>${doseA + doseB}mg</strong>. Taking two NSAID sources simultaneously increases the risk of GI bleeding, ulceration, and renal toxicity without therapeutic benefit.`,
      ruleSource: 'BNF / FDA NSAID Safety Label',
      ruleDetail: 'Duplicate NSAID. Do not combine without physician guidance — GI and renal risk.'
    },
    {
      id: 'duplicate_naproxen',
      type: 'duplicate',
      ingredientAliases: ['Naproxen', 'Naproxen Sodium', 'Naproxen Sodium 220Mg'],
      title: 'Duplicate Naproxen (NSAID)',
      typeLabel: '🚨 Duplicate NSAID',
      explanation: (medA, medB, doseA, doseB) =>
        `Both <strong>${medA}</strong> and <strong>${medB}</strong> contain Naproxen / Naproxen Sodium. Combined dose: <strong>${doseA + doseB}mg</strong>. Stacking naproxen formulations provides no extra pain relief while doubling the risk of stomach ulcers and kidney stress.`,
      ruleSource: 'FDA NSAID Medication Guide / American College of Rheumatology',
      ruleDetail: 'Duplicate Naproxen NSAID. High cumulative dose increases gastric perforation and cardiovascular risks.'
    },
    {
      id: 'nsaid_cross_nsaid',
      type: 'duplicate',
      ingredients: ['Ibuprofen', 'Naproxen'],
      title: 'Dual NSAID Combination (Ibuprofen + Naproxen)',
      typeLabel: '🚨 Duplicate NSAID Class',
      explanation: (medA, medB) =>
        `<strong>${medA}</strong> and <strong>${medB}</strong> are both Nonsteroidal Anti-inflammatory Drugs (NSAIDs). Combining different NSAIDs compounds gastric mucosal toxicity and increases cardiovascular event risk without additive analgesic benefit.`,
      ruleSource: 'FDA Black Box Warning NSAIDs / NICE Guidelines',
      ruleDetail: 'Concurrent use of multiple systemic NSAIDs is contraindicated due to increased GI toxicity.'
    },
    {
      id: 'nsaid_aspirin',
      type: 'interaction',
      ingredients: ['Ibuprofen', 'Acetylsalicylic Acid'],
      title: 'Ibuprofen Blocks Aspirin',
      typeLabel: '⚠️ Known Interaction',
      explanation: (medA, medB) =>
        `<strong>${medA}</strong> (Ibuprofen) competitively binds to platelet COX-1 receptors, blocking the cardioprotective antiplatelet effect of <strong>${medB}</strong> (Aspirin). If taking low-dose aspirin for cardiovascular protection, separate doses by at least 2 hours.`,
      ruleSource: 'FDA Drug Safety Communication 2006 / NEJM',
      ruleDetail: 'COX-1 competitive binding. Ibuprofen blocks aspirin antiplatelet effect. Take aspirin first, wait 2+ hours.'
    },
    {
      id: 'dual_antihistamine',
      type: 'duplicate',
      ingredients: ['Loratadine', 'Cetirizine HCl'],
      title: 'Dual Antihistamine Load',
      typeLabel: '⚠️ Same Therapeutic Class',
      explanation: (medA, medB) =>
        `<strong>${medA}</strong> and <strong>${medB}</strong> are both second-generation H1 antihistamines. Combining them doubles the antihistamine load without additional therapeutic benefit and increases side effects like dry mouth, drowsiness, and urinary retention.`,
      ruleSource: 'BNF Antihistamine Guidance / WHO',
      ruleDetail: 'Same receptor class (H1 antihistamine). No clinical benefit from combining. Doubled side-effect risk.'
    },
    {
      id: 'antihistamine_nsaid_timing',
      type: 'timing',
      ingredients: ['Diphenhydramine HCl', 'Ibuprofen'],
      title: 'Timing Caution: Antihistamine + NSAID',
      typeLabel: '🕐 Timing Conflict',
      explanation: (medA, medB) =>
        `<strong>${medA}</strong> (containing Diphenhydramine) combined with <strong>${medB}</strong> (Ibuprofen) may reduce ibuprofen absorption rate due to anticholinergic slowing of gastric emptying. Recommended: separate doses by at least 2–4 hours.`,
      ruleSource: 'Clinical Pharmacokinetics — Anticholinergic GI Effects',
      ruleDetail: 'Anticholinergic slowing of gastric emptying reduces NSAID absorption rate. Stagger doses by 2–4h.'
    },
    {
      id: 'duplicate_phenylephrine',
      type: 'duplicate',
      ingredient: 'Phenylephrine HCl',
      title: 'Duplicate Decongestant (Phenylephrine)',
      typeLabel: '🚨 Duplicate Decongestant',
      explanation: (medA, medB, doseA, doseB) =>
        `Both <strong>${medA}</strong> and <strong>${medB}</strong> contain Phenylephrine HCl. Combined dose: <strong>${doseA + doseB}mg</strong>. Excessive phenylephrine can cause elevated blood pressure, palpitations, and cardiovascular stress.`,
      ruleSource: 'FDA OTC Monograph Decongestants',
      ruleDetail: 'Duplicate sympathomimetic. Cardiovascular risk from combined alpha-agonist stimulation.'
    },
    {
      id: 'duplicate_povidone_iodine',
      type: 'duplicate',
      ingredient: 'Povidone-Iodine',
      title: 'Duplicate Antiseptic (Povidone-Iodine)',
      typeLabel: '🚨 Duplicate Antiseptic',
      explanation: (medA, medB) =>
        `Both <strong>${medA}</strong> and <strong>${medB}</strong> contain Povidone-Iodine. Using multiple iodine antiseptics simultaneously increases localized dermal irritation and systemic iodine absorption.`,
      ruleSource: 'FDA Topical Antimicrobial Monograph',
      ruleDetail: 'Duplicate topical antiseptic. Monitor for skin sensitivity and localized irritation.'
    },
    {
      id: 'duplicate_tetrahydrozoline',
      type: 'duplicate',
      ingredientAliases: ['Tetrahydrozoline Hcl', 'Tetrahydrozoline'],
      title: 'Duplicate Decongestant (Tetrahydrozoline)',
      typeLabel: '🚨 Duplicate Vasoconstrictor',
      explanation: (medA, medB) =>
        `Both <strong>${medA}</strong> and <strong>${medB}</strong> contain Tetrahydrozoline HCl. Repeated simultaneous administration of ocular vasoconstrictors increases the risk of severe rebound hyperemia (rebound redness) and ocular dryness.`,
      ruleSource: 'FDA OTC Ophthalmic Drug Products Monograph',
      ruleDetail: 'Duplicate ophthalmic vasoconstrictor. High risk of rebound conjunctival hyperemia.'
    },
    {
      id: 'duplicate_peg400',
      type: 'duplicate',
      ingredient: 'Polyethylene Glycol 400',
      title: 'Duplicate Eye Lubricant (PEG 400)',
      typeLabel: '⚠️ Duplicate Formulation',
      explanation: (medA, medB) =>
        `Both <strong>${medA}</strong> and <strong>${medB}</strong> contain Polyethylene Glycol 400. Using multiple identical lubricant eye drop formulations concurrently is redundant and unnecessary.`,
      ruleSource: 'FDA Ophthalmic Demulcent Monograph',
      ruleDetail: 'Redundant ophthalmic lubricant formulations.'
    },
    {
      id: 'duplicate_menthol',
      type: 'duplicate',
      ingredient: 'Menthol',
      title: 'Duplicate Menthol Exposure',
      typeLabel: '⚠️ Duplicate Active Ingredient',
      explanation: (medA, medB) =>
        `Both <strong>${medA}</strong> and <strong>${medB}</strong> contain Menthol across different delivery routes (oral lozenge and topical balm). Monitor cumulative exposure to avoid mucous membrane irritation.`,
      ruleSource: 'FDA OTC Oral Health / Topical Analgesic Monograph',
      ruleDetail: 'Duplicate menthol formulation across oral and topical routes.'
    },
    {
      id: 'dual_acid_suppression',
      type: 'interaction',
      ingredients: ['Esomeprazole Magnesium', 'Famotidine'],
      title: 'Dual Acid Suppression (PPI + H2RA)',
      typeLabel: '⚠️ Concurrent Acid Reducer',
      explanation: (medA, medB) =>
        `<strong>${medA}</strong> (Proton Pump Inhibitor) and <strong>${medB}</strong> (H2-Receptor Antagonist) both inhibit gastric acid production. Simultaneous OTC use without medical supervision is not recommended due to profound hypochlorhydria risk.`,
      ruleSource: 'American College of Gastroenterology (ACG) Clinical Guidelines',
      ruleDetail: 'Dual acid suppression therapy. Consult a physician before combining OTC acid reducers.'
    }
  ];

  // ==========================================================================
  // 3. MEDICINE CABINET (localStorage-backed)
  // ==========================================================================
  const CABINET_KEY = 'farmakode_cabinet_v2';

  const Cabinet = {
    items: [],

    load() {
      try {
        const raw = localStorage.getItem(CABINET_KEY);
        this.items = raw ? JSON.parse(raw) : [];
      } catch (e) {
        this.items = [];
      }
    },

    save() {
      localStorage.setItem(CABINET_KEY, JSON.stringify(this.items));
      updateNavBadges();
    },

    add(medId) {
      if (!this.has(medId) && MED_DATABASE[medId]) {
        this.items.push(medId);
        this.save();
        return true;
      }
      return false;
    },

    remove(medId) {
      this.items = this.items.filter(id => id !== medId);
      this.save();
    },

    has(medId) {
      return this.items.includes(medId);
    },

    getMeds() {
      return this.items.map(id => MED_DATABASE[id]).filter(Boolean);
    },

    count() {
      return this.items.length;
    }
  };

  Cabinet.load();

  // ==========================================================================
  // 4. SAFETY ANALYSIS ENGINE
  // ==========================================================================
  function analyzeSafety(customMeds = null) {
    const meds = customMeds || Cabinet.getMeds();
    const warnings = [];

    if (meds.length < 2) return warnings;

    // Compare each pair
    for (let i = 0; i < meds.length; i++) {
      for (let j = i + 1; j < meds.length; j++) {
        const medA = meds[i];
        const medB = meds[j];

        // 1. Check specialized interaction rules
        for (const rule of INTERACTION_RULES) {
          // Duplicate rule with ingredientAliases
          if (rule.ingredientAliases && rule.ingredientAliases.length > 0) {
            let doseA = undefined;
            let doseB = undefined;
            for (const alias of rule.ingredientAliases) {
              const dA = getIngredientDose(medA, alias);
              const dB = getIngredientDose(medB, alias);
              if (dA !== undefined && doseA === undefined) doseA = dA;
              if (dB !== undefined && doseB === undefined) doseB = dB;
            }
            if (doseA !== undefined && doseB !== undefined) {
              const alreadyFlagged = warnings.some(w =>
                w.rule.id === rule.id &&
                ((w.medA.id === medA.id && w.medB.id === medB.id) ||
                 (w.medA.id === medB.id && w.medB.id === medA.id))
              );
              if (!alreadyFlagged) {
                warnings.push({
                  rule,
                  medA,
                  medB,
                  doseA,
                  doseB,
                  key: `${rule.id}_${medA.id}_${medB.id}`
                });
              }
            }
          }
          // Duplicate single ingredient rule
          else if (rule.ingredient) {
            const doseA = getIngredientDose(medA, rule.ingredient);
            const doseB = getIngredientDose(medB, rule.ingredient);
            if (doseA !== undefined && doseB !== undefined) {
              const alreadyFlagged = warnings.some(w =>
                w.rule.id === rule.id &&
                ((w.medA.id === medA.id && w.medB.id === medB.id) ||
                 (w.medA.id === medB.id && w.medB.id === medA.id))
              );
              if (!alreadyFlagged) {
                warnings.push({
                  rule,
                  medA,
                  medB,
                  doseA,
                  doseB,
                  key: `${rule.id}_${medA.id}_${medB.id}`
                });
              }
            }
          }
          // Two-ingredient interaction rule
          else if (rule.ingredients && rule.ingredients.length === 2) {
            const [ingA, ingB] = rule.ingredients;
            const medAhasA = getIngredientDose(medA, ingA) !== undefined;
            const medAhasB = getIngredientDose(medA, ingB) !== undefined;
            const medBhasA = getIngredientDose(medB, ingA) !== undefined;
            const medBhasB = getIngredientDose(medB, ingB) !== undefined;

            const crossMatch = (medAhasA && medBhasB) || (medAhasB && medBhasA);

            if (crossMatch) {
              const alreadyFlagged = warnings.some(w =>
                w.rule.id === rule.id &&
                ((w.medA.id === medA.id && w.medB.id === medB.id) ||
                 (w.medA.id === medB.id && w.medB.id === medA.id))
              );
              if (!alreadyFlagged) {
                warnings.push({
                  rule,
                  medA,
                  medB,
                  doseA: null,
                  doseB: null,
                  key: `${rule.id}_${medA.id}_${medB.id}`
                });
              }
            }
          }
        }

        // 2. Generic duplicate ingredient detection fallback
        const ingredientsA = Object.keys(medA.activeIngredients || {});
        const ingredientsB = Object.keys(medB.activeIngredients || {});

        for (const ingA of ingredientsA) {
          const canonicalA = getCanonicalIngredientName(ingA);
          for (const ingB of ingredientsB) {
            const canonicalB = getCanonicalIngredientName(ingB);
            if (canonicalA === canonicalB) {
              const alreadyFlagged = warnings.some(w =>
                (w.medA.id === medA.id && w.medB.id === medB.id) ||
                (w.medA.id === medB.id && w.medB.id === medA.id)
              );
              if (!alreadyFlagged) {
                const doseA = medA.activeIngredients[ingA];
                const doseB = medB.activeIngredients[ingB];
                const dynRule = {
                  id: `dup_gen_${canonicalA.toLowerCase().replace(/[^a-z0-9]/g, '_')}`,
                  type: 'duplicate',
                  ingredient: canonicalA,
                  title: `Duplicate ${canonicalA}`,
                  typeLabel: '🚨 Duplicate Active Ingredient',
                  explanation: (mA, mB, dA, dB) =>
                    `Both <strong>${mA}</strong> and <strong>${mB}</strong> contain ${canonicalA}.${dA && dB ? ` Combined dose: <strong>${dA + dB}mg</strong>.` : ''} Taking multiple products with the same active ingredient creates an unintended stacked dose hazard.`,
                  ruleSource: 'FDA Drug Safety Standards / OpenFDA Monograph',
                  ruleDetail: `Duplicate active ingredient (${canonicalA}). Avoid combining without physician guidance.`
                };
                warnings.push({
                  rule: dynRule,
                  medA,
                  medB,
                  doseA: typeof doseA === 'number' ? doseA : null,
                  doseB: typeof doseB === 'number' ? doseB : null,
                  key: `${dynRule.id}_${medA.id}_${medB.id}`
                });
              }
            }
          }
        }
      }
    }

    return warnings;
  }

  function getMedConflictIds() {
    const warnings = analyzeSafety();
    const conflictIds = new Set();
    warnings.forEach(w => {
      conflictIds.add(w.medA.id);
      conflictIds.add(w.medB.id);
    });
    return conflictIds;
  }

  /**
   * Returns active conflicts (if med is in cabinet) and hypothetical conflicts (if med would be added to cabinet)
   */
  function getConflictsForMed(medId) {
    const currentMeds = Cabinet.getMeds();
    const med = MED_DATABASE[medId];
    if (!med) return { active: [], hypothetical: [] };

    const inCabinet = Cabinet.has(medId);
    let active = [];
    if (inCabinet) {
      const activeWarnings = analyzeSafety(currentMeds);
      active = activeWarnings
        .filter(w => w.medA.id === medId || w.medB.id === medId)
        .map(w => ({
          ...w,
          otherMed: w.medA.id === medId ? w.medB : w.medA,
          combinedDose: w.doseA !== null && w.doseB !== null ? `${w.doseA + w.doseB}mg` : null
        }));
    }

    let hypothetical = [];
    if (!inCabinet && currentMeds.length > 0) {
      const hypotheticalMeds = [...currentMeds, med];
      const hypoWarnings = analyzeSafety(hypotheticalMeds);
      hypothetical = hypoWarnings
        .filter(w => w.medA.id === medId || w.medB.id === medId)
        .map(w => ({
          ...w,
          otherMed: w.medA.id === medId ? w.medB : w.medA,
          combinedDose: w.doseA !== null && w.doseB !== null ? `${w.doseA + w.doseB}mg` : null
        }));
    }

    return { active, hypothetical };
  }

  // Header Nav Badges
  function updateNavBadges() {
    const navMedicines = document.getElementById('navMedicines');
    const navSafety = document.getElementById('navSafety');
    const count = Cabinet.count();
    const warnings = analyzeSafety();

    if (navMedicines) {
      const existingBadge = navMedicines.querySelector('.nav-count-badge');
      if (existingBadge) existingBadge.remove();
      if (count > 0) {
        const badge = document.createElement('span');
        badge.className = 'nav-count-badge';
        badge.textContent = count;
        navMedicines.appendChild(badge);
      }
    }

    if (navSafety) {
      const existingBadge = navSafety.querySelector('.nav-danger-badge, .nav-safe-badge');
      if (existingBadge) existingBadge.remove();
      if (warnings.length > 0) {
        const badge = document.createElement('span');
        badge.className = 'nav-danger-badge';
        badge.textContent = `🚨 ${warnings.length}`;
        navSafety.appendChild(badge);
      } else if (count >= 2) {
        const badge = document.createElement('span');
        badge.className = 'nav-safe-badge';
        badge.textContent = '✓';
        navSafety.appendChild(badge);
      }
    }
  }

  // ==========================================================================
  // 5. SPA ROUTER
  // ==========================================================================
  const pages = document.querySelectorAll('.page');
  const navItems = document.querySelectorAll('.nav-item[data-page]');

  function navigateTo(pageId, pushState = true) {
    pages.forEach(p => p.classList.remove('active'));
    navItems.forEach(n => n.classList.remove('nav-active'));

    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
      targetPage.classList.add('active');
      // Trigger scroll reveal for newly visible elements
      setTimeout(() => initReveal(), 50);
    }

    navItems.forEach(n => {
      if (n.getAttribute('data-page') === pageId) {
        n.classList.add('nav-active');
      }
    });

    // Render page content
    if (pageId === 'home') renderHomePage();
    else if (pageId === 'medicines') renderMedicinesPage();
    else if (pageId === 'safety') renderSafetyPage();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (pushState) {
      history.pushState({ page: pageId }, '', `#${pageId}`);
    }
  }

  // Attach nav link clicks
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-page]');
    if (el) {
      e.preventDefault();
      const page = el.getAttribute('data-page');
      navigateTo(page);
      // Close mobile nav if open
      const navLinks = document.getElementById('navLinks');
      const mobileToggle = document.getElementById('mobileToggle');
      if (navLinks) navLinks.classList.remove('mobile-open');
      if (mobileToggle) {
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Browser back/forward
  window.addEventListener('popstate', (e) => {
    const page = e.state?.page || 'home';
    navigateTo(page, false);
  });

  // ==========================================================================
  // 6. SCROLL REVEAL
  // ==========================================================================
  function initReveal() {
    const revealElements = document.querySelectorAll('.reveal-fade:not(.revealed), .reveal-scale:not(.revealed)');
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('revealed'));
      return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));
  }

  // ==========================================================================
  // 7. HEADER ELEVATION
  // ==========================================================================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Mobile toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksEl = document.getElementById('navLinks');
  if (mobileToggle && navLinksEl) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinksEl.classList.toggle('mobile-open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (e) => {
      if (navLinksEl.classList.contains('mobile-open') && !e.target.closest('#header')) {
        navLinksEl.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ==========================================================================
  // ==========================================================================
  // 8. HOME PAGE RENDERER & CONFLICT DETECTION
  // ==========================================================================
  let activeCategory = 'all';

  function renderHomePage() {
    updateHomeSafetyBanner();
    renderProductGrid();
    attachCategoryPills();
    updateNavBadges();
    initReveal();
  }

  function attachCategoryPills() {
    const pills = document.querySelectorAll('.category-pill');
    pills.forEach(pill => {
      pill.onclick = () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeCategory = pill.getAttribute('data-category');
        renderProductGrid(true);
      };
    });
  }

  // Live Home Safety / Cabinet Conflict Banner
  function updateHomeSafetyBanner() {
    const section = document.getElementById('homeSafetySection');
    const container = document.getElementById('homeSafetyBannerContainer');
    if (!section || !container) return;

    const count = Cabinet.count();
    const warnings = analyzeSafety();

    if (count === 0) {
      section.style.display = 'none';
      return;
    }

    section.style.display = 'block';

    if (warnings.length > 0) {
      // Danger / Conflict active state
      const conflictSummary = warnings.map(w =>
        `<span class="conflict-item-chip"><strong>${w.medA.brand}</strong> + <strong>${w.medB.brand}</strong> (${w.rule.title})</span>`
      ).join('');

      container.innerHTML = `
        <div class="home-safety-banner banner-danger">
          <div class="home-safety-banner-icon-wrap">🚨</div>
          <div class="home-safety-banner-content">
            <div class="home-safety-banner-title">
              <span>Contradiction Warning Detected</span>
              <span class="home-safety-pill danger">${warnings.length} Active Conflict${warnings.length > 1 ? 's' : ''}</span>
            </div>
            <div class="home-safety-banner-text">
              Active ingredient conflict found in your cart/cabinet: ${conflictSummary}. Taking these simultaneously risks duplicate dosing or adverse interactions.
            </div>
          </div>
          <div class="home-safety-banner-actions">
            <button class="btn-pill btn-sm btn-danger-pill" data-page="safety">View Safety Dashboard</button>
            <button class="btn-pill btn-sm btn-subtle-pill" data-page="medicines">Manage Cabinet (${count})</button>
          </div>
        </div>
      `;
    } else if (count >= 2) {
      // Verified Safe state
      container.innerHTML = `
        <div class="home-safety-banner banner-safe">
          <div class="home-safety-banner-icon-wrap">✓</div>
          <div class="home-safety-banner-content">
            <div class="home-safety-banner-title">
              <span>Cabinet Verified Safe</span>
              <span class="home-safety-pill safe">${count} Medicines Active</span>
            </div>
            <div class="home-safety-banner-text">
              All medicines currently in your cabinet have distinct active ingredients. No duplicate dosages or adverse interactions detected.
            </div>
          </div>
          <div class="home-safety-banner-actions">
            <button class="btn-pill btn-sm btn-safe-pill" data-page="medicines">Open Cabinet</button>
            <button class="btn-pill btn-sm btn-subtle-pill" data-page="safety">Safety Report</button>
          </div>
        </div>
      `;
    } else {
      // 1 medicine informational state
      const firstMed = Cabinet.getMeds()[0];
      container.innerHTML = `
        <div class="home-safety-banner banner-info">
          <div class="home-safety-banner-icon-wrap">💊</div>
          <div class="home-safety-banner-content">
            <div class="home-safety-banner-title">
              <span>${firstMed ? firstMed.brand : '1 Medicine'} in Cabinet</span>
              <span class="home-safety-pill info">1 Item</span>
            </div>
            <div class="home-safety-banner-text">
              Add another medicine to automatically screen for duplicate active ingredients, dosage limits, and timing conflicts in real time.
            </div>
          </div>
          <div class="home-safety-banner-actions">
            <button class="btn-pill btn-sm btn-subtle-pill" data-page="medicines">Open Cabinet</button>
          </div>
        </div>
      `;
    }
  }

  function getCardState(med) {
    const inCabinet = Cabinet.has(med.id);
    const { active, hypothetical } = getConflictsForMed(med.id);
    const hasActiveConflict = inCabinet && active.length > 0;
    const isSafeInCabinet = inCabinet && active.length === 0;
    const wouldConflict = !inCabinet && hypothetical.length > 0;
    return { inCabinet, active, hypothetical, hasActiveConflict, isSafeInCabinet, wouldConflict };
  }

  function getCardStateClass(state) {
    if (state.hasActiveConflict) return 'in-cabinet has-conflict';
    if (state.isSafeInCabinet) return 'in-cabinet is-safe';
    if (state.wouldConflict) return 'would-conflict';
    return '';
  }

  function getCardBadgeHtml(state) {
    if (state.hasActiveConflict) {
      return `
        <div class="card-conflict-badge" title="Contradiction in your cabinet">
          <span class="badge-pulse-dot"></span>
          <span>🚨 Contradiction</span>
        </div>
      `;
    }
    if (state.wouldConflict) {
      return `
        <div class="card-potential-badge" title="Conflicts with a medicine in your cabinet">
          <span>⚠️ Conflict Warning</span>
        </div>
      `;
    }
    if (state.isSafeInCabinet) {
      return `
        <div class="card-safe-badge">
          <span>✓ In Cabinet</span>
        </div>
      `;
    }
    return '';
  }

  function getCardConflictSnippetHtml(state) {
    if (state.hasActiveConflict) {
      const topConflict = state.active[0];
      return `
        <div class="card-conflict-callout">
          <div class="conflict-callout-header">🚨 ${topConflict.rule.title}</div>
          <div class="conflict-callout-detail">
            Conflicts with <strong>${topConflict.otherMed.brand}</strong>${topConflict.combinedDose ? ` (${topConflict.combinedDose} combined)` : ''}.
          </div>
        </div>
      `;
    }
    if (state.wouldConflict) {
      const topHypo = state.hypothetical[0];
      return `
        <div class="card-potential-callout">
          <div class="potential-callout-header">⚠️ Warning: Contradiction</div>
          <div class="potential-callout-detail">
            Adding this conflicts with <strong>${topHypo.otherMed.brand}</strong> in cabinet (${topHypo.rule.title}).
          </div>
        </div>
      `;
    }
    return '';
  }

  function getCardActionButtonsHtml(med, state) {
    if (state.hasActiveConflict) {
      return `
        <button class="btn-add-medicine in-conflict" data-med-id="${med.id}" aria-label="Conflict detected in cabinet">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span>Contradiction</span>
        </button>
        <button class="btn-remove-mini" data-remove-med-id="${med.id}" title="Remove from cabinet" aria-label="Remove ${med.brand}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      `;
    }
    if (state.isSafeInCabinet) {
      return `
        <button class="btn-add-medicine added" data-med-id="${med.id}" aria-label="Added to cabinet">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Added</span>
        </button>
        <button class="btn-remove-mini" data-remove-med-id="${med.id}" title="Remove from cabinet" aria-label="Remove ${med.brand}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      `;
    }
    if (state.wouldConflict) {
      return `
        <button class="btn-add-medicine warn-add" data-med-id="${med.id}" aria-label="Add medicine (causes conflict)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>+ Add (+Conflict)</span>
        </button>
      `;
    }
    return `
      <button class="btn-add-medicine" data-med-id="${med.id}" aria-label="Add to cabinet">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        <span>Add</span>
      </button>
    `;
  }

  function updateCardInPlace(card, med) {
    const state = getCardState(med);
    const stateClass = getCardStateClass(state);

    card.className = `home-product-card ${stateClass}`.trim();
    // Prevent CSS entrance animation from re-triggering on updates
    card.style.animation = 'none';
    card.style.opacity = '1';
    card.style.transform = 'none';

    const badgeSlot = card.querySelector('.card-badge-slot');
    if (badgeSlot) badgeSlot.innerHTML = getCardBadgeHtml(state);

    const conflictHeaderSlot = card.querySelector('.card-header-conflict-slot');
    if (conflictHeaderSlot) {
      conflictHeaderSlot.innerHTML = state.hasActiveConflict ? `<span class="danger-pill-mini">Conflict</span>` : '';
    }

    const conflictSlot = card.querySelector('.card-conflict-slot');
    if (conflictSlot) conflictSlot.innerHTML = getCardConflictSnippetHtml(state);

    const actionSlot = card.querySelector('.card-action-slot');
    if (actionSlot) actionSlot.innerHTML = getCardActionButtonsHtml(med, state);
  }

  function updateAllProductCardsInPlace() {
    const grid = document.getElementById('homeProductGrid');
    if (!grid) return;
    const cards = grid.querySelectorAll('.home-product-card');
    cards.forEach(card => {
      const medId = card.getAttribute('data-med-id');
      const med = MED_DATABASE[medId];
      if (med) updateCardInPlace(card, med);
    });
  }

  let isGridEventsAttached = false;
  function ensureGridEvents(grid) {
    if (isGridEventsAttached || !grid) return;
    isGridEventsAttached = true;

    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.home-product-card');
      if (!card) return;
      const medId = card.getAttribute('data-med-id');
      const med = MED_DATABASE[medId];
      if (!med) return;

      const removeBtn = e.target.closest('.btn-remove-mini');
      if (removeBtn) {
        e.stopPropagation();
        Cabinet.remove(med.id);
        updateAllProductCardsInPlace();
        updateHomeSafetyBanner();
        updateNavBadges();
        return;
      }

      const addBtn = e.target.closest('.btn-add-medicine');
      if (addBtn) {
        e.stopPropagation();
        const inCabinet = Cabinet.has(med.id);
        const { active, hypothetical } = getConflictsForMed(med.id);
        const hasActiveConflict = inCabinet && active.length > 0;
        const wouldConflict = !inCabinet && hypothetical.length > 0;

        if (hasActiveConflict) {
          navigateTo('safety');
          return;
        }

        if (!inCabinet) {
          Cabinet.add(med.id);
          if (wouldConflict) {
            showConflictToast(med.brand, hypothetical);
          } else {
            showAddToast(med.brand);
          }
          updateAllProductCardsInPlace();
          updateHomeSafetyBanner();
          updateNavBadges();
        }
        return;
      }

      // Clicking detail icon or the card body opens detail modal
      openDetailModal(med.id);
    });
  }

  function renderProductGrid(forceRebuild = false) {
    const grid = document.getElementById('homeProductGrid');
    if (!grid) return;

    ensureGridEvents(grid);

    // If grid is already rendered for activeCategory and not a forced rebuild, update states in-place
    if (!forceRebuild && grid.getAttribute('data-rendered-category') === activeCategory && grid.children.length > 0) {
      updateAllProductCardsInPlace();
      return;
    }

    const allMeds = Object.values(MED_DATABASE);
    const filtered = activeCategory === 'all'
      ? allMeds
      : allMeds.filter(m => m.category === activeCategory);

    grid.setAttribute('data-rendered-category', activeCategory);
    grid.innerHTML = '';

    filtered.forEach((med, idx) => {
      const state = getCardState(med);
      const cardStateClass = getCardStateClass(state);

      const card = document.createElement('div');
      card.className = `home-product-card ${cardStateClass}`.trim();
      card.setAttribute('data-med-id', med.id);
      card.style.animationDelay = `${idx * 0.04}s`;

      card.innerHTML = `
        <div class="product-image-box">
          <img src="${med.image}" alt="${med.brand}" class="product-img" loading="lazy" onerror="this.onerror=null; this.src=IMAGE_MAP['${med.category}'] || 'assets/med_paracetamol.jpg';">
          <div class="floating-meta-chip">${med.strength}</div>
          <div class="card-badge-slot">${getCardBadgeHtml(state)}</div>
        </div>
        <div class="product-card-body">
          <div class="product-card-header-row">
            <span class="product-category-tag">${med.category}</span>
            <span class="card-header-conflict-slot">${state.hasActiveConflict ? `<span class="danger-pill-mini">Conflict</span>` : ''}</span>
          </div>
          <h4 class="product-brand-name">${med.brand}</h4>
          <p class="product-ingredient-line">${Object.keys(med.activeIngredients).join(' · ')}</p>
          <span class="product-strength-tag">${med.strength}</span>
          <div class="card-conflict-slot">${getCardConflictSnippetHtml(state)}</div>
        </div>
        <div class="product-card-footer">
          <div class="card-action-slot" style="display: flex; gap: 8px; flex: 1; align-items: center;">${getCardActionButtonsHtml(med, state)}</div>
          <button class="btn-detail-icon" data-detail-id="${med.id}" aria-label="View ${med.brand} details">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </button>
        </div>
      `;

      grid.appendChild(card);
    });

    // No results state
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--text-muted); font-family: var(--font-heading);">
          No medicines in this category yet.
        </div>
      `;
    }
  }

  // Toast notifications
  function showAddToast(brandName) {
    let toast = document.getElementById('addToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'addToast';
      toast.className = 'site-toast safe-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <span><strong>${brandName}</strong> added to cabinet</span>`;
    toast.style.opacity = '1';
    toast.style.visibility = 'visible';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.visibility = 'hidden';
    }, 2500);
  }

  function showConflictToast(brandName, conflicts) {
    let toast = document.getElementById('conflictToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'conflictToast';
      toast.className = 'site-toast conflict-toast';
      document.body.appendChild(toast);
    }

    const topConflict = conflicts[0];
    const otherName = topConflict ? topConflict.otherMed.brand : 'another medicine';
    const reason = topConflict ? topConflict.rule.title : 'Duplicate ingredient';

    toast.innerHTML = `
      <div class="toast-conflict-inner">
        <div class="toast-conflict-icon">🚨</div>
        <div class="toast-conflict-text">
          <strong>Contradiction Warning!</strong>
          <span><strong>${brandName}</strong> conflicts with <strong>${otherName}</strong> (${reason}).</span>
        </div>
        <button class="toast-conflict-action" id="toastReviewBtn">Review Safety</button>
      </div>
    `;

    document.getElementById('toastReviewBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      toast.style.opacity = '0';
      toast.style.visibility = 'hidden';
      navigateTo('safety');
    });

    toast.style.opacity = '1';
    toast.style.visibility = 'visible';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.visibility = 'hidden';
    }, 5000);
  }

  // ==========================================================================
  // 9. MEDICINES PAGE RENDERER
  // ==========================================================================
  function renderMedicinesPage() {
    renderCabinetGrid();
    updateInlineSafetyBanner();
    updateNavBadges();
  }

  function renderCabinetGrid() {
    const grid = document.getElementById('cabinetGrid');
    const emptyState = document.getElementById('cabinetEmptyState');
    if (!grid) return;

    const meds = Cabinet.getMeds();
    const conflictIds = getMedConflictIds();

    if (meds.length === 0) {
      grid.style.display = 'none';
      if (emptyState) emptyState.style.display = 'flex';
      return;
    }

    grid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';
    grid.innerHTML = '';

    meds.forEach((med, idx) => {
      const hasConflict = conflictIds.has(med.id);
      const card = document.createElement('div');
      card.className = `cabinet-card${hasConflict ? ' conflict' : ''}`;
      card.style.animationDelay = `${idx * 0.07}s`;

      let statusClass = 'status-added';
      let statusText = '✓ Added';
      if (hasConflict) {
        statusClass = 'status-conflict';
        statusText = '⚠ Conflict Detected';
      } else if (Cabinet.count() >= 2) {
        statusClass = 'status-safe';
        statusText = '✓ No Conflicts';
      }

      card.innerHTML = `
        <div class="cabinet-card-img-wrap">
          <img src="${med.image}" alt="${med.brand}" class="cabinet-card-img" loading="lazy" onerror="this.onerror=null; this.src=IMAGE_MAP['${med.category}'] || 'assets/med_paracetamol.jpg';">
        </div>
        <div class="cabinet-card-body">
          <span class="cabinet-card-brand">${med.brand}</span>
          <span class="cabinet-card-ingredient">${Object.entries(med.activeIngredients).map(([k, v]) => `${k} ${v}mg`).join(' · ')}</span>
          <span class="cabinet-card-status ${statusClass}">${statusText}</span>
        </div>
        <div class="cabinet-card-actions">
          <button class="btn-remove" data-remove-id="${med.id}" aria-label="Remove ${med.brand}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      `;

      const removeBtn = card.querySelector('.btn-remove');
      removeBtn.addEventListener('click', () => {
        Cabinet.remove(med.id);
        renderMedicinesPage();
        // Also re-render home grid if on home or when returning
        if (document.getElementById('page-home').classList.contains('active')) {
          renderProductGrid();
          updateHomeSafetyBanner();
        }
      });

      grid.appendChild(card);
    });
  }

  function updateInlineSafetyBanner() {
    const banner = document.getElementById('inlineSafetyBanner');
    if (!banner) return;
    const warnings = analyzeSafety();
    if (warnings.length > 0) {
      banner.style.display = 'flex';
      const title = document.getElementById('inlineBannerTitle');
      const sub = document.getElementById('inlineBannerSub');
      if (title) title.textContent = `${warnings.length} potential conflict${warnings.length > 1 ? 's' : ''} detected`;
      if (sub) sub.textContent = 'View Safety Dashboard for details and explanations';
    } else {
      banner.style.display = 'none';
    }
  }

  // ==========================================================================
  // 10. SAFETY PAGE RENDERER
  // ==========================================================================
  function renderSafetyPage() {
    const statusCard = document.getElementById('safetyStatusCard');
    const warningsList = document.getElementById('safetyWarningsList');
    const emptyState = document.getElementById('safetyEmptyState');
    if (!statusCard || !warningsList) return;

    const meds = Cabinet.getMeds();
    const warnings = analyzeSafety();
    updateNavBadges();

    if (meds.length < 2) {
      statusCard.style.display = 'none';
      warningsList.style.display = 'none';
      if (emptyState) emptyState.style.display = 'flex';
      return;
    }

    statusCard.style.display = 'flex';
    warningsList.style.display = 'flex';
    if (emptyState) emptyState.style.display = 'none';

    // Determine overall status
    const hasDuplicate = warnings.some(w => w.rule.type === 'duplicate');
    const hasInteraction = warnings.some(w => w.rule.type === 'interaction' || w.rule.type === 'timing');

    let statusClass, statusIcon, statusHeadline, statusSub, countLabel;

    if (hasDuplicate) {
      statusClass = 'status-danger';
      statusIcon = '🚨';
      statusHeadline = 'Duplicate Active Ingredient Detected';
      statusSub = 'One or more medicines share the same active ingredient. This creates a stacked dose risk.';
      countLabel = 'Warnings';
    } else if (hasInteraction) {
      statusClass = 'status-warning';
      statusIcon = '⚠️';
      statusHeadline = 'Potential Interaction Detected';
      statusSub = 'Known timing or absorption interactions exist between your medicines.';
      countLabel = 'Interactions';
    } else {
      statusClass = 'status-safe';
      statusIcon = '✓';
      statusHeadline = 'No Known Conflicts Detected';
      statusSub = `${meds.length} medicines checked. All active ingredients are in separate therapeutic classes.`;
      countLabel = 'Medicines';
    }

    statusCard.className = `safety-status-card ${statusClass}`;
    statusCard.innerHTML = `
      <div class="safety-status-icon-wrap">${statusIcon}</div>
      <div class="safety-status-text">
        <div class="safety-status-headline">${statusHeadline}</div>
        <div class="safety-status-sub">${statusSub}</div>
      </div>
      <div class="safety-status-count">
        <span class="status-count-num">${warnings.length > 0 ? warnings.length : meds.length}</span>
        <span class="status-count-label">${countLabel}</span>
      </div>
    `;

    // Render warning cards
    warningsList.innerHTML = '';
    warnings.forEach((w, idx) => {
      const card = document.createElement('div');
      card.className = `warning-card type-${w.rule.type}`;
      card.style.animationDelay = `${idx * 0.1}s`;

      const explanationText = w.doseA !== null
        ? w.rule.explanation(w.medA.brand, w.medB.brand, w.doseA, w.doseB)
        : w.rule.explanation(w.medA.brand, w.medB.brand);

      const typeIcon = w.rule.type === 'duplicate' ? '🚨' : w.rule.type === 'interaction' ? '⚠️' : '🕐';

      card.innerHTML = `
        <div class="warning-card-header">
          <div class="warning-type-icon">${typeIcon}</div>
          <div class="warning-card-meta">
            <div class="warning-card-type-label">${w.rule.typeLabel}</div>
            <div class="warning-card-title">${w.rule.title}</div>
          </div>
        </div>
        <div class="warning-medicine-pair">
          <div class="warning-med-chip">
            <img src="${w.medA.image}" alt="${w.medA.brand}" onerror="this.onerror=null; this.src=IMAGE_MAP['${w.medA.category}'] || 'assets/med_paracetamol.jpg';">
            ${w.medA.brand}
          </div>
          <span class="warning-pair-plus">+</span>
          <div class="warning-med-chip">
            <img src="${w.medB.image}" alt="${w.medB.brand}" onerror="this.onerror=null; this.src=IMAGE_MAP['${w.medB.category}'] || 'assets/med_paracetamol.jpg';">
            ${w.medB.brand}
          </div>
          ${w.doseA !== null ? `<span style="margin-left: auto; font-family: var(--font-heading); font-size: 0.75rem; font-weight: 700; color: var(--alert-red);">${w.doseA + w.doseB}mg combined</span>` : ''}
        </div>
        <div class="warning-explanation">${explanationText}</div>
        <button class="warning-detail-toggle" aria-expanded="false" aria-controls="detail-panel-${idx}">
          <span>Why am I seeing this?</span>
          <svg class="toggle-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        <div class="warning-detail-panel" id="detail-panel-${idx}">
          <table class="detail-rule-table">
            <tr><td>Medicines</td><td>${w.medA.brand} + ${w.medB.brand}</td></tr>
            ${w.rule.ingredient ? `<tr><td>Ingredient</td><td>${w.rule.ingredient} (${w.doseA}mg + ${w.doseB}mg = ${w.doseA + w.doseB}mg)</td></tr>` : ''}
            ${w.rule.ingredients ? `<tr><td>Ingredients</td><td>${w.rule.ingredients.join(' + ')}</td></tr>` : ''}
            <tr><td>Rule Type</td><td>${w.rule.type.charAt(0).toUpperCase() + w.rule.type.slice(1)}</td></tr>
            <tr><td>Rule Detail</td><td>${w.rule.ruleDetail}</td></tr>
            <tr><td>Source</td><td>${w.rule.ruleSource}</td></tr>
          </table>
        </div>
      `;

      // Toggle detail panel
      const toggleBtn = card.querySelector('.warning-detail-toggle');
      const panel = card.querySelector('.warning-detail-panel');
      const chevron = card.querySelector('.toggle-chevron');
      toggleBtn.addEventListener('click', () => {
        panel.classList.toggle('open');
        chevron.classList.toggle('open');
        toggleBtn.setAttribute('aria-expanded', panel.classList.contains('open'));
      });

      warningsList.appendChild(card);
    });

    // Safe summary (no warnings, multiple meds)
    if (warnings.length === 0 && meds.length >= 2) {
      warningsList.innerHTML = `
        <div style="background: var(--safe-green-soft); border: 1px solid rgba(16,185,129,0.2); border-radius: var(--radius-lg); padding: 24px; display: flex; gap: 16px; align-items: center;">
          <span style="font-size: 1.5rem">✅</span>
          <div>
            <div style="font-family: var(--font-heading); font-weight: 700; font-size: 0.9375rem; color: var(--text-primary);">All ${meds.length} medicines checked — no interactions found</div>
            <div style="font-size: 0.8125rem; color: var(--text-secondary); margin-top: 4px;">Active ingredients across your cabinet are in distinct therapeutic classes. No duplicate ingredients or known timing conflicts detected.</div>
          </div>
        </div>
      `;
    }
  }

  // ==========================================================================
  // 11. UPLOAD & SCAN MODAL (WITH CONFLICT AWARENESS)
  // ==========================================================================
  const uploadModal = document.getElementById('uploadModal');
  const closeUploadModal = document.getElementById('closeUploadModal');
  const openUploadBtn = document.getElementById('openUploadBtn');
  const emptyUploadBtn = document.getElementById('emptyUploadBtn');
  const fileInput = document.getElementById('fileInput');
  const dropZone = document.getElementById('dropZone');
  const dropZoneIdle = document.getElementById('dropZoneIdle');
  const dropZoneScanning = document.getElementById('dropZoneScanning');
  const dropZoneResult = document.getElementById('dropZoneResult');
  const ocrPreviewImg = document.getElementById('ocrPreviewImg');
  const ocrStatusText = document.getElementById('ocrStatusText');
  const tabUpload = document.getElementById('tabUpload');
  const tabSearch = document.getElementById('tabSearch');
  const panelUpload = document.getElementById('panelUpload');
  const panelSearch = document.getElementById('panelSearch');
  const searchInput = document.getElementById('searchInput');
  const searchResultsList = document.getElementById('searchResultsList');

  let currentScanResult = null;

  function openUploadModalFn() {
    if (uploadModal) {
      uploadModal.classList.add('open');
      uploadModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      resetDropZone();
      renderSearchResults('');
    }
  }

  function closeUploadModalFn() {
    if (uploadModal) {
      uploadModal.classList.remove('open');
      uploadModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (openUploadBtn) openUploadBtn.addEventListener('click', openUploadModalFn);
  if (emptyUploadBtn) emptyUploadBtn.addEventListener('click', openUploadModalFn);
  if (closeUploadModal) closeUploadModal.addEventListener('click', closeUploadModalFn);

  // Also open upload from header scan button
  const headerScanBtn = document.getElementById('headerScanBtn');
  if (headerScanBtn) {
    headerScanBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openUploadModalFn();
    });
  }

  const heroScanBtn = document.getElementById('heroScanBtn');
  if (heroScanBtn) {
    heroScanBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openUploadModalFn();
    });
  }

  if (uploadModal) {
    uploadModal.addEventListener('click', (e) => {
      if (e.target === uploadModal) closeUploadModalFn();
    });
  }

  // Tab switching
  if (tabUpload && tabSearch) {
    tabUpload.addEventListener('click', () => {
      tabUpload.classList.add('active');
      tabSearch.classList.remove('active');
      panelUpload.style.display = 'flex';
      panelSearch.style.display = 'none';
    });
    tabSearch.addEventListener('click', () => {
      tabSearch.classList.add('active');
      tabUpload.classList.remove('active');
      panelSearch.style.display = 'flex';
      panelUpload.style.display = 'none';
      if (searchInput) searchInput.focus();
    });
  }

  // Drag and drop
  if (dropZone) {
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('drag-over');
    });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('drag-over');
      const file = e.dataTransfer?.files?.[0];
      if (file && file.type.startsWith('image/')) {
        processUploadedImage(file);
      }
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', () => {
      const file = fileInput.files?.[0];
      if (file) processUploadedImage(file);
    });
  }

  // Browse button inside drop zone
  const dropBrowseBtn = document.getElementById('dropBrowseBtn');
  if (dropBrowseBtn && fileInput) {
    dropBrowseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      fileInput.click();
    });
  }

  function resetDropZone() {
    if (dropZoneIdle) dropZoneIdle.style.display = 'flex';
    if (dropZoneScanning) dropZoneScanning.style.display = 'none';
    if (dropZoneResult) dropZoneResult.style.display = 'none';
    if (fileInput) fileInput.value = '';
    currentScanResult = null;
  }

  // OCR simulation status messages
  const ocrSteps = [
    'Reading label…',
    'Detecting brand name…',
    'Extracting active ingredients…',
    'Checking conflict rules…',
    'Verification complete ✓'
  ];

  function processUploadedImage(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (ocrPreviewImg) ocrPreviewImg.src = e.target.result;
      if (dropZoneIdle) dropZoneIdle.style.display = 'none';
      if (dropZoneScanning) dropZoneScanning.style.display = 'block';
      if (dropZoneResult) dropZoneResult.style.display = 'none';

      let step = 0;
      const statusInterval = setInterval(() => {
        if (ocrStatusText && step < ocrSteps.length) {
          ocrStatusText.textContent = ocrSteps[step];
          step++;
        } else {
          clearInterval(statusInterval);
          // Pick an unrecognized medicine or one with interesting conflict
          const allIds = Object.keys(MED_DATABASE).filter(id => !Cabinet.has(id));
          const matchedId = allIds.length > 0
            ? allIds[Math.floor(Math.random() * allIds.length)]
            : Object.keys(MED_DATABASE)[0];
          showScanResult(matchedId);
        }
      }, 400);
    };
    reader.readAsDataURL(file);
  }

  function showScanResult(medId) {
    const med = MED_DATABASE[medId];
    if (!med || !dropZoneResult) return;

    currentScanResult = medId;
    if (dropZoneScanning) dropZoneScanning.style.display = 'none';
    dropZoneResult.style.display = 'block';

    const alreadyAdded = Cabinet.has(medId);
    const { hypothetical } = getConflictsForMed(medId);
    const wouldConflict = !alreadyAdded && hypothetical.length > 0;

    dropZoneResult.innerHTML = `
      <div style="margin-bottom: 12px; font-family: var(--font-heading); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--safe-green);">
        ✓ Medicine Identified
      </div>
      <div class="scan-result-card">
        <img src="${med.image}" alt="${med.brand}" class="scan-result-img" onerror="this.onerror=null; this.src=IMAGE_MAP['${med.category}'] || 'assets/med_paracetamol.jpg';">
        <div class="scan-result-body">
          <div class="scan-result-brand">${med.brand}</div>
          <div class="scan-result-info">${Object.entries(med.activeIngredients).map(([k, v]) => `${k} ${v}mg`).join(' · ')}</div>
          <div class="scan-result-info" style="margin-top: 4px; color: var(--text-muted);">${med.category} · ${med.strength}</div>
        </div>
      </div>

      ${wouldConflict ? `
        <div class="scan-conflict-alert">
          <div class="scan-conflict-icon">🚨</div>
          <div class="scan-conflict-text">
            <strong>Contradiction Warning:</strong> Adding ${med.brand} conflicts with <strong>${hypothetical.map(h => h.otherMed.brand).join(', ')}</strong> in your cabinet (${hypothetical[0].rule.title}).
          </div>
        </div>
      ` : ''}

      <div class="scan-result-actions">
        <button class="btn-scan-again" id="btnScanAgain">Scan Another</button>
        <button class="btn-pill ${wouldConflict ? 'btn-danger-pill' : 'btn-primary'} btn-sm" id="btnConfirmAdd" ${alreadyAdded ? 'disabled style="background: var(--safe-green)"' : ''}>
          ${alreadyAdded ? '✓ Already in Cabinet' : wouldConflict ? '⚠️ Add (+Conflict)' : 'Add to Cabinet'}
        </button>
      </div>
    `;

    document.getElementById('btnScanAgain')?.addEventListener('click', () => {
      resetDropZone();
      if (fileInput) fileInput.value = '';
    });

    document.getElementById('btnConfirmAdd')?.addEventListener('click', () => {
      if (!Cabinet.has(medId)) {
        Cabinet.add(medId);
        if (wouldConflict) {
          showConflictToast(med.brand, hypothetical);
        } else {
          showAddToast(med.brand);
        }
        renderMedicinesPage();
        renderProductGrid();
        updateHomeSafetyBanner();
        closeUploadModalFn();
      }
    });
  }

  // Search Panel
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderSearchResults(searchInput.value);
    });
  }

  function renderSearchResults(query) {
    if (!searchResultsList) return;
    const q = query.toLowerCase().trim();
    const allMeds = Object.values(MED_DATABASE);
    const filtered = q
      ? allMeds.filter(m =>
          m.brand.toLowerCase().includes(q) ||
          Object.keys(m.activeIngredients).some(k => k.toLowerCase().includes(q)) ||
          m.category.toLowerCase().includes(q)
        )
      : allMeds;

    searchResultsList.innerHTML = '';
    filtered.slice(0, 12).forEach(med => {
      const inCabinet = Cabinet.has(med.id);
      const { active, hypothetical } = getConflictsForMed(med.id);
      const hasConflict = inCabinet && active.length > 0;
      const wouldConflict = !inCabinet && hypothetical.length > 0;

      let conflictTag = '';
      if (hasConflict) {
        conflictTag = `<span class="search-conflict-pill danger">🚨 Conflict</span>`;
      } else if (wouldConflict) {
        conflictTag = `<span class="search-conflict-pill warning">⚠️ Conflicts with ${hypothetical[0].otherMed.brand}</span>`;
      }

      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `
        <img src="${med.image}" alt="${med.brand}" class="search-result-img" loading="lazy" onerror="this.onerror=null; this.src=IMAGE_MAP['${med.category}'] || 'assets/med_paracetamol.jpg';">
        <div class="search-result-body">
          <div class="search-result-brand">${med.brand} ${conflictTag}</div>
          <div class="search-result-sub">${Object.keys(med.activeIngredients).join(' · ')} · ${med.strength}</div>
        </div>
        <button class="search-result-add${inCabinet ? ' added' : wouldConflict ? ' warn' : ''}" data-search-add-id="${med.id}" aria-label="${inCabinet ? 'Already added' : `Add ${med.brand}`}" ${inCabinet ? 'disabled' : ''}>
          ${inCabinet
            ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`
            : `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`
          }
        </button>
      `;

      const addBtn = item.querySelector('.search-result-add');
      const addHandler = (e) => {
        e.stopPropagation();
        if (!inCabinet) {
          Cabinet.add(med.id);
          if (wouldConflict) {
            showConflictToast(med.brand, hypothetical);
          } else {
            showAddToast(med.brand);
          }
          renderSearchResults(searchInput?.value || '');
          renderMedicinesPage();
          renderProductGrid();
          updateHomeSafetyBanner();
        }
      };

      if (!inCabinet) {
        addBtn.addEventListener('click', addHandler);
        item.addEventListener('click', addHandler);
      }

      searchResultsList.appendChild(item);
    });

    if (filtered.length === 0) {
      searchResultsList.innerHTML = `<div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.875rem;">No medicines found for "${query}"</div>`;
    }
  }

  // ==========================================================================
  // 12. DETAIL MODAL (WITH ACTIVE & POTENTIAL CONFLICTS)
  // ==========================================================================
  const detailModal = document.getElementById('detailModal');
  const closeDetailModal = document.getElementById('closeDetailModal');
  const detailModalBody = document.getElementById('detailModalBody');
  const detailModalTitle = document.getElementById('detailModalTitle');

  function openDetailModal(medId) {
    const med = MED_DATABASE[medId];
    if (!med || !detailModal) return;

    const inCabinet = Cabinet.has(medId);
    const { active, hypothetical } = getConflictsForMed(medId);
    const hasActiveConflict = inCabinet && active.length > 0;
    const wouldConflict = !inCabinet && hypothetical.length > 0;

    if (detailModalTitle) detailModalTitle.textContent = med.brand;

    let noticeHtml = '';
    if (hasActiveConflict) {
      noticeHtml = `
        <div class="detail-conflict-notice">
          <div class="detail-conflict-icon">🚨</div>
          <div class="detail-conflict-text">
            <strong>Contradiction detected in your cabinet!</strong> This medicine shares active ingredients with <strong>${active.map(w => w.otherMed.brand).join(', ')}</strong> (${active[0].rule.title}${active[0].combinedDose ? ` · ${active[0].combinedDose} combined` : ''}). Taking both creates a stacked dose hazard. View Safety Dashboard for details.
          </div>
        </div>
      `;
    } else if (wouldConflict) {
      noticeHtml = `
        <div class="detail-potential-notice">
          <div class="detail-conflict-icon">⚠️</div>
          <div class="detail-conflict-text">
            <strong>Contradiction Warning:</strong> Adding this medicine will create a conflict with <strong>${hypothetical.map(h => h.otherMed.brand).join(', ')}</strong> already in your cabinet (${hypothetical[0].rule.title}${hypothetical[0].combinedDose ? ` · ${hypothetical[0].combinedDose} combined` : ''}).
          </div>
        </div>
      `;
    } else if (inCabinet && Cabinet.count() >= 2) {
      noticeHtml = `
        <div style="background: var(--safe-green-soft); border: 1px solid rgba(16,185,129,0.2); border-radius: var(--radius-md); padding: 12px 14px; font-size: 0.8125rem; color: #047857; font-weight: 500;">
          ✓ No conflicts detected with your current cabinet medicines.
        </div>
      `;
    }

    detailModalBody.innerHTML = `
      <div class="detail-med-header">
        <img src="${med.image}" alt="${med.brand}" class="detail-med-img" onerror="this.onerror=null; this.src=IMAGE_MAP['${med.category}'] || 'assets/med_paracetamol.jpg';">
        <div class="detail-med-meta">
          <div class="detail-med-category">${med.category}</div>
          <div class="detail-med-brand">${med.brand}</div>
          <div class="detail-med-desc">${med.description}</div>
        </div>
      </div>

      <div class="detail-ingredients-section">
        <div class="detail-section-label">Active Ingredients</div>
        ${Object.entries(med.activeIngredients).map(([name, dose]) => `
          <div class="ingredient-row">
            <span class="ingredient-row-name">${name}</span>
            <span class="ingredient-row-dose">${dose}mg</span>
          </div>
        `).join('')}
      </div>

      ${noticeHtml}

      <div>
        <button class="btn-pill btn-large ${wouldConflict ? 'btn-danger-pill' : 'btn-primary'}${inCabinet ? ' added' : ''}" id="detailAddBtn" style="width: 100%;" ${inCabinet ? 'disabled' : ''}>
          ${inCabinet
            ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ${hasActiveConflict ? 'In Cabinet (Conflict Detected)' : 'Added to Cabinet'}`
            : wouldConflict
              ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to Cabinet (Causes Conflict)`
              : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My Medicines`
          }
        </button>
        ${inCabinet ? `<div style="margin-top: 8px;"><button class="btn-pill" id="detailRemoveBtn" style="width: 100%; padding: 10px; background: var(--bg-main); color: var(--text-secondary); border: 1px solid var(--surface-border); font-family: var(--font-heading); font-size: 0.8125rem; font-weight: 600; border-radius: var(--radius-pill); cursor: pointer;">Remove from Cabinet</button></div>` : ''}
      </div>
    `;

    if (!inCabinet) {
      document.getElementById('detailAddBtn')?.addEventListener('click', () => {
        Cabinet.add(medId);
        if (wouldConflict) {
          showConflictToast(med.brand, hypothetical);
        } else {
          showAddToast(med.brand);
        }
        openDetailModal(medId);
        renderProductGrid();
        updateHomeSafetyBanner();
        renderMedicinesPage();
      });
    }

    document.getElementById('detailRemoveBtn')?.addEventListener('click', () => {
      Cabinet.remove(medId);
      openDetailModal(medId);
      renderProductGrid();
      updateHomeSafetyBanner();
      renderMedicinesPage();
    });

    detailModal.classList.add('open');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  if (closeDetailModal) {
    closeDetailModal.addEventListener('click', () => {
      detailModal.classList.remove('open');
      detailModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  if (detailModal) {
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) {
        detailModal.classList.remove('open');
        detailModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  // Close modals on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeUploadModalFn();
      if (detailModal?.classList.contains('open')) {
        detailModal.classList.remove('open');
        detailModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }
  });

  // Privacy link
  const privacyLink = document.getElementById('privacyLink');
  if (privacyLink) {
    privacyLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Farmakode is a zero-log, on-device OTC medicine safety platform. No personal data or health history is ever transmitted or stored outside your browser.');
    });
  }

  // ==========================================================================
  // 13. INLINE SAFETY BTN ON MEDICINES PAGE
  // ==========================================================================
  const inlineSafetyBtn = document.getElementById('inlineSafetyBtn');
  if (inlineSafetyBtn) {
    inlineSafetyBtn.addEventListener('click', () => navigateTo('safety'));
  }

  const safetyGoMeds = document.getElementById('safetyGoMeds');
  if (safetyGoMeds) {
    safetyGoMeds.addEventListener('click', () => navigateTo('medicines'));
  }

  // ==========================================================================
  // 14. INITIAL BOOT
  // ==========================================================================
  // Determine starting page from URL hash
  const hash = window.location.hash.replace('#', '');
  const validPages = ['home', 'about', 'medicines', 'safety'];
  const startPage = validPages.includes(hash) ? hash : 'home';
  navigateTo(startPage, false);

});
