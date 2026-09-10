// pick(field, lang) : un champ peut être soit un texte simple (partagé fr/en),
// soit un objet {fr, en} — cette fonction gère les deux
function pick(field, lang) {
  if (field && typeof field === "object" && (field.fr !== undefined || field.en !== undefined)) {
    return field[lang] || field.fr || field.en;
  }
  return field;
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
      li.textContent = tag;
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

    const head = document.createElement("div");
    head.className = "project-head";

    const h3 = document.createElement("h3");
    h3.textContent = project.name;
    head.appendChild(h3);

    const status = document.createElement("span");
    status.className = "status status--" + project.status.variant;
    status.textContent = pick(project.status.label, lang);
    head.appendChild(status);

    article.appendChild(head);

    const p = document.createElement("p");
    p.textContent = pick(project.description, lang);
    article.appendChild(p);

    const ul = document.createElement("ul");
    ul.className = "tags";
    project.tags.forEach(tag => {
      const li = document.createElement("li");
      li.textContent = tag;
      ul.appendChild(li);
    });
    article.appendChild(ul);

    const a = document.createElement("a");
    a.className = "project-link";
    a.href = project.link.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = pick(project.link.label, lang) + " →";
    article.appendChild(a);

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
