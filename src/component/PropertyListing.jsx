import img from "../assets/image 29.png"
import img2 from "../assets/Mask group.png"
import { ArrowRight, Home } from "lucide-react"

export default function PropertyListing() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="flex justify-between items-center mb-8">
        <div className="max-w-md">
          <h1 className="text-2xl md:text-3xl font-medium text-slate-800 leading-tight">
            Explore The Closest
            <br />
            Habitation to Your Location
          </h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-sm font-medium">
          <span className="h-6 w-6 rounded-full bg-teal-700 flex items-center justify-center text-white">
            <Home className="h-3 w-3" />
          </span>
          <span>Browse All House</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Property Card 1 */}
        <div className="relative rounded-xl overflow-hidden group">
          <img
            src={img}
          
            alt="Triangular building with orange roof"
            
            className="w-full  object-cover"
          />
          {/* Overlay that appears on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="w-full p-4 text-white bg-gradient-to-b from-black/60 to-transparent">
              <h3 className="font-bold text-lg">Rutherbook</h3>
              <div className="flex items-center text-sm text-gray-300 mb-2">
                <span>Russel De Street Denpasar, ID302</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">$1,050.00</span>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                  View Details <ArrowRight className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Property Card 2 */}
        <div className="relative rounded-xl overflow-hidden group">
        <img
            src={img2}
          
            alt="Triangular building with orange roof"
            
            className="w-full  object-cover"
          />
          {/* Overlay that appears on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="w-full p-4 text-white bg-gradient-to-b from-black/60 to-transparent">
              <h3 className="font-bold text-lg">Mediterranean Villa</h3>
              <div className="flex items-center text-sm text-gray-300 mb-2">
                <span>Coastal Avenue, Santorini, GR405</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">$1,250.00</span>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                  View Details <ArrowRight className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Property Card 3 */}
        <div className="relative rounded-xl overflow-hidden group">
        <img
            src={img}
          
            alt="Triangular building with orange roof"
            
            className="w-full  object-cover"
          />
          {/* Overlay that appears on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="w-full p-4 text-white bg-gradient-to-b from-black/60 to-transparent">
              <h3 className="font-bold text-lg">Urban Loft</h3>
              <div className="flex items-center text-sm text-gray-300 mb-2">
                <span>Downtown District, Portland, US101</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">$890.00</span>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                  View Details <ArrowRight className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Property Card 4 */}
        <div className="relative rounded-xl overflow-hidden group">
        <img
            src={img2}
          
            alt="Triangular building with orange roof"
            
            className="w-full  object-cover"
          />
          {/* Overlay that appears on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="w-full p-4 text-white bg-gradient-to-b from-black/60 to-transparent">
              <h3 className="font-bold text-lg">Modern Residence</h3>
              <div className="flex items-center text-sm text-gray-300 mb-2">
                <span>Hillside Drive, Los Angeles, US304</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">$1,750.00</span>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                  View Details <ArrowRight className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
