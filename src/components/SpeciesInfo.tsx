import { Card } from "@/components/ui/card";
import { Crown, Cat, Sparkles, Mountain, Zap, Trees, Footprints, Wind, CloudSnow, Flame } from "lucide-react";

const species = [
  {
    icon: Sparkles,
    name: "African Leopard",
    description: "Macan tutul Afrika dengan bintik rosette hitam, pemanjat pohon yang ahli dan pemburu nokturnal.",
  },
  {
    icon: Zap,
    name: "Caracal",
    description: "Kucing liar dengan telinga panjang berumbai hitam, pelompat yang luar biasa dan pemburu burung.",
  },
  {
    icon: Wind,
    name: "Cheetah",
    description: "Hewan darat tercepat di dunia dengan kecepatan hingga 120 km/jam, berburu di padang savana.",
  },
  {
    icon: CloudSnow,
    name: "Clouded Leopard",
    description: "Macan dahan dengan corak awan unik, penghuni hutan tropis Asia dengan taring terpanjang.",
  },
  {
    icon: Flame,
    name: "Jaguar",
    description: "Kucing terbesar di Amerika dengan gigitan terkuat, pemburu sungai yang handal.",
  },
  {
    icon: Crown,
    name: "Lions",
    description: "Raja hutan dengan mane yang megah, satu-satunya kucing besar yang hidup berkelompok.",
  },
  {
    icon: Footprints,
    name: "Ocelot",
    description: "Kucing liar Amerika dengan corak belang dan bintik cantik, pemburu nokturnal yang gesit.",
  },
  {
    icon: Mountain,
    name: "Puma",
    description: "Singa gunung Amerika dengan tubuh atletis, predator soliter yang adaptif di berbagai habitat.",
  },
  {
    icon: CloudSnow,
    name: "Snow Leopard",
    description: "Macan tutul salju dari pegunungan Asia Tengah, dengan bulu tebal dan ekor panjang.",
  },
  {
    icon: Cat,
    name: "Tiger",
    description: "Kucing terbesar di dunia dengan corak belang hitam ikonik, predator puncak hutan Asia.",
  },
];

export const SpeciesInfo = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Tentang Keluarga Felidae
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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
