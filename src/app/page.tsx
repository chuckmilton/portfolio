export default function Home() {
  const experience = [
    { period: '2026 —', role: 'Software Development Engineer', company: 'Amazon', url: 'https://amazon.com', description: 'Incoming SDE in Seattle.' },
    { period: '2025 — 2026', role: 'Software Developer', company: 'Associated Students Inc.', url: 'https://www.asicsulb.org/corporate/', description: 'Built an in-house magazine platform replacing a $2,300/year service, now serving 40,000+ students.' },
    { period: '2025', role: 'Software Development Engineer Intern', company: 'Amazon', url: 'https://amazon.com', description: 'Built an AWS service to fix inventory misclassification, reducing cost data inaccuracies by 80% globally.' },
    { period: '2024', role: 'Software Engineer Intern', company: 'DreamWay Media', url: 'https://dreamwaymedia.com/', description: 'Refactored e-commerce apps boosting performance by 30% and containerized development for a 5-person team.' },
  ];

  const projects = [
    { name: 'SharkPark', description: 'Real-time parking intelligence app for CSULB with occupancy forecasting and geofence-driven detection', url: null, code: null, wip: true },
    { name: 'TurnTalks', description: 'AI-powered discussion platform with real-time speech features', url: null, code: 'https://github.com/chuckmilton/turntalks' },
    { name: 'ACM Website', description: 'Official website for ACM at CSULB', url: 'https://acm-csulb.org', code: 'https://github.com/csulbacm/acm-website-2024' },
    { name: 'Rate My CSULB Professors', description: 'Chrome extension with 300+ active users', url: 'https://chromewebstore.google.com/detail/hfacilllhlfjdaakkmhmbdkidcibhoco', code: 'https://github.com/chuckmilton/Rate-My-CSULB-Professors' },
    { name: 'CSULB Schedule Generator', description: 'Course scheduling tool with real-time class data', url: null, code: 'https://github.com/chuckmilton/CSULB-Schedule-Generator' },
    { name: 'LingoCub', description: 'Chrome extension for real-time YouTube video dubbing', url: 'https://www.youtube.com/watch?v=nJVbFMd9pfQ', code: 'https://github.com/chuckmilton/lingocub' },
  ];

  const skills = 'Python, Java, TypeScript, JavaScript, C++, C#, PHP, SQL, React, React\u00A0Native, Next.js, NestJS, Node.js, Express, Flask, FastAPI, PostgreSQL, MongoDB, Supabase, MySQL, AWS, Docker, GCP, Firebase';

  return (
    <main id="main-content" className="min-h-screen px-6 py-16 md:px-12 lg:px-24 max-w-3xl mx-auto">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          {/* Yin Yang SVG */}
          <svg className="w-10 h-10 animate-spin-slow" viewBox="0 0 100 100" aria-hidden="true" role="img">
            <title>Decorative yin yang symbol</title>
            <circle cx="50" cy="50" r="48" fill="none" stroke="#a3a3a3" strokeWidth="2"/>
            <path d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2" fill="#a3a3a3"/>
            <circle cx="50" cy="26" r="8" fill="#a3a3a3"/>
            <circle cx="50" cy="74" r="8" fill="#0a0a0a"/>
          </svg>
          <h1 className="text-3xl font-medium">Charles Milton</h1>
        </div>
        <p className="text-neutral-400 leading-relaxed text-lg">
          Software engineer focused on web applications and scalable systems. Starting at Amazon in August.
        </p>
      </header>

      {/* Links */}
      <nav aria-label="Contact and social links" className="flex flex-wrap gap-6 mb-16 text-neutral-400">
        <a href="mailto:charlesmiltoncs@gmail.com" aria-label="Send email to Charles Milton">email</a>
        <a href="https://github.com/chuckmilton" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)">github</a>
        <a href="https://www.linkedin.com/in/charles-milton-cs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)">linkedin</a>
        <a href="/images/Charles_Milton_resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download resume (PDF, opens in new tab)">resume</a>
      </nav>

      {/* About */}
      <section className="mb-16">
        <h2 className="text-sm text-neutral-500 uppercase tracking-wide mb-6">About</h2>
        <div className="space-y-4 text-neutral-400 leading-relaxed">
          <p>
            Started coding as a kid. Java modding, Pygame games, soldering circuits. 
            Took a break, came back to CS in college.
          </p>
          <p>
            Outside of work: guitar, climbing, working out.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-sm text-neutral-500 uppercase tracking-wide mb-6">Education</h2>
        <div className="grid grid-cols-[100px_1fr] gap-4">
          <span className="text-neutral-500">2022 — 2026</span>
          <div>
            <div>
              <span className="text-neutral-200">B.S. Computer Science</span>
              <span className="text-neutral-500"> at </span>
              <a href="https://csulb.edu" target="_blank" rel="noopener noreferrer" className="text-neutral-200 underline underline-offset-2">
                CSU Long Beach
              </a>
            </div>
            <p className="text-neutral-500 mt-1">Led development at ACM and XR Engineering Club.</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-sm text-neutral-500 uppercase tracking-wide mb-6">Experience</h2>
        <div className="space-y-5">
          {experience.map((exp, i) => (
            <div key={i} className="grid grid-cols-[100px_1fr] gap-4">
              <span className="text-neutral-500">{exp.period}</span>
              <div>
                <div>
                  <span className="text-neutral-200">{exp.role}</span>
                  <span className="text-neutral-500"> at </span>
                  {exp.url ? (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-neutral-200 underline underline-offset-2">
                      {exp.company}
                    </a>
                  ) : (
                    <span className="text-neutral-200">{exp.company}</span>
                  )}
                </div>
                <p className="text-neutral-500 mt-1">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-sm text-neutral-500 uppercase tracking-wide mb-6">Projects</h2>
        <div className="space-y-5">
          {projects.map((project, i) => (
            <div key={i}>
              <div className="flex items-baseline gap-3 mb-1">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-neutral-200 underline underline-offset-2">
                    {project.name}
                  </a>
                ) : (
                  <span className="text-neutral-200">{project.name}</span>
                )}
                {project.wip && (
                  <span className="text-neutral-500 text-sm">wip</span>
                )}
                {project.code && (
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-neutral-500 text-sm">
                    [code]
                  </a>
                )}
              </div>
              <p className="text-neutral-500">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-sm text-neutral-500 uppercase tracking-wide mb-6">Skills</h2>
        <p className="text-neutral-400">{skills}</p>
      </section>

      {/* Footer */}
      <footer className="text-neutral-500 pt-8 border-t border-neutral-800">
        <p><small>© 2026 Charles Milton</small></p>
      </footer>
    </main>
  );
}
