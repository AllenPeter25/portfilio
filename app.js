import { portfolio } from "./portfolio.config.js";

const $ = (selector) => document.querySelector(selector);
const createTags = (items) =>
  items.map((item) => `<li class="tag">${item}</li>`).join("");
const escapeAttribute = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const arrowIcon = `
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h12M11 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

const expandIcon = `
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M10 4v12M5 11l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

const projectIcons = {
  enterprise: `
    <svg viewBox="0 0 180 180" aria-hidden="true">
      <rect x="30" y="35" width="120" height="110" rx="18" />
      <path d="M30 65h120M60 35v110" />
      <circle cx="45" cy="50" r="3" class="icon-fill" />
      <circle cx="96" cy="88" r="8" />
      <path d="M78 119c4-12 12-18 18-18s14 6 18 18M124 112V83M112 100l12 12 17-25" />
    </svg>`,
  kitchen: `
    <svg viewBox="0 0 180 180" aria-hidden="true">
      <path d="M42 117h96M51 111c2-30 18-49 39-49s37 19 39 49H51Z" />
      <path d="M82 62a8 8 0 0 1 16 0M68 134h44" />
      <path d="M68 51c-8-8 5-14-2-22M91 48c-8-9 7-15-1-24M113 52c-7-8 6-14-1-21" class="icon-steam" />
      <circle cx="136" cy="47" r="18" class="icon-cloud" />
      <path d="M123 50h28" class="icon-cloud-line" />
    </svg>`,
};

function renderNavigation() {
  $("#nav-links").innerHTML = portfolio.navigation
    .map(({ label, href }) => `<a href="${href}">${label}</a>`)
    .join("");
  $(".music-toggle span").textContent = portfolio.music.modeLabels.open;
}

function renderHero() {
  const { personal, stats } = portfolio;
  const visibleStats = stats.filter(({ enabled = true }) => enabled);

  $("#hero-copy").innerHTML = `
    <div class="status"><span></span> Based in ${personal.location}</div>
    <h1 id="hero-title">Building digital<br />experiences with<br /><em>purpose.</em></h1>
    <p class="hero__lede">${personal.tagline}</p>
    <div class="hero__actions">
      <a class="button" href="#work">View selected work ${arrowIcon}</a>
      ${personal.resume.enabled ? `<a class="text-link" href="${personal.resume.url}" target="_blank" rel="noreferrer">View résumé <span>↗</span></a>` : ""}
    </div>
    <div class="hero__metrics">
      ${visibleStats.length ? `
        <dl class="stats">
          ${visibleStats
            .map(
              ({ value, suffix, label }) => `
                <div class="stat">
                  <dt><span>${value}</span>${suffix}</dt>
                  <dd>${label}</dd>
                </div>`,
            )
            .join("")}
        </dl>` : ""}
      <div class="hero__socials hero__socials--metrics" aria-label="Social profiles">
        <a href="${personal.linkedin}" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
        <a href="${personal.github}" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
      </div>
    </div>`;

  $("#hero-visual").innerHTML = `
    <div class="profile-card glass">
      <div class="profile-card__top">
        <span class="window-dots"><i></i><i></i><i></i></span>
        <span>principles.md</span>
      </div>
      <div class="profile-card__body">
        <div class="monogram-wrap">
          <div class="orbit orbit--one"><span></span></div>
          <div class="orbit orbit--two"><span></span></div>
          <div class="monogram">${personal.initials}</div>
        </div>
        <div class="principles" aria-label="Engineering principles">
          <div class="principle">
            <span>01</span>
            <p><strong>Think in systems.</strong><small>Logic before syntax.</small></p>
          </div>
          <div class="principle">
            <span>02</span>
            <p><strong>Code for humans.</strong><small>Clean. Scalable. Maintainable.</small></p>
          </div>
          <div class="principle">
            <span>03</span>
            <p><strong>Ship. Learn. Refactor.</strong><small>Better with every iteration.</small></p>
          </div>
        </div>
      </div>
      <div class="profile-card__footer">
        <span>${personal.focus}</span>
        <span class="signal"><i></i><i></i><i></i><i></i></span>
      </div>
    </div>`;
}

