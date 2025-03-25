function openBox(image) {
  const slidingBox = document.getElementById('slidingBox');
  const overlay = document.getElementById('overlay');
  const gallery = document.querySelector('.gallery');
  const backBtn = document.getElementById('backBtn');

  // Get the image data attributes
  const imageSrc = image.src;
  const imageAlt = image.alt;
  const imageTitle = image.getAttribute('data-title');
  const imageDescription = image.getAttribute('data-description');
  const imageColor = image.getAttribute('data-color');

  // Apply the background color
  slidingBox.style.backgroundColor = imageColor;

  // Determine if text should be white or black based on brightness
  const textColor = getContrastColor(imageColor);
  slidingBox.style.color = textColor;

  // Set custom padding for Devilman image
  if (imageAlt === "Devilman Fanart") {
      slidingBox.style.paddingBottom = "40px"; // Add extra space for this image
  } else {
      slidingBox.style.paddingBottom = "20px"; // Default padding
  }

  // Move the gallery
  gallery.style.transform = 'translateX(-70%)';
  slidingBox.classList.add('open');
  backBtn.style.opacity = '0';
  overlay.classList.add('show');

  // Update the sliding box content
  const slidingBoxContent = document.getElementById('slidingBoxContent');
  slidingBoxContent.innerHTML = `
    <h2>${imageTitle}</h2>
    <img src="${imageSrc}" alt="${imageAlt}" style="width: 100%; max-width: 100%; height: auto;">
    <p>${imageDescription}</p>
  `;
}


// Function to determine contrast color (white or black)
function getContrastColor(hex) {
  hex = hex.replace("#", ""); // Remove #
  
  // Convert to RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Calculate brightness (YIQ formula)
  let brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black (#000) for light backgrounds, white (#fff) for dark
  return brightness > 128 ? "#000000" : "#FFFFFF";
}



  function closeBox() {
    const slidingBox = document.getElementById('slidingBox');
    const overlay = document.getElementById('overlay');
    const gallery = document.querySelector('.gallery');
    const backBtn = document.getElementById('backBtn');

    gallery.style.transform = 'translateX(0)';

    slidingBox.classList.remove('open');

    backBtn.style.opacity = '1';

    overlay.classList.remove('show');
  }