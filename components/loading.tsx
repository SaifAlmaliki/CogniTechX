"use client"

export function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Background with grid pattern */}
      <div className="absolute inset-0 bg-[#064e3b] opacity-95" />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(4, 120, 87, 0.05) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(4, 120, 87, 0.05) 1.5px, transparent 1.5px)',
          backgroundSize: '35px 35px',
          backgroundPosition: '-1px -1px'
        }}
      />
      
      {/* Loading animation */}
      <div className="relative">
        <div className="flex flex-col items-center">
          {/* Logo animation */}
          <div className="relative w-16 h-16 mb-8">
            <div className="absolute inset-0 border-4 border-primary rounded-xl animate-[spin_3s_linear_infinite]" />
            <div className="absolute inset-2 border-4 border-primary/50 rounded-lg animate-[spin_2s_linear_infinite_reverse]" />
            <div className="absolute inset-4 border-4 border-primary/30 rounded-md animate-ping" />
          </div>
          
          {/* Company name */}
          <div className="text-2xl font-bold text-primary animate-pulse">
            CogniTechX
          </div>
          
          {/* Loading dots */}
          <div className="flex gap-1 mt-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary animate-[bounce_1s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}