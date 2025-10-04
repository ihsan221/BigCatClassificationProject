import { Card } from "@/components/ui/card";
import { Crown, Cat, Sparkles } from "lucide-react";

const species = [
  {
    icon: Crown,
    name: "Lion (Panthera leo)",
    description: "Raja hutan dengan mane yang megah, hidup dalam kelompok pride di Afrika.",
  },
  {
    icon: Cat,
    name: "Tiger (Panthera tigris)",
    description: "Kucing terbesar di dunia dengan corak belang khas, predator soliter Asia.",
  },
  {
    icon: Sparkles,
    name: "Leopard (Panthera pardus)",
    description: "Pemanjat pohon yang tangkas dengan bintik-bintik rosette unik.",
  },
];

export const SpeciesInfo = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Tentang Keluarga Felidae
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {species.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 rounded-full bg-gradient-primary w-fit mb-4">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
