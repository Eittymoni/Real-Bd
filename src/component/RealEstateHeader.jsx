
import { ArrowRight } from "lucide-react"

export default function RealEstateHeader() {
  return (
    <div className=" container mx-auto px-4 py-8">
      <div className="md:flex justify-between items-center mb-12">
        <h1 className="text-2xl md:text-3xl font-medium text-[#2B4846] max-w-md">
          We are The Best & Most Trusted Real Estate Agent
        </h1>

        <button className="bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 rounded-full flex items-center gap-2 px-4 py-3">
       
       <div className="h-7 w-7 rounded-full bg-[#2B4846] flex items-center justify-center ">
       <ArrowRight className="h-4 w-4 text-white -rotate-45 " />
       </div>
       

          <span className="text-sm">Browse House Now</span>           
         
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#E2E2E2] rounded-full py-6 px-6 text-center">
          <h2 className="text-2xl text-[#183835] font-bold mb-1">2.3 K+</h2>
          <p className="text-[#183835] text-base">Local Premium property</p>
        </div>

        <div className="bg-[#183835] rounded-full py-6 px-6 text-center text-white">
          <h2 className="text-2xl text-white font-bold mb-1">75+</h2>
          <p className="text-base text-white">Awards winning</p>
        </div>

        <div className="bg-[#DDF1E6] rounded-full py-6 px-6 text-center">
          <h2 className="text-2xl text-[#183835] font-bold mb-1">2.3 K+</h2>
          <p className="text-[#183835] text-base">Local Premium property</p>
        </div>
      </div>
    </div>
    
  )
}
