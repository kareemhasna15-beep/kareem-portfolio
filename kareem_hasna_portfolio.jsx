export default function Portfolio() {
  const projects = [
    {
      name: "Hashi Basha",
      link: "https://hashibasha.com/",
      description:
        "Modern business website focused on branding, smooth user experience, and responsive design.",
    },
    {
      name: "Eleonora Clothing",
      link: "https://eleonoraclothing.com/",
      description:
        "Fashion e-commerce website with elegant layouts, modern UI, and optimized product presentation.",
    },
    {
      name: "Al Rajhi Legacy Fund",
      link: "https://alrajhilegacyfund.com/",
      description:
        "Professional financial platform with clean design, responsive sections, and structured content.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4f46e5,transparent_35%),radial-gradient(circle_at_bottom_left,#06b6d4,transparent_35%),radial-gradient(circle_at_center,#111827,transparent_70%)]" />

      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <nav className="flex items-center justify-between backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl px-6 py-4 shadow-2xl sticky top-5 z-50">
          <h1 className="text-2xl font-bold tracking-widest bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">
            Kareem Hasna
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition">
              Experience
            </a>
          </div>
        </nav>

        <section className="min-h-[85vh] flex items-center justify-center text-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-cyan-400 mb-4 text-sm">
              Future Developer & Creative Builder
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
              Hi, I’m <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text">Kareem Hasna</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              20 years old • Computer Science Student • Web Developer • Marketing Specialist • Systems & Camera Installation Experience
            </p>

            <div className="mt-10 flex justify-center gap-5 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(34,211,238,0.5)]"
              >
                View My Work
              </a>

              <a
                href="#about"
                className="px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-lg bg-white/5 hover:bg-white/10 transition duration-300"
              >
                More About Me
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[35px] p-10 shadow-2xl">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
                About Me
              </p>

              <h2 className="text-5xl font-bold mb-6">
                Passionate About Technology & Innovation
              </h2>

              <p className="text-gray-300 leading-8 text-lg mb-6">
                I am currently a Computer Science student at Rafic Hariri University with strong experience in web development, marketing, systems installation, and business technology solutions.
              </p>

              <p className="text-gray-300 leading-8 text-lg mb-6">
                I worked for 2 years with Al Dhua in camera installations, home intercom systems, and surveillance solutions. I also worked with data configuration and databases for UCT, a distributor for Al Dhua systems.
              </p>

              <p className="text-gray-300 leading-8 text-lg mb-6">
                In addition, I worked in data entry at Al Bekai and spent over 1 year working in marketing and advertisements for startups and growing businesses.
              </p>

              <p className="text-gray-300 leading-8 text-lg">
                I also worked with Gtonics as part of their team building websites and applications, helping create modern digital experiences and business solutions. My experience includes front-end development, UI design, SEO optimization, and some back-end development for modern web applications. I also earned certifications from HubSpot related to digital marketing and online growth strategies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300 shadow-xl">
                <h3 className="text-5xl font-black text-cyan-400">2+</h3>
                <p className="text-gray-300 mt-3">Years Experience in Systems & Installations</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300 shadow-xl">
                <h3 className="text-5xl font-black text-indigo-400">10+</h3>
                <p className="text-gray-300 mt-3">Digital & Technical Projects</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300 shadow-xl">
                <h3 className="text-5xl font-black text-cyan-400">1+</h3>
                <p className="text-gray-300 mt-3">Year in Marketing & Ads</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300 shadow-xl">
                <h3 className="text-5xl font-black text-indigo-400">CS</h3>
                <p className="text-gray-300 mt-3">Computer Science Student</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
              Featured Projects
            </p>
            <h2 className="text-5xl font-bold">Projects I Worked On</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-[35px] overflow-hidden backdrop-blur-2xl hover:-translate-y-3 transition duration-500 shadow-2xl"
              >
                <div className="h-52 bg-gradient-to-br from-cyan-500/30 to-indigo-600/30 flex items-center justify-center text-3xl font-black tracking-wider">
                  {project.name}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                    {project.name}
                  </h3>

                  <p className="text-gray-300 leading-7 mb-6">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="py-24">
          <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[40px] p-12 shadow-2xl">
            <div className="text-center mb-14">
              <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
                Experience & Skills
              </p>
              <h2 className="text-5xl font-bold">What I Bring</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Web Development",
                "Application Development",
                "Database Configuration",
                "Data Entry",
                "Marketing & Ads",
                "Camera Installations",
                "Home Intercom Systems",
                "Business Technology Solutions",
                "SEO Optimization",
                "Front-End Development",
                "UI/UX Design",
                "Basic Back-End Development",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-black/30 border border-white/10 rounded-2xl p-6 text-center hover:bg-cyan-500/10 hover:border-cyan-400/30 transition duration-300"
                >
                  <p className="font-semibold text-lg">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-16 text-center text-gray-400 border-t border-white/10 mt-10">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">
            Kareem Hasna
          </h2>

          <p className="text-lg mb-6">
            Computer Science Student • Developer • Marketing Specialist • Systems Expert
          </p>

          <p className="text-sm text-gray-500">
            © 2026 Kareem Hasna. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
