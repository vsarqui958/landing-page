// Portfolio projects data with multiple images
const portfolioProjects = [
  {
    id: 1,
    title: "Casa Residencial Moderna",
    year: "2023",
    location: "Las Condes, Santiago",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop",
    ],
    description:
      "Proyecto residencial de 180m² con diseño contemporáneo, amplios ventanales y integración con el jardín. Incluye 3 dormitorios, 2 baños, cocina abierta y living comedor con doble altura. El diseño prioriza la luz natural y la conexión interior-exterior.",
  },
  {
    id: 2,
    title: "Oficinas Corporativas",
    year: "2023",
    location: "Providencia, Santiago",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42db5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    ],
    description:
      "Diseño de oficinas corporativas de 500m² con espacios colaborativos, salas de reuniones y áreas de descanso. Enfoque en iluminación natural y eficiencia energética con materiales sustentables.",
  },
  {
    id: 3,
    title: "Restaurante Gourmet",
    year: "2022",
    location: "Vitacura, Santiago",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop",
    ],
    description:
      "Intervención completa de restaurante de 200m² con cocina abierta, bar central y terraza exterior. Diseño que combina materiales naturales con elementos industriales para crear una atmósfera única.",
  },
  {
    id: 4,
    title: "Remodelación Departamento",
    year: "2022",
    location: "Ñuñoa, Santiago",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    ],
    description:
      "Remodelación integral de departamento de 90m² optimizando espacios y mejorando la distribución. Integración de cocina con living y ampliación del dormitorio principal con soluciones inteligentes de almacenamiento.",
  },
  {
    id: 5,
    title: "Plaza Pública",
    year: "2021",
    location: "Maipú, Santiago",
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    ],
    description:
      "Diseño de plaza pública de 1200m² con áreas de juegos infantiles, espacios de descanso y zonas verdes. Proyecto enfocado en la sustentabilidad y accesibilidad universal con mobiliario urbano innovador.",
  },
  {
    id: 6,
    title: "Restauración Patrimonial",
    year: "2021",
    location: "Centro Histórico, Santiago",
    images: [
      "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
    ],
    description:
      "Restauración de edificio patrimonial del siglo XIX, conservando elementos originales y adaptándolo para uso contemporáneo como centro cultural. Trabajo meticuloso de conservación y modernización.",
  },
]

// Global variables
let currentProject = null
let currentSlideIndex = 0
let isCarouselOpen = false
let backgroundCarouselIndex = 0
let backgroundCarouselInterval = null

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  console.log("Valentina Sánchez - Arquitecta website loaded")

  // Initialize background carousel
  initBackgroundCarousel()

  // Initialize scroll button
  initScrollButton()

  // Initialize fade-in animations
  initFadeInAnimations()

  // Initialize keyboard navigation
  initKeyboardNavigation()
})

// Background carousel functionality
function initBackgroundCarousel() {
  const slides = document.querySelectorAll(".background-slide")

  if (slides.length === 0) return

  backgroundCarouselInterval = setInterval(() => {
    // Remove active class from current slide
    slides[backgroundCarouselIndex].classList.remove("active")

    // Move to next slide
    backgroundCarouselIndex = (backgroundCarouselIndex + 1) % slides.length

    // Add active class to new slide
    slides[backgroundCarouselIndex].classList.add("active")
  }, 6000) // Change every 6 seconds
}

// Scroll button functionality
function initScrollButton() {
  const scrollButton = document.getElementById("scrollToTop")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollButton.style.display = "flex"
    } else {
      scrollButton.style.display = "none"
    }

    // Update header background on scroll
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
    }
  })
}

// Fade-in animations
function initFadeInAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  }, observerOptions)

  // Observe all sections for fade-in animation
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    observer.observe(section)
  })
}

