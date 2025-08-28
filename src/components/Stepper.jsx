import React from "react";
import { steps } from "./steps/steps";

const Stepper = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      {steps.map((step, index) => (
        <div
          key={step.id}
          onClick={() => setCurrentStep(step.id)}
          className="flex-1 flex items-center cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold 
              ${currentStep === step.id ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700"}`}
            >
              {index + 1}
            </div>
            <span className="text-xs mt-1">{step.title}</span>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 h-1 bg-gray-300 mx-2">
              <div
                className={`h-1 ${currentStep > step.id ? "bg-blue-600 w-full" : "w-0"}`}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
