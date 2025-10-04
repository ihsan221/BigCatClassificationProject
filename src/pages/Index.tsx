import { useState, useRef } from "react";
import { Hero } from "@/components/Hero";
import { ImageUpload } from "@/components/ImageUpload";
import { ClassificationResult } from "@/components/ClassificationResult";
import { SpeciesInfo } from "@/components/SpeciesInfo";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Prediction {
  label: string;
  confidence: number;
}

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const uploadRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    uploadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageSelect = (file: File, preview: string) => {
    setSelectedFile(file);
    setSelectedImage(preview);
    setPredictions([]);
  };

  const handleClear = () => {
    setSelectedImage(null);
    setSelectedFile(null);
    setPredictions([]);
  };

  const handleClassify = async () => {
    if (!selectedFile) {
      toast.error("Harap upload gambar terlebih dahulu");
      return;
    }

    setIsLoading(true);
    
    // Simulasi klasifikasi - ganti dengan model deep learning Anda
    setTimeout(() => {
      const mockPredictions: Prediction[] = [
        { label: "Tiger (Panthera tigris)", confidence: 0.89 },
        { label: "Lion (Panthera leo)", confidence: 0.07 },
        { label: "Leopard (Panthera pardus)", confidence: 0.04 },
      ];
      
      setPredictions(mockPredictions);
      setIsLoading(false);
      toast.success("Klasifikasi selesai!");
    }, 2000);

    // TODO: Implementasi model deep learning Anda di sini
    // Contoh menggunakan @huggingface/transformers:
    // const classifier = await pipeline('image-classification', 'your-model-name');
    // const result = await classifier(selectedImage);
    // setPredictions(result);
  };

  return (
    <main className="min-h-screen">
      <Hero onGetStarted={handleGetStarted} />
      
      <section ref={uploadRef} className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Upload & Klasifikasi
          </h2>
          
          <div className="space-y-8">
            <ImageUpload 
              onImageSelect={handleImageSelect}
              selectedImage={selectedImage}
              onClear={handleClear}
            />
            
            {selectedImage && (
              <div className="flex justify-center">
                <Button
                  size="lg"
                  onClick={handleClassify}
                  disabled={isLoading}
                  className="bg-gradient-primary hover:shadow-warm transition-all duration-300"
                >
                  {isLoading ? "Memproses..." : "Klasifikasi Sekarang"}
                </Button>
              </div>
            )}
            
            <ClassificationResult 
              predictions={predictions}
              isLoading={isLoading}
            />
          </div>
        </div>
      </section>

      <SpeciesInfo />
      
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">
          Big Cat Classifier - Powered by Deep Learning
        </p>
      </footer>
    </main>
  );
};

export default Index;
