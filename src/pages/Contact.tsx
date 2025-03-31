import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import TypeWriter from "@/components/TypeWriter";
import { Link } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Kişisel bilgiler (Index.tsx ile aynı)
  const personalInfo = {
    contact: {
      email: "bilalozturk7724@gmail.com",
      github: "github.com/billcocaster",
      linkedin: "linkedin.com/in/bilaloozturk",
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Gmail'e yönlendirme URL'i oluştur
      const mailtoLink = `mailto:${personalInfo.contact.email}?subject=Portfolio İletişim Formu - ${encodeURIComponent(name)}&body=${encodeURIComponent(`İsim: ${name}\nEmail: ${email}\nMesaj: ${message}`)}`;
      
      // Yeni pencerede Gmail'i aç
      window.open(mailtoLink, '_blank');

      toast({
        title: "Form Hazırlandı",
        description: "Gmail otomatik olarak açılacak ve mesajınızı gönderebileceksiniz.",
      });

      // Formu temizle
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Hata",
        description: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      {/* Header / Navigasyon (Index sayfasından) */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            <img src="/lionicon2.png" alt="LionIcon" className="h-8 w-8" />
          </Link>
          <nav className="hidden md:flex space-x-6 justify-center flex-1">
            <a href="/#about" className="hover:text-primary transition-colors">
              Hakkımda
            </a>
            <a
              href="/#projects"
              className="hover:text-primary transition-colors"
            >
              Projeler
            </a>
            <a href="/contact" className="text-primary transition-colors">
              İletişim
            </a>
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
              <a href="/contact">
                <Mail size={18} />
                <span className="hidden md:inline ml-2">İletişim</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section
          className="max-w-4xl mx-auto py-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl font-bold mb-12 text-center"
            variants={fadeInUp}
          >
            İletişime Geçin
          </motion.h1>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {/* Form */}
            <motion.div variants={fadeInUp}>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        İsminiz
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Adınız Soyadınız"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        E-posta Adresiniz
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="ornek@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                      >
                        Mesajınız
                      </label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder="Mesajınızı buraya yazın..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2">Gönderiliyor</span>
                          <div className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Mesaj Gönder
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* İletişim Bilgileri */}
            <motion.div variants={fadeInUp} className="space-y-4">
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
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Bilal Öztürk - Tüm Hakları Saklıdır
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
