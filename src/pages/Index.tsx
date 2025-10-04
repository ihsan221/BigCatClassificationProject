import { useState, useRef, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { ImageUpload } from "@/components/ImageUpload";
import { ClassificationResult } from "@/components/ClassificationResult";
import { SpeciesInfo } from "@/components/SpeciesInfo";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import * as tf from "@tensorflow/tfjs";

interface Prediction {
  label: string;
  confidence: number;
}

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState<tf.GraphModel | null>(null);
  const uploadRef = useRef<HTMLDivElement>(null);

  const classNames = [
    "African Leopard",
    "Caracal", 
    "Cheetah",
    "Clouded Leopard",
    "Jaguar",
    "Lions",
    "Ocelot",
    "Puma",
    "Snow Leopard",
    "Tiger"
  ];

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadGraphModel('/model/model.json');
        setModel(loadedModel);
        console.log('Model berhasil dimuat');
      } catch (error) {
        console.error('Error loading model:', error);
        toast.error('Gagal memuat model');
      }
    };
    loadModel();
  }, []);

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

    if (!model) {
      toast.error("Model belum siap, harap tunggu...");
      return;
    }

    setIsLoading(true);
    
    try {
      // Load dan preprocess gambar
      const img = new Image();
      img.src = selectedImage!;
      
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      // Konversi gambar ke tensor dan resize ke 224x224
      const tensor = tf.browser.fromPixels(img)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .div(tf.scalar(255.0))
        .expandDims(0);

      // Prediksi
      const predictions = model.predict(tensor) as tf.Tensor;
      const predArray = await predictions.data();
      
      // Konversi ke format yang dibutuhkan
      const results: Prediction[] = Array.from(predArray)
        .map((confidence, index) => ({
          label: classNames[index],
          confidence: confidence
        }))
        .sort((a, b) => b.confidence - a.confidence)
        .slice(0, 5);

      setPredictions(results);
      toast.success("Klasifikasi selesai!");
      
      // Cleanup tensors
      tensor.dispose();
      predictions.dispose();
    } catch (error) {
      console.error('Error during classification:', error);
      toast.error("Gagal melakukan klasifikasi");
    } finally {
      setIsLoading(false);
    }
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
