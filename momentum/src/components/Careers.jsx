import React from "react";
import { roles } from "../constants";
import Button from "./Button";
import { Palette, Cpu, Rocket } from "lucide-react";

/**
 * Small Card and CardContent wrappers that accept className and other props.
 * They merge passed className with sensible defaults so callers can customize.
 */
const Card = ({ children, className = "", ...rest }) => {
  const base = "rounded-lg p-6 shadow-lg border border-neutral-800";
  const combined = `${base} ${className}`.trim();
  return (
    <div className={combined} {...rest}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className = "" }) => {
  const base = "mt-4";
  return <div className={`${base} ${className}`.trim()}>{children}</div>;
};

/**
 * Map icon name -> render function so we can render with props if needed.
 * Keep styling consistent here.
 */
const iconComponents = {
  Palette: (props) => <Palette className="h-8 w-8 text-teal-400" {...props} />,
  Cpu: (props) => <Cpu className="h-8 w-8 text-green-400" {...props} />,
  Rocket: (props) => <Rocket className="h-8 w-8 text-purple-400" {...props} />,
};

const Careers = () => {
  return (
    <section id="careers" className="w-full bg-primary py-16 text-white">
      {/* Hero Section */}
      <div className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Design. Build. Innovate.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Join <span className="font-semibold text-teal-400">MomentumSoft</span> and be part of a
          team creating digital experiences that matter. Let's turn ideas into impact.
        </p>
      </div>

      {/* Open Roles Section */}
      <div className="bg-primary py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Current Openings</h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => {
              const Icon = iconComponents[role.icon];
              return (
                <Card
                  key={index}
                  className="bg-neutral-900 hover:shadow-xl transition-shadow flex flex-col h-full"
                >
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="mb-4">
                      {Icon ? <Icon /> : null}
                    </div>

                    <h3 className="text-xl font-semibold mb-2 text-teal-400">{role.title}</h3>

                    <p className="text-sm text-gray-400 mb-2">{role.exp}</p>
                    <p className="text-gray-200 mb-4">{role.desc}</p>

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
                        type="button"
                        variant="default"
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                        onClick={() =>
                          (window.location.href = "mailto:teammomentum@momentumsoft.in")
                        }
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
