
import img from "../assets/room.png"
import { Play, ArrowRight } from "lucide-react"



export default function PropertyShowcase() {


  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left side - Property Image with Video Button */}
        <div className="w-full md:w-1/2 relative rounded-3xl overflow-hidden flex items-center justify-center h-[500px]">
          <div className="relative aspect-square">
            <img
              src={img}
              alt="Modern living room with yellow sofa"
             
              className="object-cover rounded-3xl"
            />
            <div className="absolute inset-0  rounded-3xl flex items-center justify-center">
              <button
                className="w-16 h-16 bg-[#DDF1E6] backdrop-blur-sm rounded-full flex items-center justify-center transition-transform hover:scale-110"
                aria-label="Play video"
              >
                <Play className="h-6 w-6 text-gray-800 ml-1" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Text Content */}
        <div className="w-full md:w-1/2 text-center ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 leading-tight">
            Take Control of Your Property
            <br />
            Easy & Hassel Free
          </h2>
          <p className="text-gray-600 mb-6 max-w-md text-center mx-auto">
            Need a best favorite place with family right now? Here's the best selection for you! Amazing properties with
            the most property.
          </p>
          <button
            className="inline-flex items-center gap-2 bg-[#0e3b31] text-white px-4 py-2 rounded-full transition-all"
          
          >
              <span
              className={`w-6 h-6 rounded-full bg-white flex items-center justify-center transition-all duration-300 `}
            >
              <ArrowRight className={`h-3 w-3 text-green-950 -rotate-45 `} />
            </span>
            <span className="relative z-10">Learn More</span>
          
          </button>
        </div>
      </div>
    </div>
  )
}
