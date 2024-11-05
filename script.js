const videos = [
  "./videos/video1.mp4",
  "./videos/video2.mp4",
  "./videos/video3.mp4",
  "./videos/video4.mp4",
];

let videoIndex = 0;
const videoElement = document.getElementById("video-slider");

function changeVideo() {
  videoElement.src = videos[videoIndex];
  videoIndex = (videoIndex + 1) % videos.length;
}

setInterval(changeVideo, 4000);

document.getElementById("next").addEventListener("click", () => {
  changeVideo();
});

document.getElementById("prev").addEventListener("click", () => {
  videoIndex = (videoIndex - 1 + videos.length) % videos.length;
  videoElement.src = videos[videoIndex];
});

document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const halfPageHeight = document.body.scrollHeight / 4;

  if (window.scrollY >= halfPageHeight) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
});

// Toggle search dropdown on desktop view
const searchIcon = document.getElementById("search-icon");
const searchDropdown = document.getElementById("search-dropdown");

searchIcon.addEventListener("click", () => {
  if (window.innerWidth > 768) {
    searchDropdown.style.display =
      searchDropdown.style.display === "block" ? "none" : "block";
  }
});

// Hide search dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!searchDropdown.contains(e.target) && e.target !== searchIcon) {
    searchDropdown.style.display = "none";
  }
});

// Sidebar toggle for mobile view
const menuIcon = document.querySelector(".menu-icon span");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

menuIcon.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
