import { Card } from "@/components/ui/card";
import { Crown, Cat, Sparkles, Mountain, Zap, Trees, Footprints, Wind, CloudSnow, Flame } from "lucide-react";
import africanLeopardImg from "@/assets/african-leopard.jpg";
import caracalImg from "@/assets/caracal.jpg";
import cheetahImg from "@/assets/cheetah.jpg";
import cloudedLeopardImg from "@/assets/clouded-leopard.jpg";
import jaguarImg from "@/assets/jaguar.jpg";
import lionImg from "@/assets/lion.jpg";
import ocelotImg from "@/assets/ocelot.jpg";
import pumaImg from "@/assets/puma.jpg";
import snowLeopardImg from "@/assets/snow-leopard.jpg";
import tigerImg from "@/assets/tiger.jpg";

const species = [
  {
    icon: Sparkles,
    name: "African Leopard",
    description: "Macan tutul Afrika dengan bintik rosette hitam, pemanjat pohon yang ahli dan pemburu nokturnal.",
    image: africanLeopardImg,
  },
  {
    icon: Zap,
    name: "Caracal",
    description: "Kucing liar dengan telinga panjang berumbai hitam, pelompat yang luar biasa dan pemburu burung.",
    image: caracalImg,
  },
  {
    icon: Wind,
    name: "Cheetah",
    description: "Hewan darat tercepat di dunia dengan kecepatan hingga 120 km/jam, berburu di padang savana.",
    image: cheetahImg,
  },
  {
    icon: CloudSnow,
    name: "Clouded Leopard",
    description: "Macan dahan dengan corak awan unik, penghuni hutan tropis Asia dengan taring terpanjang.",
    image: cloudedLeopardImg,
  },
  {
    icon: Flame,
    name: "Jaguar",
    description: "Kucing terbesar di Amerika dengan gigitan terkuat, pemburu sungai yang handal.",
    image: jaguarImg,
  },
  {
    icon: Crown,
    name: "Lions",
    description: "Raja hutan dengan mane yang megah, satu-satunya kucing besar yang hidup berkelompok.",
    image: lionImg,
  },
  {
    icon: Footprints,
    name: "Ocelot",
    description: "Kucing liar Amerika dengan corak belang dan bintik cantik, pemburu nokturnal yang gesit.",
    image: ocelotImg,
  },
  {
    icon: Mountain,
    name: "Puma",
    description: "Singa gunung Amerika dengan tubuh atletis, predator soliter yang adaptif di berbagai habitat.",
    image: pumaImg,
  },
  {
    icon: CloudSnow,
    name: "Snow Leopard",
    description: "Macan tutul salju dari pegunungan Asia Tengah, dengan bulu tebal dan ekor panjang.",
    image: snowLeopardImg,
  },
  {
    icon: Cat,
    name: "Tiger",
    description: "Kucing terbesar di dunia dengan corak belang hitam ikonik, predator puncak hutan Asia.",
    image: tigerImg,
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
                className="overflow-hidden hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-gradient-primary">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