function renderAbout() {
  $("#about-content").innerHTML = `
    <div class="about-copy reveal">
      <p>${portfolio.personal.summary}</p>
      <p>I care about the details behind a polished interface: predictable state, efficient data flow, responsive behavior, and a codebase that teammates can confidently extend.</p>
    </div>
    <div class="skills-grid">
      ${portfolio.skills
        .map(
          (group, index) => `
            <article class="skill-card glass reveal" style="--delay: ${index * 90}ms">
              <span class="skill-card__number">0${index + 1}</span>
              <h3>${group.title}</h3>
              <p>${group.description}</p>
              <ul class="tags" aria-label="${group.title} skills">${createTags(group.items)}</ul>
            </article>`,
        )
        .join("")}
    </div>`;
}

function renderExperience() {
  $("#experience-list").innerHTML = portfolio.experience
    .map(
      (company) => `
        <article class="experience glass reveal">
          <aside class="experience__meta">
            <span class="experience__line"></span>
            <p>${company.period}</p>
            <p>${company.location}</p>
          </aside>
          <div class="experience__body">
            <div class="experience__title">
              <div>
                <span class="eyebrow">Professional experience</span>
                <h3>${company.company}</h3>
              </div>
              ${
                company.logo
                  ? `<div class="experience__logo">
                      <img src="${company.logo.src}" alt="${company.logo.alt}" />
                    </div>`
                  : ""
              }
            </div>
            <div class="experience__roles">
              ${company.roles
                .map(
                  (role) => `
                    <section class="experience-role">
                      <div class="experience-role__heading">
                        <div>
                          <h4>${role.role}</h4>
                          <p>${role.period} <span>·</span> ${role.duration}</p>
                        </div>
                        ${role.current ? '<span class="experience__badge">Current role</span>' : '<span class="experience__badge experience__badge--previous">Previous role</span>'}
                      </div>
                      <p class="experience__intro">${role.intro}</p>
                      <ul class="impact-list">
                        ${role.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
                      </ul>
                      <ul class="tags" aria-label="Technologies used as ${role.role}">${createTags(role.technologies)}</ul>
                    </section>`,
                )
                .join("")}
            </div>
          </div>
        </article>`,
    )
    .join("");
}

function renderProjects() {
  $("#projects-list").innerHTML = portfolio.projects
    .map(
      (project, index) => {
        const architectureId = `project-architecture-${index}`;

        return `
        <article class="project-card project-card--${project.accent} glass reveal" style="--delay: ${index * 90}ms">
          <div class="project-card__head">
            <span>${project.number}</span>
            <span class="project-card__context"><i></i>${project.type}</span>
          </div>
          <div class="project-card__layout">
            <div class="project-card__art" aria-hidden="true">
              <div class="project-card__shape"></div>
              <div class="project-card__icon">${projectIcons[project.icon]}</div>
            </div>
            <div class="project-card__content">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-card__contribution"><span>My contribution</span>${project.contribution}</div>
              <ul class="tags" aria-label="Project technologies">${createTags(project.technologies)}</ul>
              ${
                project.url || project.architecture
                  ? `<div class="project-card__actions">
                      ${
                        project.url
                          ? `<a class="project-card__link" href="${project.url}" target="_blank" rel="noreferrer">${project.linkLabel} ${arrowIcon}</a>`
                          : ""
                      }
                      ${
                        project.architecture
                          ? `<button class="project-card__link project-card__architecture-toggle" type="button" aria-expanded="false" aria-controls="${architectureId}"><span class="project-card__architecture-label">View architecture</span>${expandIcon}</button>`
                          : ""
                      }
                    </div>`
                  : ""
              }
            </div>
          </div>
          ${
            project.architecture
              ? `<figure class="project-card__architecture" id="${architectureId}" hidden>
                  <a href="${project.architecture.image}" target="_blank" rel="noreferrer" aria-label="Open ${project.title} architecture at full size">
                    <img src="${project.architecture.image}" alt="${project.architecture.alt}" loading="lazy" decoding="async" />
                  </a>
                  <figcaption>System architecture <span>Tap the image to view full size.</span></figcaption>
                </figure>`
              : ""
          }
        </article>`;
      },
    )
    .join("");
}

function renderCredentials() {
  const { education, awards, publications } = portfolio.credentials;
  $("#credentials-list").innerHTML = `
    ${education.history
      .map(
        (item, index) => `
          <article class="credential credential--education glass reveal" style="--delay: ${index * 70}ms">
            <span class="credential__label">${education.label}</span>
            <div class="credential__icon">⌁</div>
            <h3>${item.degree}</h3>
            <p>${item.school}</p>
            <p class="credential__affiliation"><span>${item.affiliationLabel}</span>${item.affiliation}</p>
            <div class="credential__meta"><span>${item.period}</span></div>
            ${
              item.extras?.length
                ? `<button class="education-item__toggle" type="button" aria-expanded="false">
                    <span>See highlights</span><i>+</i>
                  </button>
                  <div class="education-item__details" hidden>
                    <ul class="education-extras">
                      ${item.extras
                        .map(
                          (extra) => `
                            <li>
                              ${
                                extra.url
                                  ? `<a href="${extra.url}" target="_blank" rel="noreferrer"><span>${extra.label}</span><span class="education-extras__arrow" aria-hidden="true">↗</span></a>`
                                  : `<span>${extra.label}</span>`
                              }
                            </li>`,
                        )
                        .join("")}
                    </ul>
                  </div>`
                : ""
            }
          </article>`,
      )
      .join("")}
    ${awards
      .map(
        (award, index) => `
          <article class="credential credential--recognition ${index === 0 ? "credential--group-start" : ""} glass reveal" style="--delay: ${90 + index * 70}ms">
            <span class="credential__label">${award.label}</span>
            <div class="credential__icon">✦</div>
            <h3>${award.title}</h3>
            <p>${award.organization}</p>
            <p class="credential__foot">${award.description}</p>
            ${award.url ? `<a class="credential__link" href="${award.url}" target="_blank" rel="noreferrer">View recognition ${arrowIcon}</a>` : ""}
          </article>`,
      )
      .join("")}
    ${publications
      .map(
        (publication, index) => `
          <article class="credential credential--publication ${index === 0 ? "credential--group-start" : ""} glass reveal" style="--delay: ${180 + index * 70}ms">
            <span class="credential__label">${publication.label}</span>
            <div class="credential__icon">↗</div>
            <h3>${publication.title}</h3>
            ${publication.description ? `<p>${publication.description}</p>` : ""}
            <div class="credential__foot publication-journal">
              <span>Published in</span>
              <strong>${publication.journal}</strong>
            </div>
            ${publication.url ? `<a class="credential__link" href="${publication.url}" target="_blank" rel="noreferrer">Read publication ${arrowIcon}</a>` : ""}
          </article>`,
      )
      .join("")}`;
}

function getPerformanceMedia(performance) {
  const platform = performance.platform?.toLowerCase();

  if (platform === "youtube" && performance.videoId) {
    const videoId = encodeURIComponent(performance.videoId);
    return {
      embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1`,
      sourceUrl:
        performance.url ||
        (performance.format === "short"
          ? `https://www.youtube.com/shorts/${videoId}`
          : `https://www.youtube.com/watch?v=${videoId}`),
    };
  }

  if (platform === "instagram" && performance.url) {
    const cleanUrl = performance.url.split("?")[0].replace(/\/+$/, "");
    return { embedUrl: `${cleanUrl}/embed/?autoplay=1`, sourceUrl: performance.url };
  }

  return { embedUrl: "", sourceUrl: performance.url ?? "" };
}

