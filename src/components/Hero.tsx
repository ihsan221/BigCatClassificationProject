import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bigcats.jpg";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero backdrop-blur-[2px]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Big Cat Classifier
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Identifikasi spesies dari keluarga Felidae menggunakan Deep Learning. Upload gambar dan temukan kucing besar mana yang ada di foto Anda.
        </p>
        <Button 
          size="lg" 
          onClick={onGetStarted}
          className="bg-gradient-primary hover:shadow-warm transition-all duration-300 text-lg px-8 py-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
        >
          <Upload className="mr-2 h-5 w-5" />
          Mulai Klasifikasi
        </Button>
      </div>
    </section>
  );
};
