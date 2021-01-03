window.addEventListener("load", () => {
  const projects = [
    { name: "article-preview-component" },
    { name: "base-apparel-coming-soon" },
    { name: "four-card-feature-section" },
    { name: "fylo-data-storage-component" },
    { name: "single-price-grid-component" },
    { name: "profile-card-component" },
  ];

  const projectsList = document.querySelector(".projects-list");

  projects.forEach(({ name }, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      <a href="/${name}/index.html">
        <p>${index + 1}. ${formatProjectName(name)}</p>
        <img src="/${name}/design/desktop-design.jpg" alt="${name}" />
      </a>     
    `;

    projectsList.appendChild(listItem);
  });

  function formatProjectName(name) {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }
});
