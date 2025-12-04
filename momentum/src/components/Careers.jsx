import React from "react";
import { roles } from "../constants"; 
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Cpu, Rocket } from "lucide-react"; 


const iconComponents = {
  Palette: <Palette className="h-8 w-8 text-secondary" />, 
  Cpu: <Cpu className="h-8 w-8 text-green-400" />,      
  Rocket: <Rocket className="h-8 w-8 text-purple-400" />,    
};

const Careers = () => {
  return (
    
    <section id="careers" className="w-full bg-primary py-16 text-white"> 

      {/* Hero Section */}
      <div className="text-center py-20 px-6">
        {/* Adjusted headline and paragraph colors for dark background */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white"> 
          Design. Build. Innovate.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-dimWhite"> 
          Join <span className="font-semibold text-secondary">MomentumSoft</span> and be part of a team
          creating digital experiences that matter. Let's turn ideas into impact.
        </p>
      </div>

      {/* Open Roles Section */}
      {/* Background changed from gray-100 to a slightly lighter dark shade or primary for blending */}
      <div className="bg-primary py-16"> 
        <div className="max-w-6xl mx-auto px-6">
          {/* Adjusted heading color for dark background */}
          <h2 className="text-3xl font-bold text-center text-white mb-12"> 
            Current Openings
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              // Card background changed to a dark gray for contrast but still blending
              // Text colors adjusted for readability on dark background
              <Card key={index} className="rounded-2xl shadow-lg border border-gray-700 bg-black-gradient hover:shadow-xl transition-shadow"> 
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Icon color is set in iconComponents object */}
                  <div className="mb-4">{iconComponents[role.icon]}</div> 
                  
                  <h3 className="text-xl font-semibold mb-2 text-secondary"> 
                    {role.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{role.exp}</p> 
                  <p className="text-dimWhite mb-4">{role.desc}</p> 
                  <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-300 text-sm"> 
                    {role.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  {role.marketing && (
                    <p className="italic text-sm text-gray-500 mb-4">{role.marketing}</p> 
                  )}
                  <div className="mt-auto">
                    <Button
                      variant="default"
                      // Button background and text colors adjusted
                      className="w-full bg-secondary hover:bg-teal-700 text-primary" 
                      onClick={() =>
                        (window.location.href = "mailto:teammomentum@momentumsoft.in")
                      }
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;