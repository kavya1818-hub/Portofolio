const express = require("express");
const router = express.Router();
const projects = [
  {
    title: "IntelliRoute",
    description:
"Developed a smart traffic management system using React, Node.js and MongoDB to optimize route planning, monitor traffic conditions and improve transportation efficiency.",
    image: "/intelliroute.png",
    github: "https://github.com/kavya1818-hub/IntelliRoute-Smart-Traffic-System",
    techStack: ["React", "Node.js", "MongoDB"]
  },

  {
    title: "NovaCart E-Commerce",
    description:"Built a full-stack e-commerce platform with product management, shopping cart functionality, secure user experience and responsive design.",
    image: "/ecommerce.jpg",
    github: "https://github.com/kavya1818-hub/NovaCart-Ecommerce",
    techStack: ["React", "Express", "MongoDB"]
  },

  {
    title: "Healthcare Chatbot",
    description:"Created an AI-powered healthcare chatbot that assists users with symptom guidance, healthcare information and intelligent responses.",
    image:"/pharmachain.jpg",
    github: "https://github.com/kavya1818-hub/HEALTHCARE_-Modified",
    techStack: ["Python", "Flask", "MongoDB"]
  },

  {
    title: "Cloud E-Shop Lite",
   description:
"Implemented a cloud-based shopping application focusing on scalable architecture, product management and modern web technologies.",
    image: "/ecommerce.jpg",
    github: "https://github.com/kavya1818-hub/Cloud-_EshopLite",
    techStack: ["Cloud", "Node.js", "MongoDB"]
  }
];
router.get("/", (req, res) => {
  res.json(projects);
});

module.exports = router;
