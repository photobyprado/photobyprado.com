function renderGallery(galleryName, containerId) {
  const container = document.getElementById(containerId);

  if (!container || !galleries[galleryName]) return;

  container.innerHTML = "";

  galleries[galleryName].forEach(photo => {
    const button = document.createElement("button");
    button.className = `gallery-item ${photo.type} lightbox-trigger`;
    button.setAttribute("data-image", photo.src);

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt;

    button.appendChild(img);
    container.appendChild(button);
  });
}
