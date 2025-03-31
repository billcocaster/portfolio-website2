import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Briefcase,
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Monitor,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TypeWriter from "@/components/TypeWriter";
import { ThemeToggle } from "@/components/theme-toggle";

const Index = () => {
  // Kişisel bilgiler
  const personalInfo = {
    name: "Bilal Öztürk",
    title: "Bilgisayar Mühendisliği Öğrencisi",
    bio: "",
    avatar: "./ppp2.png", // Kendi fotoğrafınızla değiştirebilirsiniz
    contact: {
      email: "bilalozturk7724@gmail.com",
      github: "github.com/billcocaster",
      linkedin: "linkedin.com/in/bilaloozturk",
    },
  };

  // Beceriler
  const skills = [
    { name: "C#", category: "Backend" },
    { name: ".NET Framework", category: "Backend" },
    { name: "Java", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "HTML", category: "Backend" },
    { name: "CSS", category: "Frontend" },
    { name: "MSSQL", category: "Backend" },
    { name: "Git", category: "Araç" },
  ];

  // Projeler
  const projects = [
    {
      title: "YemekTarifleri Web Uygulaması",
      description:
        "YemekTarifleri, lezzetli tarifleri ve yararlı blogları paylaşmak ve keşfetmek için tasarlanmış olan bir web sitesidir. İster deneyimli " +
        "bir şef olun ister mutfakta yeni başlayan biri olun, bu platform her zevke ve beceri seviyesine uygun tarifler sunar.",
      image: "/yemektarifleri.png",
      github: "https://github.com/billcocaster/Project-Website-FoodRecipes",
      demo: "https://yemektarifleriapp-ccbhdchegxe0buez.northeurope-01.azurewebsites.net/",
      tags: [".NET Framework", "MVC", "HTML/CSS", "MSSQL", "Bootstrap"],
    },
    {
      title: "passGen",
      description:
        "Kullanıcı dostu arayüze sahip bir şifre oluşturucu. Kullanıcıların güvenli ve karmaşık şifreler oluşturmasına yardımcı olur.",
      image: "/passgen2.png",
      github: "https://github.com/billcocaster/passGen",
      // demo: "#",
      tags: ["Python", "CustomTkinter"],
    },
    {
      title: "GoalTracker",
      description:
        "Goal Tracker Mobile App, kullanıcıların kişisel veya profesyonel hedeflerini belirleyip takip etmelerine yardımcı olan bir mobil uygulamadır. ",
      image: "/goaltracker.jpg",
      github: "https://github.com/billcocaster/Goal-Tracker-Mobile-App",
      // demo: "#",
      tags: ["ReactNative", "JavaScript", "HTML/CSS"],
    },
  ];

  // Animasyon için kullanılacak varyantlar
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header / Navigasyon */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            <img src="/lionicon2.png" alt="LionIcon" className="h-8 w-8" />
          </Link>
          <nav className="hidden md:flex space-x-6 justify-center flex-1">
            <a href="#about" className="hover:text-primary transition-colors">
              Hakkımda
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projeler
            </a>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors"
            >
              İletişim
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button asChild size="sm" variant="outline">
              <a
                href={`https://${personalInfo.contact.github}`}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                <span className="hidden md:inline ml-2">GitHub</span>
              </a>
            </Button>
            <Button asChild size="sm">
              <Link to="/contact">
                <Mail size={18} />
                <span className="hidden md:inline ml-2">İletişim</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Bölümü - Animasyonlu */}
        <motion.section
          id="about"
          className="flex flex-col-reverse md:flex-row items-center gap-8 py-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="md:w-2/3" variants={fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {personalInfo.name}
            </h1>
            <TypeWriter
              text="Merhaba!"
              className="text-3xl text-primary font-bold mb-4"
            />
            <h2 className="text-2xl text-muted-foreground mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg mb-8">{personalInfo.bio}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">İletişime Geç</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#projects">Projeleri Gör</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/3 flex justify-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Avatar className="w-[300px] h-[300px] border-4 border-primary/20">
              <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
              <AvatarFallback>
                <User size={100} />
              </AvatarFallback>
            </Avatar>
          </motion.div>
        </motion.section>

        {/* Beceriler Bölümü - Animasyonlu */}
        <motion.section
          id="skills"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl font-bold mb-8" variants={fadeInUp}>
            Beceriler
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="group p-4 border rounded-lg hover:border-primary transition-colors"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <span className="text-sm text-muted-foreground">
                  {skill.category}
                </span>
                <p className="font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projeler Bölümü - Carousel ile */}
        <motion.section
          id="projects"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl font-bold mb-8" variants={fadeInUp}>
            Projeler
          </motion.h2>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div variants={fadeInUp}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                      <div className="aspect-video relative overflow-hidden border-b">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                        <h3 className="text-xl font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2 mt-auto">
                          <Button asChild size="sm" variant="outline">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Github size={16} />
                              <span className="ml-2">Kod</span>
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-12" />
            <CarouselNext className="right-0 sm:-right-12" />
          </Carousel>
        </motion.section>

        {/* İletişim Bölümü - Animasyonlu */}
        <motion.section
          id="contact"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl font-bold mb-8" variants={fadeInUp}>
            İletişim
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                <Mail className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">E-posta</h3>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="text-primary hover:underline"
                >
                  {personalInfo.contact.email}
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                <Github className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">GitHub</h3>
                <a
                  href={`https://${personalInfo.contact.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  {personalInfo.contact.github}
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                <Linkedin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">LinkedIn</h3>
                <a
                  href={`https://${personalInfo.contact.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  {personalInfo.contact.linkedin}
                </a>
              </CardContent>
            </Card>
          </motion.div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/contact">Mesaj Gönderin</Link>
            </Button>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name} - Tüm Hakları
            Saklıdır
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
