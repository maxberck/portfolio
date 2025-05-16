function Experience({experiences}) {

  return (
    <div className="w-full max-w-4xl mx-auto py-4 px-4 sm:px-6">
    <div className="relative">
      {/* La ligne au centre */}
      <div 
        className="absolute left-3 sm:left-8.5 top-0 bottom-0 w-1 bg-gray-200" 
      />
      
      {experiences.map((experience, index) => (
        <div key={index} className="relative pb-8 sm:pb-25">
          <div className="absolute left-0 sm:left-4 mt-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFFFF] text-[#0A0A0A] text-md font-[900] z-10">
              {index + 1}
            </div>
          </div>
          
          <div className="ml-10 sm:ml-16 flex flex-col sm:flex-row items-start">
            
            <div className="mt-3 sm:mt-0 sm:ml-4 max-w-full">
              <h3 className="text-2xl font-medium text-[#FFFFFF] font-[900]">{experience.title}</h3>
              <p className="mt-1 text-md text-[#FFFFFF] pr-2">
                {experience.company}
                {experience.start_date && (
                  <span className="block mt-1 text-sm text-[#FFFFFF]">
                    {experience.start_date} {experience.end_date && `- ${experience.end_date}`}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Experience