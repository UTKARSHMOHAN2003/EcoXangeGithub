import React from "react";
import { CardBody, CardContainer, CardItem } from "./ThreeD"; // Adjust the import path if needed

export function ThreeDCardDemo({ className }) {
  return (
    <CardContainer className={`inter-var ${className}`}>
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-4 border">
        <CardItem translateZ="50" className="text-lg font-bold text-neutral-600 dark:text-white">
          Register your Credits
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <a
            href="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-48 w-full bg-cover bg-center rounded-xl group-hover/card:shadow-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            {/* Add any content inside the link if needed */}
          </a>
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem translateZ={20} as="a" href="#" target="_blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
          
        </div>
      </CardBody>
    </CardContainer>
  );
}
