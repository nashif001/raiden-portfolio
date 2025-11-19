import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowDown, Github, Mail, Code2, Sparkles, Rocket, Palette, Database, Zap, Globe, Smartphone, ExternalLink, MapPin } from 'lucide-react';
import profileImage from 'figma:asset/33e2819fb87142fb621991d100d165d573bba0d6.png';
import setupImage from 'figma:asset/7735f0a58aa7e758aafe3a454f6c85cc6672cedf.png';

// Discord Icon Component
function DiscordIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setClickedItem(id);
    setTimeout(() => setClickedItem(null), 600);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLiveDemoClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory management and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYzNDA2NDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/nashif001',
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking application with personalized workout plans and progress analytics.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYzNDk4ODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
      github: 'https://github.com/nashif001',
    },
    {
      title: 'Creative Studio Website',
      description: 'Portfolio website for a creative studio featuring stunning animations and interactive elements.',
      image: 'https://images.unsplash.com/photo-1632937145991-91620be68319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjMzOTQ0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'Motion', 'Tailwind', 'Sanity'],
      github: 'https://github.com/nashif001',
    },
  ];

  const skills = [
    { icon: Code2, name: 'Frontend Development', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'], color: 'from-violet-600 to-violet-400' },
    { icon: Database, name: 'Backend Development', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'], color: 'from-fuchsia-600 to-fuchsia-400' },
    { icon: Palette, name: 'UI/UX Design', items: ['Figma', 'Adobe XD', 'Design Systems', 'Prototyping'], color: 'from-cyan-600 to-cyan-400' },
    { icon: Zap, name: 'Performance', items: ['Optimization', 'SEO', 'Accessibility', 'Testing'], color: 'from-blue-600 to-blue-400' },
    { icon: Globe, name: 'Web Technologies', items: ['REST APIs', 'GraphQL', 'WebSockets', 'PWA'], color: 'from-purple-600 to-purple-400' },
    { icon: Smartphone, name: 'Mobile Development', items: ['React Native', 'Responsive Design', 'Mobile-First', 'Cross-Platform'], color: 'from-pink-600 to-pink-400' },
  ];

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              ND
            </motion.div>

            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-colors ${
                    activeSection === item.id ? 'text-violet-400' : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400"
                    />
                  )}
                  <AnimatePresence>
                    {clickedItem === item.id && (
                      <>
                        <motion.div
                          initial={{ scale: 0, opacity: 1 }}
                          animate={{ scale: 2.5, opacity: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 -z-10"
                        />
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: [0, 1, 0] }}
                          transition={{ duration: 0.4 }}
                          className="absolute -inset-2 rounded-lg bg-violet-400/20 blur-md -z-10"
                        />
                      </>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>

            <button
              className="md:hidden text-zinc-400 hover:text-zinc-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left transition-colors ${
                    activeSection === item.id ? 'text-violet-400' : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2, delayChildren: 0.3 }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 rounded-full blur-xl opacity-75"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 bg-gradient-to-r from-cyan-600 via-violet-600 to-fuchsia-600 rounded-full opacity-50"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-zinc-900 shadow-2xl"
                style={{ boxShadow: '0 0 60px rgba(139, 92, 246, 0.4), 0 0 100px rgba(217, 70, 239, 0.2)' }}
              >
                <img src={profileImage} alt="Nashif Dewan" className="w-full h-full object-cover grayscale-[30%] contrast-110 brightness-105" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-violet-600/30 via-transparent to-fuchsia-600/30"
                />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border-2 border-violet-400/50"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400">
              Clean code. Sharp design. Raiden energy.
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-6xl md:text-8xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400"
          >
            Raiden's Space
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto"
          >
            Crafting beautiful digital experiences with modern technologies and creative solutions
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="flex gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full hover:from-violet-500 hover:to-fuchsia-500 transition-all"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-violet-500/50 rounded-full hover:bg-violet-500/10 transition-all"
              onClick={() => scrollToSection('projects')}
            >
              View Work
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex gap-6 justify-center"
          >
            <motion.a
              href="https://github.com/nashif001"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="text-zinc-400 hover:text-violet-400 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://discord.com/users/446888501875572737"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="text-zinc-400 hover:text-violet-400 transition-colors"
            >
              <DiscordIcon size={24} />
            </motion.a>
            <motion.a
              href="mailto:nashifdewan001@gmail.com"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="text-zinc-400 hover:text-violet-400 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ArrowDown className="text-violet-400" size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              About Me
            </h2>
            <p className="text-zinc-400 text-xl">Tech-driven problem solver and passionate creator</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 rounded-2xl blur-2xl opacity-30"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative overflow-hidden rounded-2xl border border-zinc-800 group-hover:border-violet-500/50 transition-colors">
                  <img src={setupImage} alt="Gaming Setup" className="relative w-full h-[400px] object-cover" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-violet-900/50 via-transparent to-fuchsia-900/30"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-zinc-300 text-lg leading-relaxed">
                I'm Nashif Dewan, aka Raiden — a tech-driven problem solver, AI and Computer Science educator, and passionate developer. I build with Python, explore IoT with ESP32, and transform complex ideas into clean, practical solutions. From coding and game development to video editing, I create technology that's both functional and beautiful. Currently expanding my expertise in software development, algorithmic trading, and real-world AI applications.
              </p>

              <div className="grid gap-6 mt-8">
                {[
                  { icon: Code2, title: 'Clean Code', description: 'Writing maintainable and scalable code following best practices' },
                  { icon: Sparkles, title: 'Creative Design', description: 'Bringing ideas to life with aesthetic and functional designs' },
                  { icon: Rocket, title: 'Fast Performance', description: 'Optimizing for speed and efficiency in every project' },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex gap-4 items-start p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-colors"
                  >
                    <div className="p-2 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-lg">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h3 className="mb-1">{feature.title}</h3>
                      <p className="text-zinc-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 px-6 bg-zinc-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Skills & Expertise
            </h2>
            <p className="text-zinc-400 text-xl">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-violet-500/50 transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4`}
                >
                  <skill.icon size={28} />
                </motion.div>
                <h3 className="mb-4 group-hover:text-violet-400 transition-colors">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                      className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 group-hover:border-violet-500/50 transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-zinc-400 text-lg">
              Always learning and exploring new technologies to stay at the cutting edge
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Featured Projects
            </h2>
            <p className="text-zinc-400 text-xl">Some of my recent work</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-violet-500/50 transition-all ${
                  index === projects.length - 1 && projects.length % 2 !== 0 ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto' : ''
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="h-full"
                  >
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                <div className="p-6">
                  <h3 className="mb-3 group-hover:text-violet-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg hover:border-violet-500/50 transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                    <motion.button
                      onClick={handleLiveDemoClick}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg hover:from-violet-500 hover:to-fuchsia-500 transition-all"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/nashif001"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 border border-violet-500/50 rounded-full hover:bg-violet-500/10 transition-all"
            >
              View All Projects
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-6 bg-zinc-900/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Get In Touch
            </h2>
            <p className="text-zinc-400 text-xl">Let's create something amazing together</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl mb-4">Let's talk about your project</h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                { icon: Mail, title: 'Email', value: 'nashifdewan001@gmail.com', link: 'mailto:nashifdewan001@gmail.com' },
                { icon: MapPin, title: 'Location', value: 'Assam, IN', link: null },
              ].map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-violet-500/50 transition-colors"
                >
                  <div className="p-3 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-lg">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-zinc-400">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-zinc-100 hover:text-violet-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-zinc-100">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-6 justify-center"
            >
              {[
                { icon: Github, title: 'GitHub', link: 'https://github.com/nashif001' },
                { icon: DiscordIcon, title: 'Discord', link: 'https://discord.com/users/446888501875572737' },
              ].map((social) => (
                <motion.a
                  key={social.title}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-violet-500/50 text-zinc-400 hover:text-violet-400 transition-colors"
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl blur-2xl opacity-20" />
              <div className="relative p-8 rounded-2xl border border-zinc-800 bg-zinc-950 text-center">
                <p className="text-zinc-300 leading-relaxed text-lg">
                  "Working with talented people who are passionate about what they do is always a pleasure. Let's collaborate and create something extraordinary."
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-16 pt-8 border-t border-zinc-800"
          >
            <p className="text-zinc-400">© 2025 Nashif Dewan — All Rights Reserved.</p>
          </motion.div>
        </div>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6"
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateX: -90 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0, transition: { type: "spring", duration: 0.6, bounce: 0.4 } }}
            exit={{ scale: 0.5, opacity: 0, rotateX: 90 }}
            className="relative max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 rounded-3xl blur-lg opacity-75"
            />
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0, transition: { delay: 0.2, type: "spring", bounce: 0.6 } }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center relative overflow-hidden"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-tr from-cyan-400/30 to-violet-400/30 rounded-2xl"
                />
                <ExternalLink className="relative z-10" size={40} />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}>
                <h3 className="mb-3 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                  Coming Soon! ⚡
                </h3>
                <p className="text-zinc-400 mb-6">
                  This demo will be available soon. Stay tuned for the lightning-fast experience!
                </p>
                <motion.div className="flex justify-center gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      className="w-2 h-2 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full"
                    />
                  ))}
                </motion.div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                className="text-zinc-600 text-sm mt-6"
              >
                Click anywhere to close
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