function renderPerformance(performance, index, music) {
  const { embedUrl, sourceUrl } = getPerformanceMedia(performance);
  const platformKey = performance.platform?.toLowerCase();
  const usesInstagramPreview = platformKey === "instagram" && sourceUrl;
  const platform = platformKey === "youtube" ? "YouTube" : platformKey === "instagram" ? "Instagram" : "Media";
  const credit = performance.credit ?? "Independent performance";
  const format = performance.format === "short" ? "Short" : performance.format === "reel" ? "Reel" : "Video";
  const title = escapeAttribute(performance.title);
  const mediaPreview = performance.thumbnail
    ? `<img src="${escapeAttribute(performance.thumbnail)}" alt="" loading="lazy" />`
    : `<span class="performance-card__placeholder" aria-hidden="true"><i>▶</i><small>${platform}</small></span>`;

  return `
    <article class="performance-card ${performance.featured ? "performance-card--featured" : ""} ${performance.format === "short" || performance.format === "reel" ? "performance-card--vertical" : ""}" role="listitem" style="--delay: ${index * 80}ms">
      <div class="performance-card__media">
        ${
          usesInstagramPreview
            ? `<button class="performance-card__media-load performance-card__instagram-preview" type="button" data-embed-src="${escapeAttribute(embedUrl)}" data-embed-title="${title}" aria-label="${music.labels.playPerformance}: ${title}">
                ${mediaPreview}
                <span class="performance-card__play" aria-hidden="true">▶</span>
              </button>`
            : embedUrl
            ? `<button class="performance-card__media-load" type="button" data-embed-src="${escapeAttribute(embedUrl)}" data-embed-title="${title}" aria-label="${music.labels.playPerformance}: ${title}">
                ${mediaPreview}
                <span class="performance-card__play" aria-hidden="true">▶</span>
              </button>`
            : `<div class="performance-card__media-pending">${mediaPreview}</div>`
        }
      </div>
      <div class="performance-card__body">
        <div class="performance-card__labels"><span>${platform}</span><span>${format}</span>${performance.year ? `<time>${performance.year}</time>` : ""}</div>
        <h3>${performance.title}</h3>
        <p class="performance-card__credit"><strong>${credit}</strong>${performance.role ? `<span>${performance.role}</span>` : ""}</p>
        ${sourceUrl ? `<a href="${escapeAttribute(sourceUrl)}" target="_blank" rel="noreferrer">${platformKey === "instagram" ? music.labels.seeOnInstagram : `${music.labels.openPerformance} ${platform}`}<span aria-hidden="true">↗</span></a>` : ""}
      </div>
    </article>`;
}

