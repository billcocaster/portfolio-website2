import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, ExternalLink, Github, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";
import TypeWriter from "@/components/TypeWriter";

const Projects = () => {
  // Bu veriyi normalde bir API'den veya veritabanından çekebilirsiniz
  const projects = [
    {
      id: 1,
      title: "YemekTarifleri Web Uygulaması",
      description:
        "YemekTarifleri, lezzetli tarifleri ve yararlı blogları paylaşmak ve keşfetmek için tasarlanmış olan bir web sitesidir.",
      longDescription:
        "YemekTarifleri, lezzetli tarifleri ve yararlı blogları paylaşmak ve keşfetmek için tasarlanmış olan bir web sitesidir. İster deneyimli " +
        "bir şef olun ister mutfakta yeni başlayan biri olun, bu platform her zevke ve beceri seviyesine uygun tarifler sunar.",
      image: "/yemektarifleri.png",
      screenshots: [
        "/yemektarifleri2.png",
        "/yemektarifleri.png",
        "/yemektarifleri3.png",
      ],
      github: "https://github.com/billcocaster/Project-Website-FoodRecipes",
      demo: "https://yemektarifleriapp-ccbhdchegxe0buez.northeurope-01.azurewebsites.net/",
      tags: [".NET Framework", "MVC", "MSSQL", "HTML/CSS", "Bootstrap"],
      features: [
        "Kullanıcı girişi ve kaydı",
        "Tariflerin ve blogların paylaşılması",
        "Tariflere ve bloglara yorum yapılması",
        "Admin paneli",
      ],
      technologies: {
        frontend: ["HTML/CSS", "Bootstrap", ".NET Framework", "Git"],
      },
    },
    {
      id: 2,
      title: "passGen",
      description:
        "Kullanıcı dostu arayüze sahip bir şifre oluşturucu. Kullanıcıların güvenli ve karmaşık şifreler oluşturmasına yardımcı olur.",
      longDescription:
        "Kullanıcı dostu arayüze sahip bir şifre oluşturucu. Kullanıcıların güvenli ve karmaşık şifreler oluşturmasına yardımcı olur.",
      image: "/passgen2.png",
      screenshots: ["/passgen2.png"],
      github: "https://github.com/billcocaster/passGen",
      demo: "#",
      tags: ["Python", "CustomTkinter"],
      features: [
        "Farklı türlerden şifreler oluşturma",
        "Kullanıcı dostu tasarım",
        "Şifre önerisi",
        "Şifre geçmişi",
      ],
      technologies: {
        frontend: ["Python", "CustomTkinter"],
      },
    },
    {
      id: 3,
      title: "GoalTracker",
      description:
        "Goal Tracker Mobile App, kullanıcıların kişisel veya profesyonel hedeflerini belirleyip takip etmelerine yardımcı olan bir mobil uygulamadır. ",
      longDescription:
        "Goal Tracker Mobile App, kullanıcıların kişisel veya profesyonel hedeflerini belirleyip takip etmelerine yardımcı olan bir mobil uygulamadır. ",
      image: "/goaltracker2.jpg",
      screenshots: ["/goaltracker3.jpg", "/goaltracker2.jpg", "/goaltracker.jpg"],
      github: "https://github.com/billcocaster/Goal-Tracker-Mobile-App",
      demo: "#",
      tags: ["React Native", "JavaScript"],
      features: [
        "Görev oluşturma ve düzenleme",
        "Görevleri tamamlandı olarak işaretleme",
        "Tamamlanan görevleri listeleme",
      ],
      technologies: {
        frontend: ["React Native", "JavaScript"],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            <img src="/lionicon2.png" alt="LionIcon" className="h-8 w-8" />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              Hakkımda
            </Link>
            <Link to="/projects" className="text-primary font-medium">
              Projeler
            </Link>
            <a
              href="/#contact"
              className="hover:text-primary transition-colors"
            >
              İletişim
            </a>
          </nav>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Projeler</h1>
          <Button asChild variant="outline" size="sm">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ana Sayfaya Dön
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </AspectRatio>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge variant="outline">+{project.tags.length - 4}</Badge>
                  )}
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    asChild
                    className="flex-1"
                    variant="default"
                    size="sm"
                  >
                    <a href={`#${project.id}`}>
                      <Monitor size={16} className="mr-2" />
                      Detaylar
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="flex-1"
                    variant="outline"
                    size="sm"
                  >
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proje Detayları */}
        {projects.map((project) => (
          <section
            id={`${project.id}`}
            key={`detail-${project.id}`}
            className="mb-20 scroll-mt-20"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                <p className="text-lg mb-6">{project.longDescription}</p>

                <h3 className="text-xl font-semibold mb-3">Özellikler</h3>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  Kullanılan Teknolojiler
                </h3>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.frontend.map((tech, index) => (
                      <Badge key={index}>{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button asChild>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Canlı Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Kaynak Kodu
                    </a>
                  </Button>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-4">
                {project.screenshots.map((screenshot, index) => (
                  <Card key={index} className="overflow-hidden">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={screenshot}
                        alt={`${project.title} Ekran Görüntüsü ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} - Tüm Hakları Saklıdır
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
