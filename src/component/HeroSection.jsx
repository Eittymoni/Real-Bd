
import { Search, ChevronDown } from "lucide-react"
import star1 from "../assets/Star 2.png"
import star2 from "../assets/Star 1.svg"
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"
import user4 from "../assets/user4.png"
import user5 from "../assets/user5.png"
import house from "../assets/house.png"


    const HeroSection = () => {
        const userImages = [
            user1, user2, user3, user4, user5
        ]
      
        return (
          <main className="container mx-auto mt-[80px] px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 items-center gap-4 ">
              <div className="bg-[#DDF1E6] p-6 sm:p-8 md:p-12 lg:p-18 flex flex-col justify-center h-auto md:h-[600px] rounded-xl">
                <div className=" flex items-center gap-2">
                <h1 className="text-[#183835] text-4xl sm:text-5xl md:text-6xl font-bold">Elevate Your</h1>
               <div className="">
               <img src={star1} alt="" className="md:pl-10" />
               <img src={star2} alt="" />
               </div>
                </div>
             
                
                <h1 className="text-[#183835] text-4xl sm:text-5xl md:text-6xl font-bold">Living Experience</h1>
                <p className="text-[rgba(24,56,53,0.67)] mb-6 md:mb-8 text-sm sm:text-base md:text-lg pt-4 md:pt-6">
                Explore exceptional properties that redefine luxury. From elegant penthouses to serene countryside estates, we curate the finest selections to match your distinct lifestyle. Explore exceptional properties that redefine luxury. From elegant penthouses to serene countryside estates, we curate the finest selections to match your distinct lifestyle. 
                </p>
                <div className="mb-6 md:mb-8">
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {[user1, user2, user3, user4, user5].map((src, i) => (
                      <img
                        key={i}
                        src={src || "/placeholder.svg"}
                        alt={`User ${i + 1}`}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="ml-3 md:ml-4 text-base md:text-lg text-[#183835] font-medium">
                    Trusted by 14M+ Customer
                  </span>
                </div>
              </div>
                <div className="relative flex items-center w-full">
                  <div className="relative flex-grow w-full">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search city, region or address..."
                      className="pl-10 pr-20 py-3 w-full rounded-full bg-white border-none focus:ring-0 text-sm"
                    />
                  </div>
                  <button className="absolute right-1 bg-[#183835] text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                    Browse House&apos;s
                  </button>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-xl">
                <img
                  src={house}
                  alt="House"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-green-50 rounded-full p-3 md:p-4 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center">
                  <span className="text-[10px] md:text-xs text-green-800 uppercase tracking-wider mb-1">Scroll</span>
                  <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-green-800" />
                </div>
              </div>
            </div>
          </main>
        )
      }
      
      export default HeroSection
      