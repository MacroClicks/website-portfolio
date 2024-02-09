'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

    // Pause videos regardless of category
    const videos = document.querySelectorAll("video");
    videos.forEach(video => video.pause());

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    // Pause videos regardless of category
    const videos = document.querySelectorAll("video");
    videos.forEach(video => video.pause());

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}
//service modal
document.addEventListener('DOMContentLoaded', function () {
  const serviceLinks = document.querySelectorAll('.service-item-link');
  const modalContainers = document.querySelectorAll('.service-item-modal-container');

  serviceLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetModalId = link.getAttribute('data-target');
      const targetModal = document.getElementById(targetModalId);

      if (targetModal) {
        modalContainers.forEach(function (container) {
          container.style.display = container.id === targetModalId ? 'block' : 'none';
        });
      }
    });
  });

  modalContainers.forEach(function (container) {
    container.addEventListener('click', function (event) {
      if (event.target === container) {
        container.style.display = 'none';
      }
    });
  });
});

function closeModal(modalId) {
  const targetModal = document.getElementById(modalId);
  if (targetModal) {
    targetModal.style.display = 'none';
  }
}


// Project modal variables
const projectModalContainer = document.getElementById('projectModalContainer');
const projectModalTitle = document.getElementById('projectModalTitle');
const projectModalCategory = document.getElementById('projectModalCategory');
const mediaContainer = document.getElementById('mediaContainer');
const closeModalBtn = document.querySelector('.close-modal-btn');

// Event listener to close modal when clicking on modal container
projectModalContainer.addEventListener('click', function (event) {
  // Check if the click occurred outside the modal content (within the container)
  if (event.target === projectModalContainer) {
    closeProjectModal();
  }
});

// Add an event listener for the close button
closeModalBtn.addEventListener('click', closeProjectModal);

// Function to open the project modal
// Function to open the project modal
function openProjectModal(src, title, category, isVideo = false, isGif = false) {
  projectModalTitle.textContent = title;
  projectModalCategory.textContent = category;

  // Clear previous content in mediaContainer
  mediaContainer.innerHTML = '';

  // Create media element based on whether it's an image, video or gif
  let mediaElement;
  if (isVideo) {
    mediaElement = document.createElement('video');
    mediaElement.controls = true;
    mediaElement.autoplay = true;
  } else {
    mediaElement = document.createElement('img');
    // Apply styles for images
    mediaElement.style.borderRadius = '8px';
  }

  // Set attributes for media element
  mediaElement.src = src;
  mediaElement.alt = 'Project Media';

  // Add landscape or portrait class based on aspect ratio
  mediaElement.onload = function () {
    const aspectRatio = mediaElement.width / mediaElement.height;
    mediaElement.classList.add(aspectRatio >= 1 ? 'landscape' : 'portrait');
  };

  // Add error handling for video element creation
  if (isVideo) {
    mediaElement.onerror = function () {
      console.error('Error loading video:', src);
    };
  }

  // Append media element to the mediaContainer
  mediaContainer.appendChild(mediaElement);

  projectModalContainer.style.display = 'flex';
}

// Function to close the project modal
function closeProjectModal() {
  projectModalContainer.style.display = 'none';

  // Pause video when closing modal
  const videoElement = mediaContainer.querySelector('video');
  if (videoElement) {
    videoElement.pause();
  }
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}









// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");



// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}





































