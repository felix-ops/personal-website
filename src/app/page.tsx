"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const experiences = [
  { title: "Frontend Developer", company: "Tech Corp", period: "2021-2023", description: "Worked on modern web apps." },
  { title: "Backend Developer", company: "Data Inc", period: "2019-2021", description: "Built scalable APIs." },
  { title: "Intern", company: "StartupX", period: "2018-2019", description: "Learned full stack basics." },
];

const cards = [
  { title: "Dummy Post", description: "A test post.", link: "/cards/dummy-post" },
  { title: "React", description: "React Wikipedia.", link: "https://en.wikipedia.org/wiki/React_(web_framework)" },
  { title: "Next.js", description: "Next.js Wikipedia.", link: "https://en.wikipedia.org/wiki/Next.js" },
  { title: "JavaScript", description: "JavaScript Wikipedia.", link: "https://en.wikipedia.org/wiki/JavaScript" },
  { title: "TypeScript", description: "TypeScript Wikipedia.", link: "https://en.wikipedia.org/wiki/TypeScript" },
  { title: "Node.js", description: "Node.js Wikipedia.", link: "https://en.wikipedia.org/wiki/Node.js" },
];

export default function Home() {
  const [expIndex, setExpIndex] = useState(0);
  const router = useRouter();

  const handlePrev = () => setExpIndex((i) => (i === 0 ? experiences.length - 1 : i - 1));
  const handleNext = () => setExpIndex((i) => (i === experiences.length - 1 ? 0 : i + 1));

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero/About Section */}
      <section id="about" className="mb-20 flex flex-col items-center text-center">
        {/* Optionally add a photo: <img src="/profile.jpg" alt="Bhuvaneshwaran M" className="w-32 h-32 rounded-full mb-6 shadow" /> */}
        <h1 className="text-5xl font-bold mb-4">Bhuvaneshwaran M</h1>
        <p className="text-xl text-gray-600 max-w-xl mb-4">I build web experiences that are simple, beautiful, and effective. Welcome to my portfolio!</p>
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm mt-4">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I&#39;m a full stack developer passionate about crafting delightful digital products. I love solving problems, learning new things, and collaborating with creative people. My work blends design, code, and strategy to deliver results.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">Experience</h2>
        <div className="flex items-center justify-center gap-4">
          <button onClick={handlePrev} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Prev</button>
          <div className="w-80 bg-white rounded-xl shadow p-6 text-center">
            <h3 className="font-bold text-lg mb-1">{experiences[expIndex].title}</h3>
            <p className="text-gray-600 mb-1">{experiences[expIndex].company}</p>
            <p className="text-gray-500 text-sm mb-2">{experiences[expIndex].period}</p>
            <p className="text-gray-700">{experiences[expIndex].description}</p>
          </div>
          <button onClick={handleNext} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Next</button>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl shadow p-6 hover:shadow-md transition cursor-pointer"
              onClick={() => {
                if (card.link.startsWith("/")) router.push(card.link);
                else window.open(card.link, "_blank");
              }}
            >
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-2">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 rounded-xl p-8 shadow-sm text-center">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-700 mb-4">Let&#39;s connect! Feel free to reach out via email:</p>
        <a href="mailto:bhuvanesh@example.com" className="text-blue-600 underline font-medium">bhuvanesh@example.com</a>
      </section>
    </main>
  );
}