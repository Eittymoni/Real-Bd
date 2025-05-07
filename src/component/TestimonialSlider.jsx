import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "Koen",
      category: "Catering",
      text: '"Voor meerdere bedrijven gewerkt te hebben moet ik zeggen dat Fourparties er met kop en schouder boven uit steekt. Naast de professionele aanpak is het ook zo dat de communicatie is het niet zo dat de werknemer er zit en geparachuteerd wordt. Zoeken naar een baan in de horeca, dan kan het zoeken denk ik stoppen!"',
      rating: 5,
    },
    {
      name: "Justus",
      category: "Facility Services",
      text: '"Fourparties is een erg fijne werkplek. Alles is goed geregeld en je krijgt goed betaald met ruimte om te groeien."',
      rating: 4,
    },
    {
      name: "Koen",
      category: "Catering",
      text: '"Voor meerdere bedrijven gewerkt te hebben moet ik zeggen dat Fourparties er met kop en schouder boven uit steekt. Naast de professionele aanpak is het ook zo dat de communicatie is het niet zo dat de werknemer er zit en geparachuteerd wordt. Zoeken naar een baan in de horeca, dan kan het zoeken denk ik stoppen!"',
      rating: 5,
    },
    {
      name: "Antonella",
      category: "Logistics",
      text: '"Superleuk uitzendbureau om te werken! Diverse huizen, leuke en verschillende collega\'s waardoor het nooit saai wordt. Je bent erg vrij om je werk zelf in te plannen maar tegelijkertijd je werkplekken hebt. Hard werken wordt beloond door middel van een salarissysteem."',
      rating: 4 ,
    },
    {
      name: "Michael",
      category: "Property Management",
      text: '"The team at this real estate agency has been exceptional. Their attention to detail and responsiveness made the entire process smooth and stress-free. I highly recommend their services to anyone looking for property management."',
      rating: 5,
    },
    {
      name: "Sarah",
      category: "Residential Sales",
      text: '"I was impressed by the professionalism and knowledge of the agents. They helped me find my dream home within my budget and handled all negotiations expertly. The entire experience exceeded my expectations."',
      rating: 4,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const maxIndex = testimonials.length - 3

  const nextSlide = () => {
    if (currentIndex < maxIndex && !isAnimating) {
      setIsAnimating(true)
      setCurrentIndex(currentIndex + 1)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true)
      setCurrentIndex(currentIndex - 1)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < maxIndex) {
        nextSlide()
      } else {
        setCurrentIndex(0)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, maxIndex])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">What People Say About Us</h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full border ${
              currentIndex === 0 ? "text-gray-300 border-gray-200" : "text-gray-600 border-gray-300 hover:bg-gray-50"
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`p-2 rounded-full bg-[#0e3b31] text-white ${
              currentIndex >= maxIndex ? "opacity-50" : "hover:bg-[#0a2c25]"
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full sm:min-w-[50%] md:min-w-[33.33%] px-2 group">
              <div className="bg-white rounded-lg p-6 h-full border border-gray-100 shadow-sm group-hover:bg-[#183835]">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-lg font-medium rounded-full bg-[#A8DADC] text-gray-800 group-hover:text-[#183835] group-hover:bg-[#DDF1E6]">
                    {testimonial.category}
                  </span>
                </div>
                <p className="text-[#023047] mb-4 text-base h-32 overflow-hidden group-hover:text-[#DDF1E6] ">{testimonial.text}</p>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-gray-900 group-hover:text-[#DDF1E6]">{testimonial.name}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
