/**
 * Farmakode — Premium Minimalistic OTC Medicine Safety Platform
 * Interactive Logic, Scroll Animation, & Live OTC Collision Simulator
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. SCROLL REVEAL (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal-fade, .reveal-scale');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // 2. HEADER ELEVATION ON SCROLL
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.padding = '10px 24px';
    } else {
      header.style.padding = '16px 24px';
    }
  }, { passive: true });

  // 3. MOBILE MENU TOGGLE
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const isOpen = navLinks.classList.contains('mobile-open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // 4. OTC MEDICINE DATABASE FOR SIMULATOR
  const MED_DATABASE = {
    paracetamol: {
      name: 'Paracetamol 500mg',
      category: 'Pain Relief',
      activeIngredients: {
        'Acetaminophen (Paracetamol)': 500,
        'Caffeine': 65
      }
    },
    nightflu: {
      name: 'Night Cold & Flu Severe',
      category: 'Multi-Symptom',
      activeIngredients: {
        'Acetaminophen (Paracetamol)': 500,
        'Phenylephrine HCl': 10,
        'Diphenhydramine HCl': 25
      }
    },
    sinus: {
      name: 'Sinus Relief Decongestant',
      category: 'Decongestant',
      activeIngredients: {
        'Pseudoephedrine HCl': 200
      }
    },
    allergy: {
      name: 'Allergy Defense 24hr',
      category: 'Antihistamine',
      activeIngredients: {
        'Loratadine': 10
      }
    }
  };

  // State for selected simulator meds (Max 2)
  let selectedMeds = ['paracetamol', 'nightflu'];

  // Audio feedback synthesis using Web Audio API
  let audioCtx = null;
  function playAudioTone(type) {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      const now = audioCtx.currentTime;
      if (type === 'warning') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'safe') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      }
    } catch (e) {
      // Audio context might be restricted without user interaction
    }
  }

  // 5. SIMULATION LOGIC
  const simCollisionDisplay = document.getElementById('simCollisionDisplay');
  const simButtons = document.querySelectorAll('.sim-med-btn');
  const runSimulationBtn = document.getElementById('runSimulationBtn');

  function analyzeCollision(medAKey, medBKey) {
    const medA = MED_DATABASE[medAKey];
    const medB = MED_DATABASE[medBKey];

    if (!medA || !medB) return;

    // Check duplicate ingredients
    const duplicateList = [];
    const safeList = [];

    const keysA = Object.keys(medA.activeIngredients);
    const keysB = Object.keys(medB.activeIngredients);

    keysA.forEach(ing => {
      if (medB.activeIngredients[ing]) {
        duplicateList.push({
          name: ing,
          doseA: medA.activeIngredients[ing],
          doseB: medB.activeIngredients[ing],
          total: medA.activeIngredients[ing] + medB.activeIngredients[ing]
        });
      } else {
        safeList.push({ name: ing, from: medA.name, dose: medA.activeIngredients[ing] });
      }
    });

    keysB.forEach(ing => {
      if (!medA.activeIngredients[ing]) {
        safeList.push({ name: ing, from: medB.name, dose: medB.activeIngredients[ing] });
      }
    });

    const isDuplicate = duplicateList.length > 0;

    // Render HTML in Simulator Viewport
    let html = `
      <div class="sim-result-header">
        <div>
          <span style="font-family: var(--font-heading); font-weight: 700; font-size: 0.875rem;">${medA.name} + ${medB.name}</span>
        </div>
        <span class="sim-status-badge ${isDuplicate ? 'danger' : 'safe'}">
          ${isDuplicate ? '⚠️ Duplicate Warning' : '✓ Clean Formulation'}
        </span>
      </div>
      <div class="sim-details-list">
    `;

    if (isDuplicate) {
      duplicateList.forEach(dup => {
        html += `
          <div class="sim-row duplicate">
            <span>⚠️ <strong>${dup.name}</strong> (DUPLICATE)</span>
            <span>${dup.total} mg total</span>
          </div>
        `;
      });
    }

    safeList.forEach(item => {
      html += `
        <div class="sim-row">
          <span>${item.name}</span>
          <span style="color: var(--text-muted);">${item.dose} mg</span>
        </div>
      `;
    });

    html += `</div>`;

    if (isDuplicate) {
      html += `
        <div style="background: #FFF1F2; border-radius: 10px; padding: 10px 14px; font-size: 0.75rem; color: #BE123C; font-weight: 600;">
          Collision Detected: Consuming both packages exceeds single-dose safety thresholds for active analgesic formulation.
        </div>
      `;
    } else {
      html += `
        <div style="background: #ECFDF5; border-radius: 10px; padding: 10px 14px; font-size: 0.75rem; color: #047857; font-weight: 600;">
          No active ingredient overlaps detected. Safe distinct therapeutic classes.
        </div>
      `;
    }

    if (simCollisionDisplay) {
      simCollisionDisplay.innerHTML = html;
    }

    playAudioTone(isDuplicate ? 'warning' : 'safe');
  }

  // Handle Med Selection in Simulator
  simButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const medId = btn.getAttribute('data-id');
      
      if (selectedMeds.includes(medId)) {
        if (selectedMeds.length > 1) {
          selectedMeds = selectedMeds.filter(id => id !== medId);
          btn.classList.remove('active');
        }
      } else {
        if (selectedMeds.length >= 2) {
          const removed = selectedMeds.shift();
          const oldBtn = document.querySelector(`.sim-med-btn[data-id="${removed}"]`);
          if (oldBtn) oldBtn.classList.remove('active');
        }
        selectedMeds.push(medId);
        btn.classList.add('active');
      }

      if (selectedMeds.length === 2) {
        analyzeCollision(selectedMeds[0], selectedMeds[1]);
      }
    });
  });

  if (runSimulationBtn) {
    runSimulationBtn.addEventListener('click', () => {
      if (selectedMeds.length === 2) {
        analyzeCollision(selectedMeds[0], selectedMeds[1]);
      }
    });
  }

  // 6. MODAL TRIGGER CONTROLS
  const scannerModal = document.getElementById('scannerModal');
  const closeScannerModal = document.getElementById('closeScannerModal');
  const openModalButtons = document.querySelectorAll('.open-scanner-btn');

  function openModal() {
    if (scannerModal) {
      scannerModal.classList.add('open');
      scannerModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (selectedMeds.length === 2) {
        analyzeCollision(selectedMeds[0], selectedMeds[1]);
      }
    }
  }

  function closeModal() {
    if (scannerModal) {
      scannerModal.classList.remove('open');
      scannerModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeScannerModal) {
    closeScannerModal.addEventListener('click', closeModal);
  }

  if (scannerModal) {
    scannerModal.addEventListener('click', (e) => {
      if (e.target === scannerModal) {
        closeModal();
      }
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && scannerModal && scannerModal.classList.contains('open')) {
      closeModal();
    }
  });

  // Showcase product "+" buttons
  const triggerTestButtons = document.querySelectorAll('.trigger-test-btn');
  triggerTestButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const medKey = btn.getAttribute('data-med');
      if (medKey) {
        // Set first selection to paracetamol and second to clicked med
        selectedMeds = ['paracetamol', medKey];
        simButtons.forEach(b => {
          const id = b.getAttribute('data-id');
          if (selectedMeds.includes(id)) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
        openModal();
      }
    });
  });

  // Privacy notice simple alert
  const privacyLink = document.getElementById('privacyLink');
  if (privacyLink) {
    privacyLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Farmakode is an on-device, zero-log OTC medicine safety platform. No personal data or health history is ever transmitted or stored.');
    });
  }

  // Initial Simulator Run
  if (selectedMeds.length === 2) {
    analyzeCollision(selectedMeds[0], selectedMeds[1]);
  }
});
