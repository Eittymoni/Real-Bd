import { Home } from 'lucide-react'

export default function RealEstateServices() {
  return (
    <div className="container mx-auto px-4 py-12 bg-[#FAFAFA]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#2B4846] mb-3">
          Tailored Solutions for Your
          <br />
          Real Estate Needs
        </h2>
        <p className="text-[#183835AB] max-w-3xl mx-auto text-lg">
          Our range of services includes expert property valuations, seamless buying and selling assistance, and
          personalized rental solutions. Experience hassle-free real estate transactions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Property Valuation Card */}
        <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
          <div className="  p-6 transition-all duration-300 hover:bg-[#183835]  bg-white group">
            <div className="w-12 h-12 bg-[#f8f9fa] rounded-md flex items-center justify-center mb-4 group-hover:bg-[#DDF1E6]">
              <Home className="h-6 w-6 text-[#0e3b31] " />
            </div>
            <h3 className="text-lg font-medium mb-2 text-[#183835] group-hover:text-[#DDF1E6]">Property Valuation</h3>
            <p className="text-base  text-[#18383566] group-hover:text-[#DDF1E6A6]">
              Property management is the daily oversight of residential, commercial, or industrial real estate by a
              third-party contractor.
            </p>
          </div>
        </div>

        {/* Property Management Card */}
        <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
          <div className="p-6 transition-all duration-300 hover:bg-[#183835]  bg-white group">
            <div className="w-12 h-12 bg-[#f8f9fa] rounded-md flex items-center justify-center mb-4 group-hover:bg-[#DDF1E6]">
              <Home className="h-6 w-6 text-[#0e3b31]" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-[#183835] group-hover:text-[#DDF1E6]">Property Management</h3>
            <p className="text-base  text-[#18383566] group-hover:text-[#DDF1E6A6]">
              Property management is the daily oversight of residential, commercial, or industrial real estate by a
              third-party contractor.
            </p>
          </div>
        </div>

        {/* Financial Reporting Card */}
        <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
          <div className="p-6 transition-all duration-300 hover:bg-[#183835]  bg-white group">
            <div className="w-12 h-12 bg-[#f8f9fa] rounded-md flex items-center justify-center mb-4 group-hover:bg-[#DDF1E6]">
              <Home className="h-6 w-6 text-[#0e3b31]" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-[#183835] group-hover:text-[#DDF1E6]">Financial Reporting</h3>
            <p className="text-base  text-[#18383566] group-hover:text-[#DDF1E6A6]">
              Property management is the daily oversight of residential, commercial, or industrial real estate by a
              third-party contractor.
            </p>
          </div>
        </div>

        {/* 24hr Consultation Card */}
        <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
          <div className="p-6 transition-all duration-300 hover:bg-[#183835]  bg-white group">
            <div className="w-12 h-12 bg-[#f8f9fa] rounded-md flex items-center justify-center mb-4 group-hover:bg-[#DDF1E6]">
              <Home className="h-6 w-6 text-[#0e3b31]" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-[#183835] group-hover:text-[#DDF1E6]">24hr Consultation</h3>
            <p className="text-base  text-[#18383566] group-hover:text-[#DDF1E6A6]">
              Property management is the daily oversight of residential, commercial, or industrial real estate by a
              third-party contractor.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
 