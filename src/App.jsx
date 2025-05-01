import React, { useState } from "react";

export default function HomePage() {
  const [expandedTile, setExpandedTile] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Identity",
      description: "Exploring how transition from legacy identity systems for the benefit of business and consumer.",
      expandedContent: (
        <div className="mt-4 space-y-4">
          <p className="text-gray-700">
            Self-sovereign identity (SSI) represents a paradigm shift in how we manage digital identities.
            This project explores the technical and social implications of implementing SSI at scale.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium">Key Benefits</h4>
              <ul className="list-disc list-inside mt-2">
                <li>User Control</li>
                <li>Privacy Preservation</li>
                <li>Cross-Platform Portability</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium">Implementation</h4>
              <ul className="list-disc list-inside mt-2">
                <li>DID Standards</li>
                <li>Verifiable Credentials</li>
                <li>Zero-Knowledge Proofs</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-t pt-4">
            <h4 className="font-medium mb-3">References</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.w3.org/TR/did-core/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  W3C DID Core Specification
                </a>
              </li>
              <li>
                <a href="https://www.w3.org/TR/vc-data-model/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  W3C Verifiable Credentials
                </a>
              </li>
              <li>
                <a href="https://www.w3.org/TR/vc-data-model-2.0/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  Zero-Knowledge Proofs in Identity
                </a>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Payments",
      description: "Blockchains enable better checkout experiences for consumers and greater liquitidy environments for business.",
      expandedContent: (
        <div className="mt-4 space-y-4">
          <p className="text-gray-700">
            Blockchain technology is revolutionizing payment systems by enabling faster, more secure,
            and more transparent transactions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium">Advantages</h4>
              <ul className="list-disc list-inside mt-2">
                <li>Instant Settlement</li>
                <li>Lower Fees</li>
                <li>Global Access</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium">Use Cases</h4>
              <ul className="list-disc list-inside mt-2">
                <li>Cross-Border Payments</li>
                <li>Micropayments</li>
                <li>Smart Contract Integration</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-t pt-4">
            <h4 className="font-medium mb-3">References</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://ethereum.org/en/developers/docs/smart-contracts/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  Ethereum Smart Contracts
                </a>
              </li>
              <li>
                <a href="https://www.visa.com/visa-everywhere/blog/bdp/2020/10/13/blockchain-technology-1602616666666.html" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  Visa on Blockchain Payments
                </a>
              </li>
              <li>
                <a href="https://www.mastercard.com/news/perspectives/2021/blockchain-and-crypto/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  Mastercard's Blockchain Strategy
                </a>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "AI",
      description: "Exploring how AI shrinks the gap between idea to monetization for businesses and consumers.",
      expandedContent: (
        <div className="mt-4 space-y-4">
          <p className="text-gray-700">
            AI agents are transforming how businesses operate and innovate, enabling faster
            development cycles and more efficient operations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium">Applications</h4>
              <ul className="list-disc list-inside mt-2">
                <li>Automated Development</li>
                <li>Content Generation</li>
                <li>Process Optimization</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium">Impact</h4>
              <ul className="list-disc list-inside mt-2">
                <li>Faster Time-to-Market</li>
                <li>Cost Reduction</li>
                <li>Enhanced Creativity</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-t pt-4">
            <h4 className="font-medium mb-3">References</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://openai.com/blog/chatgpt" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  OpenAI's ChatGPT
                </a>
              </li>
              <li>
                <a href="https://www.anthropic.com/research" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  Anthropic's Claude Research
                </a>
              </li>
              <li>
                <a href="https://www.deepmind.com/research" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  DeepMind's Latest Research
                </a>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Social Media",
      description: "Exploring how decentralized social media networks (DeSo) create new design principles for network effects.",
      expandedContent: (
        <div className="mt-4 space-y-4">
          <p className="text-gray-700">
            Decentralized social media networks are redefining how we think about social connections,
            content ownership, and network effects in the digital age.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium">Key Features</h4>
              <ul className="list-disc list-inside mt-2">
                <li>Content Ownership</li>
                <li>Tokenized Engagement</li>
                <li>Decentralized Governance</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium">Benefits</h4>
              <ul className="list-disc list-inside mt-2">
                <li>User Data Control</li>
                <li>Fair Monetization</li>
                <li>Community Governance</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-t pt-4">
            <h4 className="font-medium mb-3">References</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.lens.xyz/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  Lens Protocol
                </a>
              </li>
              <li>
                <a href="https://farcaster.xyz/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  Farcaster
                </a>
              </li>
              <li>
                <a href="https://www.nostr.com/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  Nostr Protocol
                </a>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Education",
      description: "Transforming education systems to prepare learners for the future of work through technology adoption and skill development.",
      expandedContent: (
        <div className="mt-4 space-y-4">
          <p className="text-gray-700">
            The rapid evolution of technology and work requires a fundamental shift in how we approach education.
            This project explores how to bridge the gap between traditional education and the skills needed
            for tomorrow's workforce, with a focus on practical implementation and measurable outcomes.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium">Key Focus Areas</h4>
              <ul className="list-disc list-inside mt-2">
                <li>AI Integration in Learning</li>
                <li>Blockchain Credentials</li>
                <li>Remote Collaboration Tools</li>
                <li>Digital Literacy</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium">Implementation Strategy</h4>
              <ul className="list-disc list-inside mt-2">
                <li>Curriculum Modernization</li>
                <li>Teacher Training Programs</li>
                <li>Industry Partnerships</li>
                <li>Continuous Assessment</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-t pt-4">
            <h4 className="font-medium mb-3">References</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.weforum.org/reports/future-of-jobs-report-2023" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  World Economic Forum Future of Jobs Report
                </a>
              </li>
              <li>
                <a href="https://www.mckinsey.com/industries/education/our-insights/education-to-employment" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  McKinsey Education to Employment
                </a>
              </li>
              <li>
                <a href="https://www.udacity.com/school-of-ai" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  Udacity AI School
                </a>
              </li>
              <li>
                <a href="https://www.coursera.org/degrees" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  Coursera Degree Programs
                </a>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Other Topics",
      description: "Exploring the intersection of technology, society, and innovation through various lenses and perspectives.",
      expandedContent: (
        <div className="mt-4 space-y-4">
          <p className="text-gray-700">
            A collection of thoughts, analyses, and explorations on emerging technologies, their societal impact,
            and the future of human-machine collaboration. These writings aim to bridge the gap between
            technical innovation and human understanding.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium">Core Themes</h4>
              <ul className="list-disc list-inside mt-2">
                <li>Technology Ethics</li>
                <li>Future of Work</li>
                <li>Digital Transformation</li>
                <li>Innovation Strategy</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium">Writing Formats</h4>
              <ul className="list-disc list-inside mt-2">
                <li>Long-form Analysis</li>
                <li>Technical Deep Dives</li>
                <li>Industry Commentary</li>
                <li>Future Scenarios</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-t pt-4">
            <h4 className="font-medium mb-3">Featured Publications</h4>
            <ul className="space-y-2">
              <li>
                <a href="/writing/tech-ethics" className="text-blue-600 hover:text-blue-800">
                  The Ethics of AI Development
                </a>
              </li>
              <li>
                <a href="/writing/digital-transformation" className="text-blue-600 hover:text-blue-800">
                  Digital Transformation in Traditional Industries
                </a>
              </li>
              <li>
                <a href="/writing/future-work" className="text-blue-600 hover:text-blue-800">
                  The Future of Work: A Human-Centric Approach
                </a>
              </li>
              <li>
                <a href="/writing/innovation-strategy" className="text-blue-600 hover:text-blue-800">
                  Building Innovation Ecosystems
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-6 border-t pt-4">
            <h4 className="font-medium mb-3">Newsletter & Updates</h4>
            <p className="text-gray-700 mb-4">
              Stay updated with the latest insights and analysis on technology trends and their impact on society.
            </p>
            <a href="/subscribe" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold">Les Greys</h1>
        <p className="mt-4 text-xl max-w-xl">
          Writing and working on the adoption of technology.
        </p>
        <a href="#aboutme" className="mt-8 text-blue-600 underline">
          Learn more ↓
        </a>
      </section>

      {/* Bio Section */}
      <section id="aboutme" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 mb-4">
              I'm a technology enthusiast and writer focused on exploring the intersection of emerging technologies and their practical applications. My work spans across identity systems, payments, artificial intelligence, and decentralized social networks.
            </p>
            <p className="text-gray-700 mb-4">
              With a deep interest in how technology shapes our future, I write about and work on projects that bridge the gap between innovation and adoption. I believe in creating solutions that are not just technologically advanced but also accessible and beneficial to society.
            </p>
            <p className="text-gray-700">
              When I'm not writing or coding, you can find me exploring new technologies, contributing to open-source projects, and engaging with the broader tech community.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-white p-6 rounded-xl shadow hover:shadow-lg transition ${
                  expandedTile === project.id ? "md:col-span-3" : ""
                }`}
              >
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{project.description}</p>
                <button
                  onClick={() => setExpandedTile(expandedTile === project.id ? null : project.id)}
                  className="mt-4 text-blue-500 hover:text-blue-700 transition"
                >
                  {expandedTile === project.id ? "Show less ←" : "Read more →"}
                </button>
                {expandedTile === project.id && project.expandedContent}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-400 mb-4">
                Interested in collaborating or just want to say hello? Feel free to reach out.
              </p>
              <div className="space-y-2">
                <a href="mailto:contact@lesgreys.eth" className="flex items-center text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  contact@lesgreys.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://x.com/lesgreys" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://github.com/lesgreys" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/lesgreys" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Les Greys. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
