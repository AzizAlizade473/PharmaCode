/**
 * Farmakode — Functional OTC Medicine Safety Platform
 * SPA Router · Medicine Database · Cabinet Logic · Safety Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. MEDICINE DATABASE
  // ==========================================================================
  const MED_DATABASE = {
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

  // ==========================================================================
  // 2. INTERACTION RULES ENGINE
  // ==========================================================================
  const INTERACTION_RULES = [
    {
      id: 'duplicate_paracetamol',
      type: 'duplicate',
      ingredient: 'Paracetamol',
      title: 'Duplicate Paracetamol',
      typeLabel: '🚨 Duplicate Active Ingredient',
      explanation: (medA, medB, doseA, doseB) =>
        `Both <strong>${medA}</strong> and <strong>${medB}</strong> contain Paracetamol. Combined dose: <strong>${doseA + doseB}mg</strong>. The recommended single dose is 500–1000mg. Combined ingestion risks exceeding the daily safe limit of 4000mg and stresses liver function.`,
      ruleSource: 'WHO Essential Medicines / NHS Paracetamol Guidelines',
      ruleDetail: 'Duplicate active analgesic ingredient — overdose risk. Max single dose 1000mg; max daily 4000mg.'
    },
    {
      id: 'duplicate_ibuprofen',
      type: 'duplicate',
      ingredient: 'Ibuprofen',
      title: 'Duplicate Ibuprofen (NSAID)',
      typeLabel: '🚨 Duplicate NSAID',
      explanation: (medA, medB, doseA, doseB) =>
        `Both <strong>${medA}</strong> and <strong>${medB}</strong> contain Ibuprofen. Combined dose: <strong>${doseA + doseB}mg</strong>. Taking two NSAID sources simultaneously increases the risk of GI bleeding and renal toxicity without therapeutic benefit.`,
      ruleSource: 'BNF / FDA NSAID Safety Label',
      ruleDetail: 'Duplicate NSAID. Do not combine without physician guidance — GI and renal risk.'
    },
    {
      id: 'nsaid_aspirin',
      type: 'interaction',
      ingredients: ['Ibuprofen', 'Acetylsalicylic Acid'],
      title: 'Ibuprofen Blocks Aspirin',
      typeLabel: '⚠️ Known Interaction',
      explanation: (medA, medB) =>
        `<strong>${medA}</strong> (Ibuprofen) competitively binds to COX-1 receptors, blocking the cardioprotective antiplatelet effect of <strong>${medB}</strong> (Aspirin). If taking low-dose aspirin for heart protection, ibuprofen should be taken at least 2 hours after aspirin.`,
      ruleSource: 'FDA Drug Safety Communication 2006 / NEJM',
      ruleDetail: 'COX-1 competitive binding. Ibuprofen blocks aspirin\'s antiplatelet effect. Take aspirin first, wait 2+ hours.'
    },
    {
      id: 'dual_antihistamine',
      type: 'duplicate',
      ingredients: ['Loratadine', 'Cetirizine HCl'],
      title: 'Dual Antihistamine Load',
      typeLabel: '⚠️ Same Therapeutic Class',
      explanation: (medA, medB) =>
        `<strong>${medA}</strong> and <strong>${medB}</strong> are both second-generation H1 antihistamines. Combining them doubles the antihistamine load without additional benefit, and increases the risk of sedation, dry mouth and urinary retention.`,
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
        `<strong>${medA}</strong> (containing Diphenhydramine) combined with <strong>${medB}</strong> (Ibuprofen) may reduce ibuprofen absorption rate due to anticholinergic effects slowing gastric emptying. Recommended: separate doses by at least 2–4 hours.`,
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
        `Both <strong>${medA}</strong> and <strong>${medB}</strong> contain Phenylephrine HCl. Combined dose: <strong>${doseA + doseB}mg</strong>. Excessive phenylephrine can cause hypertension, palpitations and cardiovascular stress.`,
      ruleSource: 'FDA OTC Monograph Decongestants',
      ruleDetail: 'Duplicate sympathomimetic. Cardiovascular risk from combined alpha-agonist stimulation.'
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
  function analyzeSafety() {
    const meds = Cabinet.getMeds();
    const warnings = [];

    if (meds.length < 2) return warnings;

    // Compare each pair
    for (let i = 0; i < meds.length; i++) {
      for (let j = i + 1; j < meds.length; j++) {
        const medA = meds[i];
        const medB = meds[j];

        // Check each interaction rule
        for (const rule of INTERACTION_RULES) {
          // Duplicate single ingredient rule
          if (rule.ingredient) {
            const doseA = medA.activeIngredients[rule.ingredient];
            const doseB = medB.activeIngredients[rule.ingredient];
            if (doseA !== undefined && doseB !== undefined) {
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
          // Two-ingredient interaction rule
          else if (rule.ingredients && rule.ingredients.length === 2) {
            const [ingA, ingB] = rule.ingredients;
            const medAhasA = medA.activeIngredients[ingA] !== undefined;
            const medAhasB = medA.activeIngredients[ingB] !== undefined;
            const medBhasA = medB.activeIngredients[ingA] !== undefined;
            const medBhasB = medB.activeIngredients[ingB] !== undefined;

            const crossMatch = (medAhasA && medBhasB) || (medAhasB && medBhasA);

            if (crossMatch) {
              // Check it's not already detected as a duplicate
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
      if (navLinks) navLinks.classList.remove('mobile-open');
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
    header.style.padding = window.scrollY > 20 ? '10px 24px' : '16px 24px';
  }, { passive: true });

  // Mobile toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksEl = document.getElementById('navLinks');
  if (mobileToggle && navLinksEl) {
    mobileToggle.addEventListener('click', () => {
      navLinksEl.classList.toggle('mobile-open');
    });
  }

  // ==========================================================================
  // 8. HOME PAGE RENDERER
  // ==========================================================================
  let activeCategory = 'all';

  function renderHomePage() {
    renderProductGrid();
    attachCategoryPills();
    initReveal();
  }

  function attachCategoryPills() {
    const pills = document.querySelectorAll('.category-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeCategory = pill.getAttribute('data-category');
        renderProductGrid();
      });
    });
  }

  function renderProductGrid() {
    const grid = document.getElementById('homeProductGrid');
    if (!grid) return;

    const allMeds = Object.values(MED_DATABASE);
    const filtered = activeCategory === 'all'
      ? allMeds
      : allMeds.filter(m => m.category === activeCategory);

    grid.innerHTML = '';

    filtered.forEach((med, idx) => {
      const inCabinet = Cabinet.has(med.id);
      const card = document.createElement('div');
      card.className = `home-product-card${inCabinet ? ' in-cabinet' : ''}`;
      card.style.animationDelay = `${idx * 0.05}s`;

      card.innerHTML = `
        <div class="product-image-box">
          <img src="${med.image}" alt="${med.brand}" class="product-img" loading="lazy">
          <div class="floating-meta-chip">${med.strength}</div>
        </div>
        <div class="product-card-body">
          <span class="product-category-tag">${med.category}</span>
          <h4 class="product-brand-name">${med.brand}</h4>
          <p class="product-ingredient-line">${Object.keys(med.activeIngredients).join(' · ')}</p>
          <span class="product-strength-tag">${med.strength}</span>
        </div>
        <div class="product-card-footer">
          <button class="btn-add-medicine${inCabinet ? ' added' : ''}" data-med-id="${med.id}" aria-label="${inCabinet ? 'Added to cabinet' : 'Add to My Medicines'}">
            ${inCabinet
              ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Added`
              : `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add`
            }
          </button>
          <button class="btn-detail-icon" data-detail-id="${med.id}" aria-label="View ${med.brand} details">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </button>
        </div>
      `;

      // Add to cabinet button
      const addBtn = card.querySelector('.btn-add-medicine');
      addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!Cabinet.has(med.id)) {
          Cabinet.add(med.id);
          renderProductGrid();
          showAddToast(med.brand);
        }
      });

      // Detail button
      const detailBtn = card.querySelector('.btn-detail-icon');
      detailBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openDetailModal(med.id);
      });

      // Card click → detail
      card.addEventListener('click', () => openDetailModal(med.id));

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

  // Toast notification
  function showAddToast(brandName) {
    let toast = document.getElementById('addToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'addToast';
      toast.style.cssText = `
        position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
        background: var(--btn-dark); color: #fff; padding: 12px 20px;
        border-radius: 999px; font-family: var(--font-heading); font-size: 0.875rem;
        font-weight: 600; z-index: 9999; box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        display: flex; align-items: center; gap: 8px;
        transition: all 0.3s var(--ease-spring);
      `;
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ${brandName} added to cabinet`;
    toast.style.opacity = '1';
    toast.style.visibility = 'visible';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.visibility = 'hidden';
    }, 2500);
  }

  // ==========================================================================
  // 9. MEDICINES PAGE RENDERER
  // ==========================================================================
  function renderMedicinesPage() {
    renderCabinetGrid();
    updateInlineSafetyBanner();
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
          <img src="${med.image}" alt="${med.brand}" class="cabinet-card-img" loading="lazy">
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
        // Also re-render home grid if visible
        if (document.getElementById('page-home').classList.contains('active')) {
          renderProductGrid();
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
            <img src="${w.medA.image}" alt="${w.medA.brand}">
            ${w.medA.brand}
          </div>
          <span class="warning-pair-plus">+</span>
          <div class="warning-med-chip">
            <img src="${w.medB.image}" alt="${w.medB.brand}">
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
  // 11. UPLOAD MODAL
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

  // Also open upload from header scan button when on medicines page
  const headerScanBtn = document.getElementById('headerScanBtn');
  if (headerScanBtn) {
    headerScanBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const currentPage = document.querySelector('.page.active')?.id;
      if (currentPage === 'page-medicines') {
        openUploadModalFn();
      } else {
        navigateTo('medicines');
        setTimeout(openUploadModalFn, 300);
      }
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
    'Matching database…',
    'Verification complete ✓'
  ];

  function processUploadedImage(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (ocrPreviewImg) ocrPreviewImg.src = e.target.result;
      if (dropZoneIdle) dropZoneIdle.style.display = 'none';
      if (dropZoneScanning) dropZoneScanning.style.display = 'block';
      if (dropZoneResult) dropZoneResult.style.display = 'none';

      // Cycle through OCR status messages
      let step = 0;
      const statusInterval = setInterval(() => {
        if (ocrStatusText && step < ocrSteps.length) {
          ocrStatusText.textContent = ocrSteps[step];
          step++;
        } else {
          clearInterval(statusInterval);
          // Pick a random unrecognized medicine from DB or use a predictable one
          const allIds = Object.keys(MED_DATABASE).filter(id => !Cabinet.has(id));
          const matchedId = allIds.length > 0
            ? allIds[Math.floor(Math.random() * allIds.length)]
            : Object.keys(MED_DATABASE)[0];
          showScanResult(matchedId);
        }
      }, 500);
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
    dropZoneResult.innerHTML = `
      <div style="margin-bottom: 12px; font-family: var(--font-heading); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--safe-green);">
        ✓ Medicine Identified
      </div>
      <div class="scan-result-card">
        <img src="${med.image}" alt="${med.brand}" class="scan-result-img">
        <div class="scan-result-body">
          <div class="scan-result-brand">${med.brand}</div>
          <div class="scan-result-info">${Object.entries(med.activeIngredients).map(([k, v]) => `${k} ${v}mg`).join(' · ')}</div>
          <div class="scan-result-info" style="margin-top: 4px; color: var(--text-muted);">${med.category} · ${med.strength}</div>
        </div>
      </div>
      <div class="scan-result-actions">
        <button class="btn-scan-again" id="btnScanAgain">Scan Another</button>
        <button class="btn-pill btn-primary btn-sm" id="btnConfirmAdd" ${alreadyAdded ? 'disabled style="background: var(--safe-green)"' : ''}>
          ${alreadyAdded ? '✓ Already Added' : 'Add to Cabinet'}
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
        showAddToast(med.brand);
        renderMedicinesPage();
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
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `
        <img src="${med.image}" alt="${med.brand}" class="search-result-img" loading="lazy">
        <div class="search-result-body">
          <div class="search-result-brand">${med.brand}</div>
          <div class="search-result-sub">${Object.keys(med.activeIngredients).join(' · ')} · ${med.strength}</div>
        </div>
        <button class="search-result-add${inCabinet ? ' added' : ''}" data-search-add-id="${med.id}" aria-label="${inCabinet ? 'Already added' : `Add ${med.brand}`}" ${inCabinet ? 'disabled' : ''}>
          ${inCabinet
            ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`
            : `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`
          }
        </button>
      `;

      const addBtn = item.querySelector('.search-result-add');
      if (!inCabinet) {
        addBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          Cabinet.add(med.id);
          showAddToast(med.brand);
          renderSearchResults(searchInput?.value || '');
          renderMedicinesPage();
        });
        item.addEventListener('click', () => {
          Cabinet.add(med.id);
          showAddToast(med.brand);
          renderSearchResults(searchInput?.value || '');
          renderMedicinesPage();
        });
      }

      searchResultsList.appendChild(item);
    });

    if (filtered.length === 0) {
      searchResultsList.innerHTML = `<div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.875rem;">No medicines found for "${query}"</div>`;
    }
  }

  // ==========================================================================
  // 12. DETAIL MODAL
  // ==========================================================================
  const detailModal = document.getElementById('detailModal');
  const closeDetailModal = document.getElementById('closeDetailModal');
  const detailModalBody = document.getElementById('detailModalBody');
  const detailModalTitle = document.getElementById('detailModalTitle');

  function openDetailModal(medId) {
    const med = MED_DATABASE[medId];
    if (!med || !detailModal) return;

    const warnings = analyzeSafety();
    const conflictWarnings = warnings.filter(w => w.medA.id === medId || w.medB.id === medId);
    const inCabinet = Cabinet.has(medId);

    if (detailModalTitle) detailModalTitle.textContent = med.brand;

    detailModalBody.innerHTML = `
      <div class="detail-med-header">
        <img src="${med.image}" alt="${med.brand}" class="detail-med-img">
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

      ${conflictWarnings.length > 0 ? `
        <div class="detail-conflict-notice">
          <div class="detail-conflict-icon">⚠️</div>
          <div class="detail-conflict-text">
            <strong>Conflict detected in your cabinet.</strong> This medicine shares active ingredients with ${conflictWarnings.map(w => w.medA.id === medId ? w.medB.brand : w.medA.brand).join(', ')}. View the Safety Dashboard for full details.
          </div>
        </div>
      ` : inCabinet && Cabinet.count() >= 2 ? `
        <div style="background: var(--safe-green-soft); border: 1px solid rgba(16,185,129,0.2); border-radius: var(--radius-md); padding: 12px 14px; font-size: 0.8125rem; color: #047857; font-weight: 500;">
          ✓ No conflicts detected with your current medicines.
        </div>
      ` : ''}

      <div>
        <button class="btn-pill btn-large btn-primary${inCabinet ? ' added' : ''}" id="detailAddBtn" style="width: 100%;" ${inCabinet ? 'disabled' : ''}>
          ${inCabinet
            ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Added to Cabinet`
            : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My Medicines`
          }
        </button>
        ${inCabinet ? `<div style="margin-top: 8px;"><button class="btn-pill" id="detailRemoveBtn" style="width: 100%; padding: 10px; background: var(--bg-main); color: var(--text-secondary); border: 1px solid var(--surface-border); font-family: var(--font-heading); font-size: 0.8125rem; font-weight: 600; border-radius: var(--radius-pill); cursor: pointer;">Remove from Cabinet</button></div>` : ''}
      </div>
    `;

    if (!inCabinet) {
      document.getElementById('detailAddBtn')?.addEventListener('click', () => {
        Cabinet.add(medId);
        showAddToast(med.brand);
        openDetailModal(medId); // Re-render detail with updated state
        renderProductGrid();
        renderMedicinesPage();
      });
    }

    document.getElementById('detailRemoveBtn')?.addEventListener('click', () => {
      Cabinet.remove(medId);
      openDetailModal(medId);
      renderProductGrid();
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
