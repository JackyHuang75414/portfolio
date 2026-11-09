// Yuhao Huang — Portfolio
(function () {
  'use strict';

  // ------------------------------------------------------------------
  // Project data (images live under /assets/<slug>/N.jpg)
  // ------------------------------------------------------------------
  var projects = {
    tagwalk: {
      title: 'Tagwalk',
      category: 'UX / UI Design — AI Fashion Search Engine',
      description:
        'Deeply involved in constructing convolutional neural network AI systems for a fashion search engine, gathering client feedback from LVMH, Kering and Richemont and implementing customised iterations. Revamped the app user flow and established an online user community, driving a 34% increase in user-generated posts. Named one of TIME\u2019s Best Inventions of 2025 with exclusive coverage in Vogue.',
      count: 2
    },
    rabbit: {
      title: 'Year of the Rabbit',
      category: 'Campaign & Game Design — ECENTIME New Year',
      description:
        'Large-scale online game for the 2023 ECENTIME New Year event, \u201CA Prosperous Year of the Rabbit\u201D. The full development process from initial sketching to independent execution \u2014 gameplay flowcharts, chibi-style characters, interface prototypes, UI design, animation design, and the promotional video and animated advertisements for the event\u2019s later stages.',
      count: 10
    },
    onboarding: {
      title: 'App Onboarding',
      category: 'UI Design — Mobile Onboarding Flow',
      description:
        'Interface and onboarding flow design for a mobile application, guiding new users from first launch through account setup and first value.',
      count: 3
    },
    tinyplanet: {
      title: 'Tiny Planet',
      category: 'Illustration — Series',
      description:
        'A series of tiny planet illustrations exploring surreal, self-contained worlds.',
      count: 3
    },
    banknote: {
      title: 'Banknote Redesign',
      category: 'Illustration · Print — Currency Concept',
      description:
        'A banknote redesign concept exploring layout, typography, security patterns and colour across a complete currency set.',
      count: 6
    },
    zhongce: {
      title: 'Crowd-Testing Base',
      category: 'App UI / UX Design — \u4F17\u6D4B\u57FA\u5730',
      description:
        'Interface design for a crowd-testing (\u4F17\u6D4B) platform, covering the full product surface from discovery through task completion.',
      count: 7
    },
    pecs: {
      title: 'PECS Visual Teaching Aid',
      category: 'Inclusive Design — Communication Training System',
      description:
        'Visual aid teaching tool based on the PECS communication training system, designed for people with intellectual disabilities to support communication and learning.',
      count: 9
    },
    works: {
      title: 'Selected Works',
      category: 'Portfolio — \u9EC4\u79B9\u8C6A\u4F5C\u54C1',
      description:
        'A curated collection of selected design and illustration works spanning branding, UI design, illustration and inclusive design.',
      count: 34
    }
  };

  // ------------------------------------------------------------------
  // Modal
  // ------------------------------------------------------------------
  var modal = document.getElementById('modal');
  var modalTitle = document.getElementById('modalTitle');
  var modalCat = document.getElementById('modalCat');
  var modalHeading = document.getElementById('modalHeading');
  var modalDesc = document.getElementById('modalDesc');
  var modalCount = document.getElementById('modalCount');
  var modalGallery = document.getElementById('modalGallery');
  var modalClose = document.getElementById('modalClose');

  function openProject(slug) {
    var p = projects[slug];
    if (!p) return;
    modalTitle.textContent = p.title;
    modalCat.textContent = p.category;
    modalHeading.textContent = p.title;
    modalDesc.textContent = p.description;
    modalGallery.innerHTML = '';

    var i;
    for (i = 1; i <= p.count; i++) {
      var img = document.createElement('img');
      img.src = 'assets/' + slug + '/' + i + '.jpg';
      img.alt = p.title + ' — ' + i;
      img.loading = 'lazy';
      modalGallery.appendChild(img);
    }

    modalCount.textContent = p.count + ' images';
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    modalGallery.scrollTop = 0;
  }

  function closeProject() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  var cards = document.querySelectorAll('[data-project]');
  cards.forEach(function (card) {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', function () {
      openProject(card.getAttribute('data-project'));
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProject(card.getAttribute('data-project'));
      }
    });
  });

  modalClose.addEventListener('click', closeProject);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeProject();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeProject();
  });

  // ------------------------------------------------------------------
  // Mobile nav toggle
  // ------------------------------------------------------------------
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('is-open');
  });
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.classList.remove('is-open');
    });
  });

  // ------------------------------------------------------------------
  // Scroll reveal
  // ------------------------------------------------------------------
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
