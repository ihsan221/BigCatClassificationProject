import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

interface Prediction {
  label: string;
  confidence: number;
}

interface ClassificationResultProps {
  predictions: Prediction[];
  isLoading: boolean;
}

export const ClassificationResult = ({ predictions, isLoading }: ClassificationResultProps) => {
  if (isLoading) {
    return (
      <Card className="p-8 shadow-soft">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Menganalisis gambar...</p>
        </div>
      </Card>
    );
  }

  if (predictions.length === 0) {
    return null;
  }

  return (
    <Card className="p-6 shadow-soft animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-5 w-5 text-primary" />
        <h3 className="text-2xl font-bold">Hasil Klasifikasi</h3>
      </div>
      
      <div className="space-y-4">
        {predictions.map((prediction, index) => (
          <div 
            key={index} 
            className="space-y-2 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg">{prediction.label}</span>
                {index === 0 && (
                  <Badge className="bg-gradient-primary">
                    Prediksi Tertinggi
                  </Badge>
                )}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {(prediction.confidence * 100).toFixed(1)}%
              </span>
            </div>
            <Progress 
              value={prediction.confidence * 100} 
              className="h-3"
            />
          </div>
        ))}
      </div>
    </Card>
  );
};