function renderMusic() {
  const { music } = portfolio;
  const orderedBands = [...music.bands].sort((first, second) => (second.order ?? 0) - (first.order ?? 0));
  const performances = (music.performances ?? []).filter(({ enabled = true }) => enabled);

  $("#music-eyebrow").textContent = music.eyebrow;
  $("#music-title").innerHTML = music.heading.join("<br />");

  $("#music-content").innerHTML = `
    <div class="music-mode__intro reveal">
      <div class="music-mode__intro-copy">
        <p>${music.introduction}</p>
        <ul class="music-instruments" aria-label="Instruments played">
          ${music.instruments.map((instrument) => `<li>${instrument}</li>`).join("")}
        </ul>
      </div>
      <strong>${music.tagline}</strong>
    </div>
    <section class="band-chronology glass reveal" aria-labelledby="band-chronology-title">
      <button class="band-chronology__toggle" type="button" aria-expanded="${music.chronologyExpandedByDefault}" aria-controls="band-chronology-list" aria-label="${music.chronologyExpandedByDefault ? music.labels.collapseChronologyAria : music.labels.expandChronologyAria}" data-expand-label="${music.labels.expandChronologyAria}" data-collapse-label="${music.labels.collapseChronologyAria}">
        <span class="band-chronology__title">
          <small>${music.labels.chronologyKicker}</small>
          <strong id="band-chronology-title">${music.labels.chronology}</strong>
        </span>
        <span class="band-chronology__count">${orderedBands.length} ${orderedBands.length === 1 ? "band" : "bands"}</span>
        <span class="band-chronology__visual" aria-hidden="true">
          <span class="band-chronology__bars"><i></i><i></i><i></i></span>
          ${expandIcon}
        </span>
      </button>
      <div class="bands-grid" id="band-chronology-list" role="list" aria-label="Bands, latest first" ${music.chronologyExpandedByDefault ? "" : "hidden"}>
        ${orderedBands
          .map(
            (band, index) => `
              <article class="band-card reveal" role="listitem" style="--delay: ${index * 90}ms">
                <div class="band-card__heading">
                  <div class="band-card__labels">
                    <span>${music.labels.archive}</span>
                    ${index === 0 ? `<strong>${music.labels.latest}</strong>` : ""}
                  </div>
                  <h3>${band.url ? `<a href="${band.url}" target="_blank" rel="noreferrer">${band.name}<span aria-hidden="true">↗</span></a>` : band.name}</h3>
                  <p class="band-card__location">
                    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 18s6-5.4 6-11A6 6 0 0 0 4 7c0 5.6 6 11 6 11Z"/><circle cx="10" cy="7" r="2"/></svg>
                    ${band.location}
                  </p>
                </div>
                ${
                  band.subBands?.length
                    ? `<aside class="band-card__subbands" aria-label="${music.labels.subBands}">
                        <span>${music.labels.subBands}</span>
                        <ul>
                          ${band.subBands
                            .map(
                              (subBand) => `<li><strong>${subBand.url ? `<a href="${subBand.url}" target="_blank" rel="noreferrer">${subBand.name}<span aria-hidden="true">↗</span></a>` : subBand.name}</strong>${subBand.note ? `<small>${subBand.note}</small>` : ""}</li>`,
                            )
                            .join("")}
                        </ul>
                      </aside>`
                    : ""
                }
                <dl class="band-meta">
                  <div><dt>${music.labels.role}</dt><dd>${band.role}</dd></div>
                  <div><dt>${music.labels.activeYears}</dt><dd>${band.activeYears}</dd></div>
                </dl>
                ${
                  band.achievements?.length
                    ? `<button class="band-card__highlights-toggle" type="button" aria-expanded="false" aria-controls="band-highlights-${index}">
                        <span>${music.labels.viewHighlights}</span>${expandIcon}
                      </button>
                      <div class="band-achievements" id="band-highlights-${index}" hidden>
                        <h4>${music.labels.achievements}</h4>
                        <ul>${band.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}</ul>
                      </div>`
                    : ""
                }
              </article>`,
          )
          .join("")}
      </div>
    </section>
    <section class="band-chronology performance-showcase glass reveal" aria-labelledby="performance-showcase-title">
      <button class="band-chronology__toggle" type="button" aria-expanded="${music.performancesExpandedByDefault}" aria-controls="performance-showcase-list" aria-label="${music.performancesExpandedByDefault ? music.labels.collapsePerformancesAria : music.labels.expandPerformancesAria}" data-expand-label="${music.labels.expandPerformancesAria}" data-collapse-label="${music.labels.collapsePerformancesAria}">
        <span class="band-chronology__title">
          <small>${music.labels.performancesKicker}</small>
          <strong id="performance-showcase-title">${music.labels.performances}</strong>
        </span>
        <span class="band-chronology__count">${performances.length} ${performances.length === 1 ? "performance" : "performances"}</span>
        <span class="band-chronology__visual" aria-hidden="true">
          <span class="band-chronology__bars"><i></i><i></i><i></i></span>
          ${expandIcon}
        </span>
      </button>
      <div class="performance-grid" id="performance-showcase-list" role="list" aria-label="Selected music performances" ${music.performancesExpandedByDefault ? "" : "hidden"}>
        ${
          performances.length
            ? performances.map((performance, index) => renderPerformance(performance, index, music)).join("")
            : `<p class="performance-grid__empty" role="listitem">${music.labels.emptyPerformances}</p>`
        }
      </div>
    </section>`;
}

