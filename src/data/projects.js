export const projects = [
{
    id: "3d-game-engine",
    fileName: "3d-game-engine.project.md",
    title: "Alchemication",
    tagline: "C++ Game Engine with ECS (Entity Component System) Architecture",
    stack: ["C++", "Visual Studio", "NVIDIA PhysX"],
    description: `Architected a custom 3D game engine utilizing an Entity Component System (ECS) architecture. 
Integrated NVIDIA PhysX for complex rigid body dynamics, collision detection, and constraint solving, 
alongside GPU-accelerated particle simulations using NVIDIA Flex. Built real-time physics debug visualization tools.`,
    links: [
        { label: "GitHub", url: "https://github.com/jazwinn/Kos-Engine-2.0" },
    ],
    video: {
        type: "drive", 
        driveFileId: "1eCP_DxglzMFaqQlqQTZqURqVy2Wmduft", 
    },
},
{
    id: "2d-game-engine",
    fileName: "2d-game-engine.project.md",
    title: "Slip Away",
    tagline: "Object-oriented 2D engine with a custom-built physics library",
    stack: ["C++", "Visual Studio", "OpenGL"],
    description: `Designed and engineered a proprietary 2D game engine from scratch to power the platformer "Slip Away." 
Bypassed external physics engines to architect a custom physics library, implementing advanced collision detection algorithms 
and rigid body dynamics based on industry-standard real-time collision research.`,
    links: [
      
    ],
    video: {
      type: "youtube",
      youtubeId: "B4lyOpSkRWo",
    },
},
{
    id: "mobile-computing-project",
    fileName: "ml-grocery-assistant.project.md",
    title: "ML-Powered Grocery Recipe Assistant",
    tagline: "Android app using on-device Computer Vision and local LLMs with RESTful APIs for recipe generation",
    stack: ["Android Studio", "Kotlin", "Google ML Kit", "Spoonacular API"],
    description: `An Android application that combines on-device computer vision and local LLM inferencing. 
Utilizes Google ML Kit for real-time ingredient detection from camera feeds. Features an offline pipeline 
using Llama 3.2 via Ollama and the Spoonacular API to synthesize detected inventory into custom culinary instructions.`,
    links: [
      { label: "GitHub", url: "https://github.com/yhnothere/MobileComputingProject" },
    ],
    video: {
      type: "drive",
      driveFileId: "1-JSnIzrhZr7SK__mSc2ijankkq9zkfHJ", 
    },
},
{
    id: "cloud-computing-project",
    fileName: "coffee-sommelier-storepage.project.md",
    title: "Serverless Coffee Sommelier",
    tagline: "Vercel-hosted web application featuring an AI recommendation bot",
    stack: ["Vercel Serverless", "Next.js", "Amazon EC2", "DynamoDB", "Amazon Cognito", "Llama 3.2 (Ollama)"],
    description: `A scalable, serverless web application deployed on Vercel designed for a coffee bean storefront. 
Integrates a locally hosted LLM functioning as an AI sommelier to recommend beans via advanced prompting. 
Backed by a data pipeline using DynamoDB and secured with Amazon Cognito for robust user authentication.`,
    links: [
      { label: "GitHub", url: "https://github.com/yhnothere/CloudComputingProject" },
    ],
    video: {
      type: "drive",
      driveFileId: "12pIghe5GkXmcLDik0XcDnznSIwQjg45Z", 
    },
},
{
    id: "procedural-generation",
    fileName: "procedural-generation.project.md",
    title: "3D Procedural Environment Generation",
    tagline: "Algorithmic generation using cellular automata and BSP",
    stack: ["C++", "Algorithms", "Data Structures", "AI"],
    description: `An advanced algorithmic project focusing on procedural generation of complex 3D environments. 
Engineered a pipeline utilizing 3D cellular automata, Perlin worms, and Binary Space Partitioning (BSP) to dynamically 
generate and optimize spatial data structures. Demonstrates strong fundamentals in applied mathematics and algorithm design.`,
    links: [
      { label: "GitHub", url: "https://github.com/jazwinn/Procedural-Cave-Generation" },
    ],
},
];  