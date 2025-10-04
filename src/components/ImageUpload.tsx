import { useCallback, useState } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ImageUploadProps {
  onImageSelect: (file: File, preview: string) => void;
  selectedImage: string | null;
  onClear: () => void;
}

export const ImageUpload = ({ onImageSelect, selectedImage, onClear }: ImageUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error("Harap upload file gambar");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const preview = e.target?.result as string;
      onImageSelect(file, preview);
      toast.success("Gambar berhasil diupload!");
    };
    reader.readAsDataURL(file);
  }, [onImageSelect]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }, [handleFile]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!selectedImage ? (
        <Card
          className={`border-2 border-dashed transition-all duration-300 ${
            isDragging 
              ? "border-primary bg-primary/5 shadow-warm" 
              : "border-border hover:border-primary/50"
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <label className="flex flex-col items-center justify-center py-16 px-8 cursor-pointer">
            <div className="p-4 rounded-full bg-primary/10 mb-4">
              <Upload className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload Gambar Big Cat</h3>
            <p className="text-muted-foreground text-center mb-4">
              Drag & drop atau klik untuk memilih gambar
            </p>
            <p className="text-sm text-muted-foreground">
              Mendukung: JPG, PNG, WEBP
            </p>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleChange}
            />
          </label>
        </Card>
      ) : (
        <Card className="overflow-hidden shadow-soft">
          <div className="relative">
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="w-full h-auto rounded-t-lg"
            />
            <Button
              size="icon"
              variant="destructive"
              className="absolute top-4 right-4"
              onClick={onClear}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4 bg-card">
            <div className="flex items-center gap-2 text-muted-foreground">
              <ImageIcon className="h-4 w-4" />
              <span className="text-sm">Siap untuk diklasifikasi</span>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
