import { TopNav } from '../components/TopNav';

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <section className="max-w-[1440px] mx-auto px-12 py-16">
        <h1 className="text-5xl font-bold text-[#37474F] mb-6">About Me</h1>
        <div className="max-w-3xl">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            I'm a Software & AI Developer passionate about building intelligent systems that solve real-world problems. 
            With expertise spanning machine learning, IoT integration, and full-stack development, I bridge the gap 
            between cutting-edge technology and practical applications.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            My journey in tech has led me to work on diverse projects—from computer vision systems that enhance security 
            to IoT platforms that optimize energy consumption. I believe in writing clean, maintainable code and creating 
            user experiences that delight.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            When I'm not coding, you'll find me exploring the latest research in AI, contributing to open-source projects, 
            or mentoring aspiring developers.
          </p>
        </div>
      </section>
    </div>
  );
}
