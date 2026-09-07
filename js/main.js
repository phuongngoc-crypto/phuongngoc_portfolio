/**
 * Main Interactive Application Controller (Pure English)
 * Features Integrated Keyword Mapping, Tab-Driven Discovery, Proof Inspection, and Native Background Audio
 */

(function () {
  let envelopeOpened = false;
  let activeExpKeyword = 'all';
  let activeCredId = 'cred-scholarship';
  let activeSkillCategory = 'charms';

  // --- Envelope Open / Fold Toggle ---
  window.toggleEnvelope = function () {
    const envelope = document.getElementById('film-envelope');
    const letter = document.getElementById('inner-letter-sheet');
    const sealPrompt = document.getElementById('wax-seal-prompt');
    if (!envelope || !letter) return;

    envelopeOpened = !envelopeOpened;

    if (envelopeOpened) {
      // Auto-start background music on letter opening if not already playing
      if (window.bgMusic && !window.bgMusic.isPlaying) {
        window.bgMusic.play();
      }

      envelope.classList.add('open');
      letter.classList.remove('hidden', 'opacity-0', 'translate-y-12');
      letter.classList.add('opacity-100', 'translate-y-0');

      if (sealPrompt) sealPrompt.textContent = portfolioData.envelope.foldPrompt;
    } else {
      envelope.classList.remove('open');
      letter.classList.add('opacity-0', 'translate-y-12');
      setTimeout(() => {
        if (!envelopeOpened) letter.classList.add('hidden');
      }, 500);

      if (sealPrompt) sealPrompt.textContent = portfolioData.envelope.sealPrompt;
    }
  };

  // --- Background Audio Toggle Controller ---
  function setupAudioController() {
    const btnAudio = document.getElementById('btn-ambient-music');
    const audioIcon = document.getElementById('ambient-music-icon');
    const audioLabel = document.getElementById('ambient-music-label');

    if (!btnAudio) return;

    if (window.bgMusic) {
      window.bgMusic.onStateChange = function (isPlaying) {
        if (isPlaying) {
          if (audioIcon) audioIcon.textContent = '🔊';
          if (audioLabel) audioLabel.textContent = 'Hedwig\'s Theme: ON';
          btnAudio.classList.add('border-amber-400', 'text-amber-300', 'bg-amber-950/50', 'shadow-[0_0_15px_rgba(255,215,0,0.3)]');
        } else {
          if (audioIcon) audioIcon.textContent = '🔈';
          if (audioLabel) audioLabel.textContent = 'Hedwig\'s Theme: OFF';
          btnAudio.classList.remove('border-amber-400', 'text-amber-300', 'bg-amber-950/50', 'shadow-[0_0_15px_rgba(255,215,0,0.3)]');
        }
      };
    }

    btnAudio.addEventListener('click', (e) => {
      e.stopPropagation();
      if (window.bgMusic) {
        window.bgMusic.toggle();
      }
    });
  }

  // --- Proof Lightbox Modal with Full-Screen Zoom ---
  window.openProofLightbox = function (credId) {
    const cred = portfolioData.credentials.items.find((c) => c.id === credId);
    const modal = document.getElementById('proof-modal');
    if (!cred || !modal) return;

    const modalTitle = document.getElementById('proof-modal-title');
    const modalIssuer = document.getElementById('proof-modal-issuer');
    const modalScores = document.getElementById('proof-modal-scores');
    const modalNote = document.getElementById('proof-modal-note');
    const modalImg = document.getElementById('proof-modal-img');
    const zoomContainer = document.getElementById('proof-modal-zoom-container');
    const zoomImg = document.getElementById('proof-modal-zoom-img');

    if (modalTitle) modalTitle.textContent = cred.title;
    if (modalIssuer) modalIssuer.textContent = `${cred.issuer} • ${cred.date}`;
    if (modalScores) modalScores.textContent = cred.rank;
    if (modalNote) modalNote.textContent = cred.proofNote;
    if (modalImg) modalImg.src = cred.proofImage;

    // Show zoomed crop if available (e.g. for scholarship row 344)
    if (cred.zoomImage && zoomContainer && zoomImg) {
      zoomImg.src = cred.zoomImage;
      zoomContainer.classList.remove('hidden');
    } else if (zoomContainer) {
      zoomContainer.classList.add('hidden');
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  window.closeProofLightbox = function () {
    const modal = document.getElementById('proof-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  // --- Dynamic Experience Keyword Filter ---
  window.filterExperienceByKeyword = function (keyword) {
    activeExpKeyword = keyword;
    const container = document.getElementById('pensieve-cards-container');
    if (!container) return;

    // Update button states
    document.querySelectorAll('.btn-exp-keyword').forEach((btn) => {
      const k = btn.getAttribute('data-keyword');
      if (k === keyword) {
        btn.className = 'btn-exp-keyword px-4 py-1.5 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400 font-cinzel font-semibold shadow-[0_0_12px_rgba(56,189,248,0.3)] transition';
      } else {
        btn.className = 'btn-exp-keyword px-4 py-1.5 text-xs rounded-full border border-zinc-800 text-zinc-400 hover:text-cyan-200 transition font-cinzel';
      }
    });

    // Filter items
    const filtered = portfolioData.experience.items.filter((item) => {
      if (keyword === 'all') return true;
      return item.category.includes(keyword);
    });

    container.innerHTML = '';
    filtered.forEach((item) => {
      let houseBorder = 'border-amber-500/50';
      let badgeStyle = 'bg-amber-950/70 text-amber-200 border-amber-600/50';
      if (item.house === 'slytherin') {
        houseBorder = 'border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.15)]';
        badgeStyle = 'bg-emerald-950/80 text-emerald-200 border-emerald-500/50';
      } else if (item.house === 'ravenclaw') {
        houseBorder = 'border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.15)]';
        badgeStyle = 'bg-cyan-950/80 text-cyan-200 border-cyan-500/50';
      } else if (item.house === 'gryffindor') {
        houseBorder = 'border-rose-500/60 shadow-[0_0_20px_rgba(244,63,94,0.15)]';
        badgeStyle = 'bg-rose-950/80 text-rose-200 border-rose-500/50';
      }

      const card = document.createElement('div');
      card.className = `parchment-card p-6 md:p-8 rounded-3xl border ${houseBorder} mb-6 relative group transition duration-300`;
      card.innerHTML = `
        <div class="ornate-corner ornate-corner-tl"></div>
        <div class="ornate-corner ornate-corner-tr"></div>
        <div class="ornate-corner ornate-corner-bl"></div>
        <div class="ornate-corner ornate-corner-br"></div>

        <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <div class="inline-block px-3 py-1 text-xs font-semibold rounded-full border ${badgeStyle} mb-2 font-cinzel">
              ${item.houseBadge}
            </div>
            <h3 class="text-xl md:text-2xl font-bold font-cinzel text-zinc-100">${item.role}</h3>
            <p class="text-sm font-semibold text-amber-300 font-cinzel">${item.company}</p>
          </div>
          <div class="text-right">
            <span class="text-xs font-mono text-cyan-300 px-3 py-1 bg-zinc-900/90 rounded-md border border-cyan-500/30">
              ${item.period}
            </span>
            <p class="text-xs text-zinc-400 mt-1">${item.location}</p>
          </div>
        </div>

        <ul class="mt-4 space-y-2.5 text-sm md:text-base text-zinc-300 leading-relaxed font-parchment text-lg">
          ${item.highlights.map((h) => `<li class="flex items-start gap-2.5"><span class="text-amber-400 text-sm mt-1">✦</span><span>${h}</span></li>`).join('')}
        </ul>

        <div class="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap gap-2">
          ${item.tags.map((t) => `<span class="px-2.5 py-1 text-xs rounded-md bg-zinc-900/90 text-amber-200 border border-amber-900/40">#${t}</span>`).join('')}
        </div>
      `;
      container.appendChild(card);
    });
  };

  // --- Dynamic Credentials Relic Tab Switcher ---
  window.selectCredentialTab = function (credId) {
    activeCredId = credId;
    const cred = portfolioData.credentials.items.find((c) => c.id === credId);
    if (!cred) return;

    // Update tab button styles
    document.querySelectorAll('.btn-cred-tab').forEach((btn) => {
      const id = btn.getAttribute('data-cred-id');
      if (id === credId) {
        btn.className = 'btn-cred-tab px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold font-cinzel border-2 border-amber-400 bg-amber-500/20 text-amber-300 shadow-[0_0_15px_rgba(255,215,0,0.2)] transition';
      } else {
        btn.className = 'btn-cred-tab px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-cinzel border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-amber-200 transition';
      }
    });

    // Render Active Credential Card with Inline Proof Preview
    const container = document.getElementById('active-cred-display');
    if (!container) return;

    container.innerHTML = `
      <div class="parchment-card p-6 md:p-8 rounded-3xl border-2 border-amber-400/80 shadow-2xl relative">
        <div class="ornate-corner ornate-corner-tl"></div>
        <div class="ornate-corner ornate-corner-tr"></div>
        <div class="ornate-corner ornate-corner-bl"></div>
        <div class="ornate-corner ornate-corner-br"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- Left Col: Details & Verification Badges -->
          <div class="lg:col-span-7 space-y-4">
            <div class="flex flex-wrap items-center gap-3">
              <span class="px-3 py-1 text-xs font-bold rounded-full bg-amber-950 border border-amber-500/60 text-amber-300 font-cinzel">
                ${cred.rank}
              </span>
              <span class="text-xs font-mono text-cyan-300">${cred.date}</span>
            </div>

            <h3 class="text-2xl md:text-3xl font-bold font-cinzel text-gold-gradient">
              ${cred.title}
            </h3>
            <p class="text-xs sm:text-sm font-semibold text-zinc-400 font-cinzel">
              ${cred.issuer}
            </p>

            <div class="p-3.5 bg-zinc-950/80 rounded-xl border border-amber-500/30 text-xs font-mono text-amber-300/90">
              ${cred.details}
            </div>

            <p class="font-parchment text-lg md:text-xl text-zinc-300 leading-relaxed">
              ${cred.description}
            </p>

            <!-- Verification Stamp Note -->
            <div class="p-3 bg-emerald-950/40 rounded-xl border border-emerald-500/40 flex items-center gap-2 text-xs text-emerald-300 font-mono">
              <span>✓</span>
              <span>${cred.proofNote}</span>
            </div>

            <!-- Inspect Button -->
            <div class="pt-2">
              <button
                type="button"
                onclick="window.openProofLightbox('${cred.id}')"
                class="px-6 py-3 rounded-xl wax-seal text-white font-cinzel font-bold text-xs tracking-wider shadow-lg hover:scale-105 transition flex items-center gap-2"
              >
                <span>🔍</span>
                <span>Inspect Full-Resolution Proof</span>
                <span>⚡</span>
              </button>
            </div>
          </div>

          <!-- Right Col: Interactive Proof Document Preview -->
          <div class="lg:col-span-5">
            <div class="relative group cursor-pointer" onclick="window.openProofLightbox('${cred.id}')">
              <div class="bg-zinc-950 p-2 rounded-2xl border-2 border-amber-500/40 group-hover:border-amber-300 transition duration-300 shadow-xl overflow-hidden">
                ${
                  cred.zoomImage
                    ? `<div class="mb-2 p-1.5 bg-amber-950/60 rounded border border-amber-400/50">
                        <div class="text-[10px] font-cinzel text-amber-300 font-bold mb-1">★ Row 344 Highlighted:</div>
                        <img src="${cred.zoomImage}" alt="Zoomed Name Proof" class="w-full rounded bg-white" />
                      </div>`
                    : ''
                }
                <img
                  src="${cred.proofImage}"
                  alt="${cred.title}"
                  class="w-full max-h-64 object-contain rounded-lg transition duration-300 group-hover:scale-[1.02]"
                />
                <div class="mt-2 text-center text-[11px] font-mono text-cyan-300 flex items-center justify-center gap-1">
                  <span>✦</span>
                  <span>Click image to examine full document</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  };

  // --- Dynamic Skills Tab Switcher ---
  window.selectSkillTab = function (catId) {
    activeSkillCategory = catId;
    const cat = portfolioData.skills.categories.find((c) => c.id === catId);
    if (!cat) return;

    // Update buttons
    document.querySelectorAll('.btn-skill-tab').forEach((btn) => {
      const id = btn.getAttribute('data-skill-cat');
      if (id === catId) {
        btn.className = 'btn-skill-tab px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold font-cinzel border-2 border-cyan-400 bg-cyan-500/20 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] transition';
      } else {
        btn.className = 'btn-skill-tab px-4 py-2 rounded-2xl text-xs sm:text-sm font-cinzel border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-cyan-200 transition';
      }
    });

    const container = document.getElementById('active-skill-display');
    if (!container) return;

    container.innerHTML = `
      <div class="parchment-card p-6 md:p-8 rounded-3xl border border-cyan-500/40 shadow-2xl relative">
        <div class="ornate-corner ornate-corner-tl"></div>
        <div class="ornate-corner ornate-corner-tr"></div>
        <div class="ornate-corner ornate-corner-bl"></div>
        <div class="ornate-corner ornate-corner-br"></div>

        <div class="mb-6">
          <h3 class="text-xl md:text-2xl font-bold font-cinzel text-cyan-gradient mb-1">
            ${cat.name}
          </h3>
          <p class="text-xs sm:text-sm text-zinc-400 font-cinzel">
            ${cat.description}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${cat.skills
            .map(
              (s) => `
            <div class="p-4 bg-zinc-950/80 rounded-2xl border border-cyan-900/60 hover:border-cyan-400/50 transition">
              <div class="flex items-center gap-2 text-sm font-bold font-cinzel text-zinc-100 mb-1">
                <span class="text-amber-400 text-xs">✦</span>
                <span>${s.name}</span>
              </div>
              <div class="text-xs text-cyan-300 font-mono pl-4">${s.level}</div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `;
  };

  // --- Jump from Hero Stats Directly to Target Credential Proof ---
  window.jumpToCredential = function (credId) {
    const credSection = document.getElementById('chamber-credentials');
    if (credSection) {
      credSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        window.selectCredentialTab(credId);
      }, 400);
    }
  };

  // --- Initialize Everything on DOM Ready ---
  document.addEventListener('DOMContentLoaded', () => {
    setupAudioController();

    // Initial Experience Render
    window.filterExperienceByKeyword('all');

    // Initial Credential Tab Render
    window.selectCredentialTab('cred-scholarship');

    // Initial Skill Tab Render
    window.selectSkillTab('charms');

    // Modal Close Listeners
    const btnClose = document.getElementById('btn-close-modal');
    if (btnClose) btnClose.addEventListener('click', window.closeProofLightbox);

    const modal = document.getElementById('proof-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) window.closeProofLightbox();
      });
    }

    // Copy Email to Clipboard
    const btnCopy = document.getElementById('btn-copy-email');
    if (btnCopy) {
      btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(portfolioData.profile.email).then(() => {
          const toast = document.getElementById('copy-toast-text');
          if (toast) {
            toast.textContent = portfolioData.contact.copySuccess;
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 2500);
          }
        });
      });
    }
  });
})();
