import unifametroBanner from "../../assets/unifametro.png";
import gtech from "../../assets/gtech.png";
import cev from "../../assets/cev.png";
import certificadocev from "../../assets/certificado-cev.png";
import certificadogt from "../../assets/certificado-gt.jpg";
import formatura1 from "../../assets/formatura-1.jpg";
import formatura2 from "../../assets/formatura-2.jpg";

export const formation = [
  {
    id: "unifametro",
    colorBanner: "bg-green-700",
    img: unifametroBanner,
    title: "Unifametro",
    area: "ADS - Análise E Desenvolvimento de Sistemas",
    periodo: "FEV 2025 - (Previsto) JUN 2027",
    cursando: true,
    certificado: null,
  },
  {
    id: "Geração Tech",
    colorBanner: "bg-white",
    img: gtech,
    title: "Projeto Geração Tech - IEL Ceará",
    area: "Desenvolvedor Web Full Stack",
    periodo: `ABR 2025 - JUL 2025\nFormatura 6 De Agosto De 2025`,
    cursando: false,
    certificado: certificadogt,
    fotos: [formatura1, formatura2],
  },
  {
    id: "curso-em-video",
    colorBanner: "bg-blue-600",
    img: cev,
    title: "Curso em Vídeo",
    area: "CURSO HTML5 E CSS3",
    periodo: "Concluído em 2025",
    cursando: false,
    certificado: certificadocev,
  },
];
