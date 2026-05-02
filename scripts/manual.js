function leeniumInitManualUi() {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.getElementById("site-nav");
  if (navToggle && siteNav && navToggle.dataset.ready !== "1") {
    navToggle.dataset.ready = "1";
    navToggle.addEventListener("click", function () {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function normalizePath(value) {
    return (value || "")
      .replace(/^https?:\/\/[^/]+/i, "")
      .replace(/\/+$|^\/+|index\.html$/g, "")
      .replace(/^website\//, "");
  }

  const currentPath = normalizePath(window.location.pathname);

  document.querySelectorAll(".manual-link[data-manual-path]").forEach(function (link) {
    const linkPath = normalizePath(link.getAttribute("data-manual-path") || "");
    const isActive = linkPath === currentPath;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  const toc = document.querySelector(".page-toc");
  if (!toc) return;

  toc.classList.add("is-sticky");
  if (toc.dataset.ready === "1") return;
  toc.dataset.ready = "1";

  const tocLinks = Array.from(toc.querySelectorAll("a[href^='#']"));
  if (!tocLinks.length) return;

  const sections = tocLinks
    .map(function (link) {
      const id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  function setActive(id) {
    tocLinks.forEach(function (link) {
      const isActive = link.getAttribute("href") === "#" + id;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if (sections.length) {
    setActive(sections[0].id);
  }

  const observer = new IntersectionObserver(function (entries) {
    const visible = entries
      .filter(function (entry) { return entry.isIntersecting; })
      .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
    if (!visible.length) return;
    setActive(visible[0].target.id);
  }, {
    threshold: [0.3, 0.55, 0.8],
    rootMargin: "-22% 0px -55% 0px",
  });

  sections.forEach(function (section) {
    observer.observe(section);
  });

  window.addEventListener("beforeunload", function () {
    observer.disconnect();
  }, { once: true });
}

document.addEventListener("DOMContentLoaded", function () {
  try {
    leeniumInitManualUi();
  } catch (_error) {}
});

window.addEventListener("pageshow", function () {
  try {
    leeniumInitManualUi();
  } catch (_error) {}
});
