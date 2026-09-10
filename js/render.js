// pick(field, lang) : un champ peut être soit un texte simple (partagé fr/en),
// soit un objet {fr, en} — cette fonction gère les deux
function pick(field, lang) {
  if (field && typeof field === "object" && (field.fr !== undefined || field.en !== undefined)) {
    return field[lang] || field.fr || field.en;
  }
  return field;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderCodeWindow(lang, container) {
  if (!container) return;
  const roles = SITE_DATA.roles.map(r => pick(r, lang));
  const rolesHtml = roles
    .map(r => `    <span class="tok-str">"${escapeHtml(r)}"</span>,`)
    .join("\n");
  const locationLabel = lang === "fr" ? "France" : "France";
  const html =
`<span class="tok-punc">{</span>
  <span class="tok-key">name</span><span class="tok-punc">:</span> <span class="tok-str">"Kaprisky Ndo Moutsinga"</span><span class="tok-punc">,</span>
  <span class="tok-key">roles</span><span class="tok-punc">:</span> <span class="tok-punc">[</span>
${rolesHtml}
  <span class="tok-punc">],</span>
  <span class="tok-key">stack</span><span class="tok-punc">:</span> <span class="tok-punc">[</span><span class="tok-str">"PHP"</span><span class="tok-punc">,</span> <span class="tok-str">"React"</span><span class="tok-punc">,</span> <span class="tok-str">"Java"</span><span class="tok-punc">],</span>
  <span class="tok-key">location</span><span class="tok-punc">:</span> <span class="tok-str">"${locationLabel}"</span><span class="tok-punc">,</span>
  <span class="tok-key">openToWork</span><span class="tok-punc">:</span> <span class="tok-bool">true</span>
<span class="tok-punc">}</span>`;
  container.innerHTML = html;
}

function renderStats(stats, lang, container) {
  container.innerHTML = "";
  stats.forEach(stat => {
    const item = document.createElement("div");
    item.className = "stat";

    const value = document.createElement("span");
    value.className = "stat__value";
    value.textContent = stat.value;
    item.appendChild(value);

    const label = document.createElement("span");
    label.className = "stat__label";
    label.textContent = pick(stat.label, lang);
    item.appendChild(label);

    container.appendChild(item);
  });
}

function renderRoles(roles, lang, container) {
  container.innerHTML = "";
  roles.forEach((role, i) => {
    const span = document.createElement("span");
    span.className = "role" + (i === 0 ? " role--active" : "");
    span.dataset.role = "";
    span.textContent = pick(role, lang);
    container.appendChild(span);
  });
}

function renderToolkit(toolkit, lang, container) {
  container.innerHTML = "";
  toolkit.forEach(category => {
    const card = document.createElement("div");
    card.className = "toolkit-card";

    const h3 = document.createElement("h3");
    h3.textContent = pick(category.title, lang);
    card.appendChild(h3);

    const ul = document.createElement("ul");
    ul.className = "tags";
    category.tags.forEach(tag => {
      const li = document.createElement("li");
      const iconPath = typeof getTechIconPath === "function" ? getTechIconPath(tag) : null;
      if (iconPath) {
        li.classList.add("tags__item--icon");
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("aria-hidden", "true");
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", iconPath);
        svg.appendChild(path);
        li.appendChild(svg);
      }
      const span = document.createElement("span");
      span.textContent = tag;
      li.appendChild(span);
      ul.appendChild(li);
    });
    card.appendChild(ul);

    container.appendChild(card);
  });
}

function renderProjects(projects, lang, container) {
  container.innerHTML = "";
  projects.forEach(project => {
    const article = document.createElement("article");
    article.className = "project-card";

    const cover = document.createElement("div");
    cover.className = "project-cover";
    if (project.image) {
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = "";
      img.loading = "lazy";
      cover.appendChild(img);
    } else {
      cover.classList.add("project-cover--placeholder");
      const initial = document.createElement("span");
      initial.textContent = project.name.charAt(0);
      cover.appendChild(initial);
    }
    article.appendChild(cover);

    const body = document.createElement("div");
    body.className = "project-card__body";

    const head = document.createElement("div");
    head.className = "project-head";

    const h3 = document.createElement("h3");
    h3.textContent = project.name;
    head.appendChild(h3);

    const status = document.createElement("span");
    status.className = "status status--" + project.status.variant;
    status.textContent = pick(project.status.label, lang);
    head.appendChild(status);

    body.appendChild(head);

    const p = document.createElement("p");
    p.textContent = pick(project.description, lang);
    body.appendChild(p);

    const ul = document.createElement("ul");
    ul.className = "tags";
    project.tags.forEach(tag => {
      const li = document.createElement("li");
      li.textContent = tag;
      ul.appendChild(li);
    });
    body.appendChild(ul);

    const a = document.createElement("a");
    a.className = "project-link";
    a.href = project.link.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = pick(project.link.label, lang) + " →";
    body.appendChild(a);

    article.appendChild(body);
    container.appendChild(article);
  });
}

function renderTimeline(experience, lang, container) {
  container.innerHTML = "";
  experience.forEach(job => {
    const li = document.createElement("li");
    li.className = "timeline-item";

    const dateWrap = document.createElement("div");
    dateWrap.className = "timeline-date";
    const dateSpan = document.createElement("span");
    dateSpan.textContent = job.date;
    dateWrap.appendChild(dateSpan);
    li.appendChild(dateWrap);

    const content = document.createElement("div");
    content.className = "timeline-content";

    const h3 = document.createElement("h3");
    h3.textContent = pick(job.title, lang);
    content.appendChild(h3);

    const org = document.createElement("p");
    org.className = "timeline-org";
    org.textContent = job.org;
    content.appendChild(org);

    const ul = document.createElement("ul");
    job.bullets.forEach(bullet => {
      const bulletLi = document.createElement("li");
      bulletLi.textContent = pick(bullet, lang);
      ul.appendChild(bulletLi);
    });
    content.appendChild(ul);

    li.appendChild(content);
    container.appendChild(li);
  });
}

function renderFormation(formation, lang, container) {
  container.innerHTML = "";
  formation.forEach(entry => {
    const div = document.createElement("div");
    div.className = "formation-item";

    const h3 = document.createElement("h3");
    h3.textContent = pick(entry.title, lang);
    div.appendChild(h3);

    const org = document.createElement("p");
    org.className = "timeline-org";
    org.textContent = entry.org;
    div.appendChild(org);

    container.appendChild(div);
  });
}

function renderExtras(extras, lang, container) {
  container.innerHTML = "";
  extras.forEach(category => {
    const card = document.createElement("div");
    card.className = "toolkit-card";

    const h3 = document.createElement("h3");
    h3.textContent = pick(category.title, lang);
    card.appendChild(h3);

    const ul = document.createElement("ul");
    ul.className = "tags";
    category.tags.forEach(tag => {
      const li = document.createElement("li");
      li.textContent = pick(tag, lang);
      ul.appendChild(li);
    });
    card.appendChild(ul);

    container.appendChild(card);
  });
}

function renderProfilParagraphs(paragraphs, container) {
  container.innerHTML = "";
  paragraphs.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    container.appendChild(p);
  });
}