// Keyboard navigation
function initKeyboardNavigation() {
  document.addEventListener("keydown", (event) => {
    if (!isCarouselOpen) return

    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault()
        previousSlide()
        break
      case "ArrowRight":
        event.preventDefault()
        nextSlide()
        break
      case "Escape":
        event.preventDefault()
        closeModal()
        break
    }
  })
}

// Navigation functions
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = document.querySelector(".header").offsetHeight
    const elementPosition = element.offsetTop - headerHeight

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })
  }

  // Close mobile menu if open
  const mobileNav = document.getElementById("mobileNav")
  mobileNav.classList.remove("active")
}

function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobileNav")
  mobileNav.classList.toggle("active")
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Portfolio modal functions
function openModal(projectId) {
  const project = portfolioProjects.find((p) => p.id === projectId)
  if (!project) return

  currentProject = project
  currentSlideIndex = 0
  isCarouselOpen = true

  // Set project info
  document.getElementById("modalTitle").textContent = project.title
  document.getElementById("modalSubtitle").textContent = `${project.year} • ${project.location}`
  document.getElementById("modalDescription").textContent = project.description

  // Create carousel slides
  createCarouselSlides(project.images)

  // Create indicators
  createCarouselIndicators(project.images.length)

  // Update counters
  updateSlideCounter()

  // Show modal
  const modal = document.getElementById("portfolioModal")
  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

function createCarouselSlides(images) {
  const wrapper = document.getElementById("carouselWrapper")
  wrapper.innerHTML = ""

  images.forEach((imageUrl, index) => {
    const slide = document.createElement("div")
    slide.className = "carousel-slide"
    slide.innerHTML = `<img src="${imageUrl}" alt="Slide ${index + 1}" loading="lazy">`
    wrapper.appendChild(slide)
  })

  // Set initial position
  wrapper.style.transform = `translateX(0%)`
}

function createCarouselIndicators(count) {
  const indicatorsContainer = document.getElementById("carouselIndicators")
  indicatorsContainer.innerHTML = ""

  for (let i = 0; i < count; i++) {
    const indicator = document.createElement("div")
    indicator.className = `indicator ${i === 0 ? "active" : ""}`
    indicator.onclick = () => goToSlide(i)
    indicatorsContainer.appendChild(indicator)
  }
}

function updateSlideCounter() {
  if (!currentProject) return

  document.getElementById("currentSlide").textContent = currentSlideIndex + 1
  document.getElementById("totalSlides").textContent = currentProject.images.length
}

function goToSlide(index) {
  if (!currentProject || index < 0 || index >= currentProject.images.length) return

  currentSlideIndex = index
  const wrapper = document.getElementById("carouselWrapper")
  const translateX = -index * 100
  wrapper.style.transform = `translateX(${translateX}%)`

  // Update indicators
  const indicators = document.querySelectorAll(".indicator")
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index)
  })

  // Update counter
  updateSlideCounter()
}

function nextSlide() {
  if (!currentProject) return

  const nextIndex = (currentSlideIndex + 1) % currentProject.images.length
  goToSlide(nextIndex)
}

function previousSlide() {
  if (!currentProject) return

  const prevIndex = currentSlideIndex === 0 ? currentProject.images.length - 1 : currentSlideIndex - 1
  goToSlide(prevIndex)
}

function closeModal() {
  const modal = document.getElementById("portfolioModal")
  modal.style.display = "none"
  document.body.style.overflow = "auto"

  // Reset carousel state
  currentProject = null
  currentSlideIndex = 0
  isCarouselOpen = false
}

// Form submission
function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)

  // Here you would typically send the data to a server
  console.log("Form submitted:", data)

  // Show success message
  alert("¡Gracias por tu mensaje! Te contactaré pronto.")

  // Reset form
  event.target.reset()
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("portfolioModal")
  if (event.target === modal) {
    closeModal()
  }
}

// Cleanup on page unload
window.addEventListener("beforeunload", () => {
  if (backgroundCarouselInterval) {
    clearInterval(backgroundCarouselInterval)
  }
})
