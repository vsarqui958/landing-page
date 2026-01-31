"use client"

import type React from "react"

import Image from "next/image"
import { useState, useEffect } from "react"
import {
  Building2,
  Users,
  Wrench,
  FileCheck,
  Lightbulb,
  Scale,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Interior design images for decorative carousel
const interiorImages = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop",
]

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
      "https://images.unsplash.com/photo-1517248135467-0a1dd7228f2d?w=800&h=600&fit=crop",
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

export default function ArchitectPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [interiorCarouselIndex, setInteriorCarouselIndex] = useState(0)
  const [showScrollButton, setShowScrollButton] = useState(false)

  const services = [
    {
      icon: Building2,
      title: "Servicios de Diseño Arquitectónico",
      items: [
        "Diseño de proyectos residenciales: Casas, departamentos, ampliaciones",
        "Diseño de proyectos comerciales: Oficinas, locales, restaurantes",
        "Diseño de proyectos públicos: Espacios urbanos, plazas, infraestructura municipal",
        "Renderizados 3D y maquetas digitales: Visualización del proyecto antes de su construcción",
      ],
    },
    {
      icon: Users,
      title: "Servicios de Planificación y Gestión",
      items: [
        "Asesoría en compra de terrenos: Evaluación de factibilidad urbana y legal",
        "Elaboración de anteproyectos y proyectos de arquitectura",
        "Tramitación de permisos municipales (DIA, EIA, permisos de edificación)",
        "Coordinación con otros profesionales: Ingenieros, constructores, especialistas",
      ],
    },
    {
      icon: Wrench,
      title: "Servicios Técnicos y Constructivos",
      items: [
        "Dirección de obra: Supervisión de la ejecución del proyecto",
        "Especificaciones técnicas y cálculos estructurales básicos",
        "Certificados de recepción municipal (término de obra)",
        "Regularización de propiedades (legalización de viviendas o ampliaciones no declaradas)",
      ],
    },
    {
      icon: FileCheck,
      title: "Servicios de Consultoría y Evaluación",
      items: [
        "Peritajes y tasaciones: Valuación de propiedades con fines legales o comerciales",
        "Inspección técnica de edificaciones (ITE)",
        "Asesoría en eficiencia energética y sustentabilidad",
        "Diagnóstico de propiedades usadas (antes de compra o remodelación)",
      ],
    },
    {
      icon: Lightbulb,
      title: "Servicios Especializados",
      items: [
        "Diseño interior: Distribución de espacios, mobiliario y acabados",
        "Paisajismo: Diseño de áreas verdes y exteriores",
        "Restauración de patrimonio: Intervención en edificios históricos",
        "Certificación CES (Construcción Sustentable)",
      ],
    },
    {
      icon: Scale,
      title: "Servicios Legales y Administrativos",
      items: [
        "Contratos de construcción y asesoría legal básica",
        "Gestión de subsidios habitacionales (ej.: DS19, Programa de Protección al Patrimonio Familiar)",
      ],
    },
  ]

  // Auto-advance interior carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setInteriorCarouselIndex((prev) => (prev + 1) % interiorImages.length)
    }, 6000) // Change image every 6 seconds

    return () => clearInterval(interval)
  }, [])

  // Handle scroll button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const openModal = (projectId: number) => {
    const project = portfolioProjects.find((p) => p.id === projectId)
    if (project) {
      setSelectedProject(project)
      setCurrentSlideIndex(0)
    }
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentSlideIndex(0)
  }

  const nextSlide = () => {
    if (selectedProject) {
      setCurrentSlideIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }
  }

  const previousSlide = () => {
    if (selectedProject) {
      setCurrentSlideIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index)
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      previousSlide()
    } else if (e.key === "ArrowRight") {
      nextSlide()
    } else if (e.key === "Escape") {
      closeModal()
    }
  }

  // Agregar estilos CSS personalizados
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      .duration-2000 {
        transition-duration: 2000ms;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#212529]">Valentina Sánchez</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#212529] hover:text-[#f4623a] transition-colors"
              >
                Acerca de mí
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-[#212529] hover:text-[#f4623a] transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-[#212529] hover:text-[#f4623a] transition-colors"
              >
                Portafolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#212529] hover:text-[#f4623a] transition-colors"
              >
                Contacto
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-[#212529] hover:text-[#f4623a] transition-colors text-left"
                >
                  Acerca de mí
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-[#212529] hover:text-[#f4623a] transition-colors text-left"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-[#212529] hover:text-[#f4623a] transition-colors text-left"
                >
                  Portafolio
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-[#212529] hover:text-[#f4623a] transition-colors text-left"
                >
                  Contacto
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="pt-24 pb-16 relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {interiorImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === interiorCarouselIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Background ${index + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Color Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: "#5c4b42cc",
            opacity: 0.8,
          }}
        ></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Acerca de mí</h2>

            {/* Profile Photo */}
            <div className="mb-8">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[#f4623a] shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=crop&crop=face"
                  alt="Valentina Sánchez - Arquitecta"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-white leading-relaxed mb-6">
                Soy Valentina Sánchez, arquitecta titulada con más de 8 años de experiencia en el diseño y desarrollo de
                proyectos arquitectónicos. Mi pasión por crear espacios funcionales y estéticamente atractivos me ha
                llevado a especializarme en proyectos residenciales, comerciales y públicos, siempre con un enfoque en
                la sustentabilidad y la innovación.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Creo firmemente que la arquitectura debe mejorar la calidad de vida de las personas, integrando
                armoniosamente el diseño con el entorno natural y las necesidades específicas de cada cliente. Mi
                compromiso es acompañarte en cada etapa de tu proyecto, desde la conceptualización inicial hasta la
                entrega final, garantizando resultados que superen tus expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#f4623a]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#212529] text-center mb-12">Servicios</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-[#f4623a] rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-gray-600 leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#212529] text-center mb-12">Portafolio</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.map((project) => (
                <div
                  key={project.id}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => openModal(project.id)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <p className="text-sm">
                        {project.year} • {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#212529] text-center mb-12">Contacto</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Hablemos de tu proyecto</h3>
                  <p className="text-gray-600 mb-8">
                    Estoy aquí para ayudarte a materializar tus ideas arquitectónicas. Contáctame para una consulta
                    inicial gratuita y conversemos sobre cómo puedo contribuir a hacer realidad tu proyecto.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#f4623a] rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">valentina.sanchez@arquitecta.cl</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#f4623a] rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Teléfono</p>
                      <p className="text-gray-600">+56 9 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#f4623a] rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Ubicación</p>
                      <p className="text-gray-600">Av. Providencia 1234, Oficina 501</p>
                      <p className="text-gray-600">Providencia, Santiago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f4623a] focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f4623a] focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f4623a] focus:border-transparent"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de proyecto
                    </label>
                    <select
                      id="project"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f4623a] focus:border-transparent"
                    >
                      <option value="">Selecciona un tipo de proyecto</option>
                      <option value="residential">Proyecto Residencial</option>
                      <option value="commercial">Proyecto Comercial</option>
                      <option value="renovation">Remodelación</option>
                      <option value="consultation">Consultoría</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f4623a] focus:border-transparent"
                      placeholder="Cuéntame sobre tu proyecto..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-[#f4623a] hover:bg-[#e55a35]">Enviar mensaje</Button>
                </form>
              </div>
            </div>

            {/* Interactive Map Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-[#212529] text-center mb-8">Ubicación de la Oficina</h3>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-96 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.7234567890123!2d-70.6199999!3d-33.4372222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a5a5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2sAv.%20Providencia%201234%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl&style=feature:all|element:labels|visibility:off&style=feature:administrative|element:geometry|color:0x444444&style=feature:landscape|element:geometry|color:0xf2f2f2&style=feature:poi|element:geometry|color:0xdddddd&style=feature:road|element:geometry|color:0xffffff&style=feature:road.highway|element:geometry|color:0xcccccc&style=feature:water|element:geometry|color:0xc6c6c6"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(100%) contrast(1.2)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Oficina Valentina Sánchez"
                    className="w-full h-full"
                  ></iframe>

                  {/* Custom Marker Overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative">
                      <div className="w-8 h-8 bg-[#f4623a] rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-pulse">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg border text-xs font-medium text-[#212529] whitespace-nowrap">
                        Oficina Valentina Sánchez
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Info Bar */}
                <div className="bg-white p-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#f4623a] rounded-lg flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-[#212529]">Av. Providencia 1234, Oficina 501</p>
                        <p className="text-sm text-gray-600">Providencia, Santiago - Chile</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Horario de Atención</p>
                      <p className="font-medium text-[#212529]">Lun - Vie: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#212529] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Valentina Sánchez</p>
            <p className="text-gray-400 mb-4">Arquitecta Independiente</p>
            <p className="text-sm text-gray-500">© 2024 Valentina Sánchez. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-[#f4623a] hover:bg-[#e55a35] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center"
          aria-label="Volver arriba"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Portfolio Modal with Carousel */}
      <Dialog open={!!selectedProject} onOpenChange={() => closeModal()}>
        <DialogContent
          className="w-[80vw] h-[75vh] max-w-4xl max-h-[75vh] p-0 overflow-hidden flex flex-col"
          onKeyDown={handleKeyDown}
        >
          {selectedProject && (
            <>
              {/* Header - Altura fija */}
              <DialogHeader className="flex-shrink-0 p-2 md:p-3 pb-1 md:pb-2 border-b">
                <DialogTitle className="text-sm md:text-lg pr-6">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-xs md:text-sm">
                  {selectedProject.year} • {selectedProject.location}
                </DialogDescription>
              </DialogHeader>

              {/* Carousel Container - Altura flexible */}
              <div className="flex-1 relative bg-gray-100 min-h-0">
                {/* Main Image Container */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={selectedProject.images[currentSlideIndex] || "/placeholder.svg"}
                    alt={`${selectedProject.title} - Imagen ${currentSlideIndex + 1}`}
                    fill
                    className="object-contain transition-opacity duration-300"
                    sizes="95vw"
                    priority
                  />

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={previousSlide}
                        className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-1 md:p-1.5 rounded-full transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                      </button>

                      <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-1 md:p-1.5 rounded-full transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Siguiente imagen"
                      >
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute top-2 md:top-3 right-2 md:right-3 bg-black/70 text-white px-2 py-0.5 md:px-2.5 md:py-1 rounded-full text-xs font-medium z-10">
                    {currentSlideIndex + 1} / {selectedProject.images.length}
                  </div>

                  {/* Slide Indicators */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 md:space-x-2 z-10">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                            index === currentSlideIndex ? "bg-[#f4623a] scale-125" : "bg-white/50 hover:bg-white/80"
                          }`}
                          aria-label={`Ir a imagen ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Description - Altura flexible con scroll interno si es necesario */}
              <div className="flex-shrink-0 p-2 md:p-3 pt-1 md:pt-2 border-t bg-white max-h-20 md:max-h-24 overflow-y-auto">
                <p className="text-xs md:text-sm text-gray-700 leading-tight">{selectedProject.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
