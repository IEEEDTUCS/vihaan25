"use client"

import { useEffect, useState } from "react"

export default function TechTimeline() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const timelineEvents = [
    { id: 1, title: "Registration Begins", date: "MARCH 9", position: "top" },
    { id: 2, title: "Registration Ends", date: "MARCH 9", position: "bottom" },
    { id: 3, title: "Event Brochure", date: "MARCH 9", position: "top" },
    { id: 4, title: "Vihaan Begins", date: "MARCH 9", position: "bottom" },
    { id: 5, title: "Vihaan Ends", date: "MARCH 9", position: "top" },
  ]

  if (!mounted) return null

  return (
    <div
      className="w-full px-12 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="relative flex justify-center items-center min-h-[300px] mx-12">
        {/* Timeline container */}
        <div className="relative w-full flex justify-between items-center">
          {/* Custom dashed line with irregular gaps */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-[2px] z-0 flex justify-between">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="h-full bg-[#a89a84]"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  marginRight: `${Math.random() * 15 + 10}px`,
                }}
              ></div>
            ))}
          </div>

          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="flex flex-col items-center relative">
              {/* Event box and date - positioned based on top/bottom */}
              <div
                className={`absolute ${event.position === "top" ? "bottom-16" : "top-16"} flex flex-col items-center`}
              >
                {event.position === "top" && (
                  <div className="text-[#a89a84] font-khinterference text-2xl tracking-wider mb-2">{event.date}</div>
                )}
                <div className="relative bg-[#D9D9D938]/78 px-6 py-3 text-center min-w-[200px] whitespace-nowrap">
                  {/* Top border with irregular dashes */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] flex">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="h-full bg-[#a89a84]"
                        style={{
                          width: `${Math.random() * 8 + 4}px`,
                          marginRight: `${Math.random() * 8 + 4}px`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Bottom border with irregular dashes */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] flex">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="h-full bg-[#a89a84]"
                        style={{
                          width: `${Math.random() * 8 + 4}px`,
                          marginRight: `${Math.random() * 8 + 4}px`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Left border with irregular dashes */}
                  <div className="absolute left-0 top-0 bottom-0 w-[1px] flex flex-col">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-full bg-[#a89a84]"
                        style={{
                          height: `${Math.random() * 8 + 4}px`,
                          marginBottom: `${Math.random() * 8 + 4}px`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Right border with irregular dashes */}
                  <div className="absolute right-0 top-0 bottom-0 w-[1px] flex flex-col">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-full bg-[#a89a84]"
                        style={{
                          height: `${Math.random() * 8 + 4}px`,
                          marginBottom: `${Math.random() * 8 + 4}px`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Corner notches */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#a89a84]"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#a89a84]"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#a89a84]"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#a89a84]"></div>

                  <p className="text-[#a89a84] font-orbitron font-bold">{event.title}</p>
                </div>
                {event.position === "bottom" && (
                  <div className="text-[#a89a84] font-khinterference text-2xl tracking-wider mt-2">{event.date}</div>
                )}
              </div>

              {/* Diamond node - centered on the timeline */}
              <div className="relative z-20 group backdrop-blur-2xl">
                <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="13.0941" y="12.6604" width="34.8108" height="34.8108" stroke="#A59188"/>
                <rect x="30.6254" y="15.2547" width="21.0356" height="21.0356" transform="rotate(45 30.6254 15.2547)" stroke="#A59188"/>
                <rect x="30.6254" y="4.3846" width="36.4086" height="36.4086" transform="rotate(45 30.6254 4.3846)" stroke="#A59188"/>
                <circle cx="30.4994" cy="30.0656" r="2.23739" stroke="#A59188" strokeWidth="0.3"/>
                <line x1="30.5995" y1="0.223389" x2="30.5995" y2="8.57924" stroke="#A59188" strokeWidth="0.2"/>
                <line x1="30.5995" y1="51.5522" x2="30.5995" y2="59.9081" stroke="#A59188" strokeWidth="0.2"/>
                <line x1="60.3418" y1="30.1657" x2="51.9859" y2="30.1657" stroke="#A59188" strokeWidth="0.2"/>
                <line x1="9.01294" y1="30.1657" x2="0.657084" y2="30.1657" stroke="#A59188" strokeWidth="0.2"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