function renderContact() {
  const { personal } = portfolio;
  $("#contact-panel").innerHTML = `
    <span class="eyebrow">06 / Contact</span>
    <h2 id="contact-title">Have an interesting<br />problem to solve?</h2>
    <p>Let’s talk about the product, the people using it, and the cleanest way to bring it to life.</p>
    <div class="contact__actions">
      <a class="button button--light" href="mailto:${personal.email}">Start a conversation ${arrowIcon}</a>
      <a class="contact__mail" href="mailto:${personal.email}">${personal.email}</a>
    </div>
    <div class="contact__links">
      <a href="${personal.linkedin}" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
      <a href="${personal.github}" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
      ${personal.resume.enabled ? `<a href="${personal.resume.url}" target="_blank" rel="noreferrer">Résumé <span>↗</span></a>` : ""}
      <a href="tel:${personal.phoneHref}">${personal.phone}</a>
    </div>`;
}

function renderFooter() {
  $("#footer").innerHTML = `
    <p>© ${new Date().getFullYear()} ${portfolio.personal.name}</p>
    <p>Designed & built with intention.</p>
    <a href="#top">Back to top ↑</a>`;
}

function setupInteractions() {
  const toggle = $(".nav__toggle");
  const navLinks = $("#nav-links");
  const header = $(".site-header");
  const glow = $(".cursor-glow");
  const musicToggle = $(".music-toggle");
  let portfolioScrollPosition = 0;

  const scrollToSection = (hash, behavior = "smooth") => {
    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    target.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
    target.scrollIntoView({ block: "start", behavior });
  };

  const setMusicMode = (enteringMusicMode, { updateHistory = true } = {}) => {
    const wasInMusicMode = document.body.classList.contains("music-mode");
    if (enteringMusicMode && !wasInMusicMode) portfolioScrollPosition = window.scrollY;

    document.body.classList.toggle("music-mode", enteringMusicMode);
    musicToggle.setAttribute("aria-pressed", String(enteringMusicMode));
    musicToggle.setAttribute("aria-label", enteringMusicMode ? "Return to developer portfolio" : "Switch to music mode");
    musicToggle.querySelector("span").textContent = enteringMusicMode
      ? portfolio.music.modeLabels.close
      : portfolio.music.modeLabels.open;
    toggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");

    if (updateHistory) {
      window.history.pushState({ musicMode: enteringMusicMode }, "", enteringMusicMode ? "/music" : "/");
    }

    requestAnimationFrame(() => {
      if (enteringMusicMode !== wasInMusicMode) {
        window.scrollTo({ top: enteringMusicMode ? 0 : portfolioScrollPosition, behavior: "auto" });
      }
      if (enteringMusicMode) {
        document.querySelectorAll("#music .reveal").forEach((element) => element.classList.add("is-visible"));
      }
    });
  };

  musicToggle.addEventListener("click", () => {
    setMusicMode(!document.body.classList.contains("music-mode"));
  });

  if (window.location.pathname.replace(/\/+$/, "") === "/music") {
    setMusicMode(true, { updateHistory: false });
  }

  window.addEventListener("popstate", () => {
    setMusicMode(window.location.pathname.replace(/\/+$/, "") === "/music", { updateHistory: false });
  });

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("is-open", !isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    const hash = link.getAttribute("href");
    if (!document.getElementById(hash.slice(1))) return;

    event.preventDefault();
    toggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");

    if (document.body.classList.contains("music-mode")) {
      setMusicMode(false, { updateHistory: false });
    }

    window.history.pushState({ musicMode: false }, "", `/${hash}`);
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToSection(hash)));
  });

  document.addEventListener("click", (event) => {
    const chronologyButton = event.target.closest(".band-chronology__toggle");
    if (chronologyButton) {
      const chronology = document.getElementById(chronologyButton.getAttribute("aria-controls"));
      const isExpanded = chronologyButton.getAttribute("aria-expanded") === "true";
      chronologyButton.setAttribute("aria-expanded", String(!isExpanded));
      chronologyButton.setAttribute(
        "aria-label",
        isExpanded ? chronologyButton.dataset.expandLabel : chronologyButton.dataset.collapseLabel,
      );
      chronology.hidden = isExpanded;
      return;
    }

    const mediaButton = event.target.closest(".performance-card__media-load");
    if (mediaButton) {
      const iframe = document.createElement("iframe");
      iframe.src = mediaButton.dataset.embedSrc;
      iframe.title = mediaButton.dataset.embedTitle;
      iframe.loading = "eager";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;
      iframe.setAttribute("scrolling", "no");
      mediaButton.replaceWith(iframe);
      return;
    }

    const highlightsButton = event.target.closest(".band-card__highlights-toggle");
    if (highlightsButton) {
      const highlights = document.getElementById(highlightsButton.getAttribute("aria-controls"));
      const isExpanded = highlightsButton.getAttribute("aria-expanded") === "true";
      highlightsButton.setAttribute("aria-expanded", String(!isExpanded));
      highlightsButton.querySelector("span").textContent = isExpanded
        ? portfolio.music.labels.viewHighlights
        : portfolio.music.labels.hideHighlights;
      highlights.hidden = isExpanded;
      return;
    }

    const architectureButton = event.target.closest(".project-card__architecture-toggle");
    if (architectureButton) {
      const architecture = document.getElementById(architectureButton.getAttribute("aria-controls"));
      const isExpanded = architectureButton.getAttribute("aria-expanded") === "true";
      architectureButton.setAttribute("aria-expanded", String(!isExpanded));
      architectureButton.querySelector(".project-card__architecture-label").textContent = isExpanded
        ? "View architecture"
        : "Hide architecture";
      architecture.hidden = isExpanded;
      return;
    }

    const moreButton = event.target.closest(".education-item__toggle");
    if (!moreButton) return;

    const details = moreButton.nextElementSibling;
    const isExpanded = moreButton.getAttribute("aria-expanded") === "true";
    moreButton.setAttribute("aria-expanded", String(!isExpanded));
    moreButton.querySelector("span").textContent = isExpanded ? "See highlights" : "Hide highlights";
    moreButton.querySelector("i").textContent = isExpanded ? "+" : "−";
    details.hidden = isExpanded;
  });

  window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 24), {
    passive: true,
  });

  window.addEventListener(
    "pointermove",
    (event) => {
      glow.style.transform = `translate(${event.clientX - 220}px, ${event.clientY - 220}px)`;
    },
    { passive: true },
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  // A short fallback prevents content from remaining hidden if a browser delays
  // IntersectionObserver callbacks during restoration or deep-link navigation.
  window.setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  }, 900);

  const sections = [...document.querySelectorAll("main section[id]")];
  const menuItems = [...document.querySelectorAll(".nav__links a")];
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        menuItems.forEach((item) => {
          item.classList.toggle("is-active", item.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-30% 0px -60%", threshold: 0 },
  );
  sections.forEach((section) => sectionObserver.observe(section));
}

renderNavigation();
renderHero();
renderAbout();
renderExperience();
renderProjects();
renderCredentials();
renderMusic();
renderContact();
renderFooter();
setupInteractions();

// The browser may resolve a deep-link hash before configuration-driven sections
// have their final height. Re-apply it once rendering has completed.
if (window.location.hash) {
  const alignDeepLink = () => {
    const target = document.querySelector(window.location.hash);
    target?.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
    target?.scrollIntoView({ block: "start" });
  };

  requestAnimationFrame(() => requestAnimationFrame(alignDeepLink));
  window.addEventListener("load", () => window.setTimeout(alignDeepLink, 50), { once: true });
}
