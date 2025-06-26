import { Mail, Phone, MapPin, User, Briefcase, GraduationCap, Award, Code, Database, BarChart3, Users, Brain, MessageSquare, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const Index = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleEmailClick = () => {
    window.location.href = "mailto:pkhanal0114@gmail.com?subject=Let's Connect&body=Hi Pratham, I'd like to connect with you regarding...";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+9779861763539";
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b z-50 transition-all duration-300 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold gradient-text animate-fade-in dark:text-white">Pratham Khanal</h1>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="nav-link hover:text-primary transition-colors text-gray-700 dark:text-gray-200 font-medium">Home</a>
                <a href="#about" className="nav-link hover:text-primary transition-colors text-gray-700 dark:text-gray-200 font-medium">About</a>
                <a href="#experience" className="nav-link hover:text-primary transition-colors text-gray-700 dark:text-gray-200 font-medium">Experience</a>
                <a href="#skills" className="nav-link hover:text-primary transition-colors text-gray-700 dark:text-gray-200 font-medium">Skills</a>
                <a href="#contact" className="nav-link hover:text-primary transition-colors text-gray-700 dark:text-gray-200 font-medium">Contact</a>
              </div>
              {/* Dark/Light Mode Toggle */}
              <button
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className="ml-4 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 shadow-lg border border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setDarkMode((d) => !d)}
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-padding pt-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/75 dark:bg-gray-900/80 backdrop-blur-[1px]"></div>
        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <div className="animate-fade-in">
            <div className="animate-float mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-8 animate-pulse-glow shadow-2xl overflow-hidden">
                <img
                  src="/lovable-uploads/pk.jpg"
                  alt="Profile"
                  className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
            <h1 className="text-hero mb-6 gradient-text animate-slide-in-left drop-shadow-lg">
              Hi, I'm Pratham Khanal
            </h1>
            <p className="text-subtitle text-gray-700 mb-8 animate-slide-in-right drop-shadow-md font-semibold">
              Implementation & Support Executive | Front-end/Python Developer
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-scale-in drop-shadow-sm">
              A detail-oriented tech professional with proven experience in software Implementation and Database Management. 
              
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-700 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center gap-2 card-hover p-3 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-white/30 dark:border-gray-700">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Tanahun, Nepal</span>
              </div>
              <div className="flex items-center gap-2 card-hover p-3 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-white/30 dark:border-gray-700">
                <Phone className="w-5 h-5 text-green-600" />
                <span className="font-medium">+977 9861763539</span>
              </div>
              <div className="flex items-center gap-2 card-hover p-3 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-white/30 dark:border-gray-700">
                <Mail className="w-5 h-5 text-purple-600" />
                <span className="font-medium">pkhanal0114@gmail.com</span>
              </div>
            </div>
            <div className="flex justify-center gap-6 animate-scale-in" style={{animationDelay: '0.6s'}}>
              <Button 
                size="lg" 
                className="btn-animated hover:scale-105 transition-all duration-300 shadow-xl"
                onClick={handleEmailClick}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="btn-animated hover:scale-105 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl border-2 dark:border-gray-700">
                <a href="#experience" className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  View Experience
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding px-4 relative">
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-[1px]"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text scroll-reveal drop-shadow-lg">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="card-hover scroll-reveal bg-white/85 dark:bg-gray-800/85 backdrop-blur-lg border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Professional Journey</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  I am a motivated BCIS graduate with a strong foundation in IT
                  and computer science, passionate about leveraging
                  technology to solve real-world problems. I bring a blend of
                  technical expertise and analytical thinking, with a commitment
                  to continuous learning and innovation. My goal is to contribute
                  meaningfully to a forward-thinking organization, driving
                  efficiency and fostering growth through creative and effective
                  solutions.

                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  My passion lies in bridging the gap between technology and healthcare. I excel at working directly with clients, 
                  configuring and deploying health-tech systems, training users, and ensuring seamless go-lives. I'm also deeply 
                  involved in database management.
                </p>
              </CardContent>
            </Card>
            <div className="scroll-reveal" style={{animationDelay: '0.2s'}}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/85 dark:bg-gray-800/85 backdrop-blur-lg rounded-xl card-hover shadow-xl border border-white/40 dark:border-gray-700">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-600">1+</h4>
                  <p className="text-sm text-gray-600 font-medium">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-white/85 dark:bg-gray-800/85 backdrop-blur-lg rounded-xl card-hover shadow-xl border border-white/40 dark:border-gray-700">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-green-600">5+</h4>
                  <p className="text-sm text-gray-600 font-medium">Projects Completed</p>
                </div>
                <div className="text-center p-6 bg-white/85 dark:bg-gray-800/85 backdrop-blur-lg rounded-xl card-hover shadow-xl border border-white/40 dark:border-gray-700">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-purple-600">50+</h4>
                  <p className="text-sm text-gray-600 font-medium">Clients Trained</p>
                </div>
                <div className="text-center p-6 bg-white/85 dark:bg-gray-800/85 backdrop-blur-lg rounded-xl card-hover shadow-xl border border-white/40 dark:border-gray-700">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-orange-600">1</h4>
                  <p className="text-sm text-gray-600 font-medium">Industry Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding px-4 relative">
        <div className="absolute inset-0 bg-white/75 dark:bg-gray-900/80 backdrop-blur-[1px]"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text scroll-reveal drop-shadow-lg">Experience</h2>
          <div className="space-y-8">
            <Card className="card-hover scroll-reveal bg-white/85 dark:bg-gray-800/85 backdrop-blur-lg border-0 shadow-2xl">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-blue-700">Implementation and Support Executive</CardTitle>
                      <p className="text-blue-600 font-medium">Danphe HMIS | october 2024 – Present</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-600 text-white shadow-md">Current</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                  <li className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Led end-to-end implementation of HMIS solutions across multiple hospitals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Customized modules to fit client workflows and hospital processes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Executed secure database management, data migration, testing (UAT) and system monitoring.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Trained end-users for efficient adoption and handled go-live support.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Ensured optimized system performance and reduced client-reported issues.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding px-4 relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text scroll-reveal drop-shadow-lg">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover scroll-reveal bg-white/85 backdrop-blur-lg border-0 shadow-2xl">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">Technical & Professional Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">HMIS/EMR Implementation</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">Data Migration & System Configuration</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">Project Management & Client Training</Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">Database management</Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200">Data Visualization and Analytics</Badge>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">System Monitoring and Support</Badge>
                  
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover scroll-reveal bg-white/85 backdrop-blur-lg border-0 shadow-2xl">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">Soft Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="border-blue-300 text-blue-700">Strong Communication</Badge>
                  <Badge variant="outline" className="border-green-300 text-green-700">Client Relationship Management</Badge>
                  <Badge variant="outline" className="border-purple-300 text-purple-700">Strategic Thinking</Badge>
                  <Badge variant="outline" className="border-orange-300 text-orange-700">Collaboration and Team Leadership</Badge>
                  <Badge variant="outline" className="border-orange-300 text-orange-700">Prablem Solving</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover scroll-reveal bg-white/85 backdrop-blur-lg border-0 shadow-2xl">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">Tools & Technologies</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-blue-600 text-white">SQL / Database Management</Badge>
                  <Badge className="bg-green-600 text-white">HTML/CSS and Python</Badge>
                  <Badge className="bg-purple-600 text-white">Data Visualization</Badge>
                  <Badge className="bg-orange-600 text-white">Microsoft Office Suite</Badge>
                  <Badge className="bg-pink-600 text-white">Project Documentation & Training Tools</Badge>
                  <Badge className="bg-indigo-600 text-white">Networking Fundamentals</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover scroll-reveal bg-white/85 backdrop-blur-lg border-0 shadow-2xl">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">Education & Languages</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-700">Bachelor In Computer Information Systems(BCIS)</h4>
                    <p className="text-gray-600">Boston International College(BIC)</p>
                    <p className="text-gray-600">Graduated: 2024</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-gray-700">Languages</h4>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="border-blue-300 text-blue-700">English</Badge>
                      <Badge variant="outline" className="border-green-300 text-green-700">Nepali</Badge>
                      <Badge variant="outline" className="border-purple-300 text-purple-700">Hindi</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding px-4 relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text scroll-reveal drop-shadow-lg">Let's Connect</h2>
          <Card className="card-hover scroll-reveal bg-white/90 backdrop-blur-lg border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="animate-float mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 animate-pulse-glow shadow-2xl">
                  <MessageSquare className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-6 gradient-text drop-shadow-md">Pratham Khanal</h3>
              <div className="space-y-6 text-gray-700 mb-8">
                <div className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-md rounded-lg card-hover shadow-lg border border-white/40">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <span className="text-lg font-medium">Bhanu-7,Tanahun, Nepal</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-md rounded-lg card-hover shadow-lg border border-white/40">
                  <Mail className="w-6 h-6 text-green-600" />
                  <button 
                    onClick={handleEmailClick}
                    className="text-lg hover:text-primary transition-colors font-medium"
                  >
                    pkhanal0114@gmail.com
                  </button>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-md rounded-lg card-hover shadow-lg border border-white/40">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <button 
                    onClick={handlePhoneClick}
                    className="text-lg hover:text-primary transition-colors font-medium"
                  >
                    +977 9861763539
                  </button>
                </div>
              </div>
              <p className="text-xl mt-8 gradient-text font-semibold mb-8 drop-shadow-sm">
                Let's connect and collaborate on digital transformation in healthcare!
              </p>
              <div className="flex justify-center gap-6">
                <Button 
                  className="btn-animated hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl"
                  onClick={handleEmailClick}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  className="btn-animated hover:scale-105 transition-all duration-300 border-2 bg-black/80 backdrop-blur-sm shadow-xl"
                  onClick={handlePhoneClick}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-lg py-12 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-float mb-6">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <User className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-white/90 text-lg drop-shadow-md">&copy; 2024 Pratham Khanal. All rights reserved.</p>
          <p className="text-white/70 mt-2 drop-shadow-sm">Building the future of healthcare technology</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
