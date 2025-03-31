import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div 
        className="text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <h1 className="text-9xl font-bold text-primary">404</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">Sayfa Bulunamadı</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button asChild variant="default" size="lg">
            <Link to="/" className="flex items-center gap-2">
              <Home size={20} />
              Ana Sayfaya Dön
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="#" onClick={() => window.history.back()} className="flex items-center gap-2">
              <ArrowLeft size={20} />
              Geri Git
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-sm text-muted-foreground"
        >
          <p>Yardıma mı ihtiyacınız var?</p>
          <Link to="/contact" className="text-primary hover:underline">
            İletişime geçin
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
