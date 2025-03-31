import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Briefcase, GraduationCap, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import TypeWriter from "@/components/TypeWriter";

const About = () => {
  const personalInfo = {
    name: "Bilal Öztürk",
    title: "Bilgisayar Mühendisliği Öğrencisi",
    bio:
      "13 Eylül 2004 tarihinde Ankara' da doğdum. İlkokul, " +
      "ortaokul ve lise eğitimimi Ankara' da tamamladım. " +
      "Üniversite eğitimime Kırıkkale Üniversitesi Bilgisayar " +
      "Mühendisliği bölümünde 3. sınıf olarak devam " +
      "etmekteyim." +
      "Çok erken yaşta tanıştığım bilişim ortamında kendimi " +
      "geliştirmeye devam ediyorum. Daha önce birçok " +
      "etkinliğe katıldım ve ekiplerde bulundum. Ekip " +
      "çalışmasının önemini ve esaslarını kavradım. Bu " +
      "süreçte öğrenmem gereken çok fazla şeyle " +
      "karşılaştım ve dolayısıyla bunları öğrenirken bir " +
      "yandan da öğrenmeyi de öğrendim. Hala hiç " +
      "bitmeyecek olan öğrenme ve kendimi geliştirme " +
      "serüvenime ilk günkü heyecanla devam etmekteyim. " +
      "Grup çalışmasına ve öğrenmeye son derece açığım. " +
      "Fikir üretme ve geliştirme konusunda, uygulama " +
      "geliştirme alanında kendime güveniyorum.",
    avatar: "/ppp2.png",
  };

  // const experiences = [
  //   {
  //     company: "XYZ Teknoloji A.Ş.",
  //     position: "Senior Frontend Geliştirici",
  //     period: "2021 - Şimdi",
  //     description:
  //       "Şirketin ana ürününün frontend tarafını geliştirdim. React, TypeScript ve Redux kullanarak performans iyileştirmeleri yaptım.",
  //   },
  //   {
  //     company: "ABC Yazılım Ltd.",
  //     position: "Full Stack Geliştirici",
  //     period: "2018 - 2021",
  //     description:
  //       "E-ticaret platformu için frontend ve backend geliştirme. Node.js, Express ve React ile çalıştım.",
  //   },
  //   {
  //     company: "DEF Bilişim",
  //     position: "Junior Web Geliştirici",
  //     period: "2016 - 2018",
  //     description:
  //       "Kurumsal web siteleri geliştirdim. HTML, CSS, JavaScript ve PHP kullandım.",
  //   },
  // ];

  const education = [
    {
      institution: "Kırıkkale Üniversitesi",
      degree: "Bilgisayar Mühendisliği",
      period: "2022 - ...",
    },
  ];

  // const achievements = [
  //   {
  //     title: "Yılın Geliştiricisi Ödülü",
  //     organization: "XYZ Teknoloji A.Ş.",
  //     year: "2022",
  //     description:
  //       "Şirket içinde en iyi performans gösteren geliştirici seçildim.",
  //   },
  //   {
  //     title: "Açık Kaynak Katkı Ödülü",
  //     organization: "GitHub",
  //     year: "2021",
  //     description:
  //       "Açık kaynak projelere yaptığım katkılardan dolayı tanındım.",
  //   },
  // ];

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
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            <TypeWriter 
              text="Portfolio"
              className="text-xl font-bold"
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <Link to="/about" className="text-primary font-medium">
              Hakkımda
            </Link>
            <a
              href="/#projects"
              className="hover:text-primary transition-colors"
            >
              Projeler
            </a>
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

      <motion.main
        className="container mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={fadeInUp}
        >
          Hakkımda
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row gap-8 mb-12"
          variants={staggerContainer}
        >
          <motion.div
            className="md:w-1/3 flex justify-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Avatar className="w-48 h-48 border-4 border-primary/20">
              <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
              <AvatarFallback>
                <User size={64} />
              </AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.div className="md:w-2/3" variants={fadeInUp}>
            <h2 className="text-2xl font-bold mb-2">{personalInfo.name}</h2>
            <h3 className="text-xl text-muted-foreground mb-4">
              {personalInfo.title}
            </h3>
            <p className="text-lg mb-4">{personalInfo.bio}</p>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Tabs defaultValue="experience" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="education"
                className="flex items-center gap-2"
              >
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Eğitim</span>
              </TabsTrigger>
            </TabsList>
            {/* <TabsContent value="experience" className="mt-6">
              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {experiences.map((exp, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold">
                              {exp.position}
                            </h3>
                            <h4 className="text-lg text-primary">
                              {exp.company}
                            </h4>
                          </div>
                          <span className="text-muted-foreground">
                            {exp.period}
                          </span>
                        </div>
                        <p>{exp.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent> */}
            <TabsContent value="education" className="mt-6">
              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {education.map((edu, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                            <h4 className="text-lg text-primary">
                              {edu.institution}
                            </h4>
                          </div>
                          <span className="text-muted-foreground">
                            {edu.period}
                          </span>
                        </div>
                        <p>{edu.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            {/* <TabsContent value="achievements" className="mt-6">
              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {achievements.map((achievement, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold">
                              {achievement.title}
                            </h3>
                            <h4 className="text-lg text-primary">
                              {achievement.organization}
                            </h4>
                          </div>
                          <span className="text-muted-foreground">
                            {achievement.year}
                          </span>
                        </div>
                        <p>{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent> */}
          </Tabs>
        </motion.div>
      </motion.main>

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

export default About;
