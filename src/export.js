import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import paint from "../src/assets/paint.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { FcAcceptDatabase, FcCalendar, FcDepartment, FcRules } from "react-icons/fc";

import client1 from "../src/assets/abb.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: building,
    title: "INSTALACION Y PUESTA EN MARCHA",
    about:"Transformadores de potencia y distribución, Celdas MT, Grupos electrógenos, Cableado MT y BT, Control e Instrumentación, Subestaciones eléctricas prefabricadas, HML y accesorios, Tableros eléctricos industriales, Bancos DC y paneles SCADA",
  },
  {
    icon: construction,
    title: "MANTENIMIENTO Y MONTAJE",
    about:"Subestaciones y salas eléctricas en MT, Celdas (GIS, convencionales, compactas), Líneas eléctricas aéreas y subterráneas en MT, Transformadores de distribución y potencia MVA, Mallas y puesta a tierra",
  },
  {
    icon: design,
    title: "PRUEBAS Y DIAGNOSTICO",
    about:
      "Pruebas de pre-comisionamiento, Pruebas de comisionamiento, Pruebas funcionales y puesta en servicio, Diagnóstico en equipos de baja, media y alta tensión",
  },
  {
    icon: paint,
    title: "MANTENIMIENTO PREVENTIVO Y CORRECTIVO",
    about:
      "Subestaciones y salas eléctricas, Líneas eléctricas aéreas y subterráneas en MT, Transformadores de distribución y potencia MVA, Mallas y puesta a tierra",
  },
];

export const planning = [
  {
    icon: FcRules,
    title: "Cumplimiento de Normas",
    about:
      "Estrictos en el cumplimiento de las normas de calidad, seguridad y medio ambiente, asegurando que todos los proyectos se realicen de acuerdo con los estándares más altos.",
  },
  {
    icon: FcCalendar,
    title: "Puntualidad y Adaptabilidad",
    about:
      "Comprometidos en ofrecer soluciones efectivas y puntuales, cumpliendo con los plazos establecidos y adaptándose a las necesidades específicas de cada cliente, garantizando la resolución de cualquier eventualidad de manera eficiente.",
  },
  {
    icon: FcDepartment,
    title: "Personalizacion de alta calidad",
    about:
      "Trabajamos con dedicación para superar las expectativas de los clientes, proporcionando servicios personalizados y de alta calidad. La satisfacción del cliente es su prioridad, lo que asegura una atención y solución adaptada a cada proyecto y necesidad específica.",
  },
  {
    icon: FcAcceptDatabase,
    title: "Compromiso",
    about:
      "Nuestro talentoso equipo de expertos en el sector industrial, de infraestructura y de construccion ofrece niveles de eficiencia operativa que nos permite afrontar los desafios energeticos de hoy y de mañana.",
  },
];

export const clients = [
  {
    image: client1,
    name: "ASEA Brown Boveri Ltd.",
    about: "VAROMA GROUP fue seleccionado mediante un estricto proceso de evaluación, garantizando el cumplimiento de los estándares de calidad e integridad alineadas a las políticas de ABB S.A. Hemos comprobado que es una empresa peruana de ingeniería y construcción especializada en la ejecución de proyectos y servicios en el sector eléctrico, brindando soluciones integrales, cumpliendo con las normas regulatorias en aspectos de ingeniería, ambiente y seguridad industrial. Para el Proyecto “PUERTO DEL CALLAO – DISEÑO Y CONSTRUCCIÓN DE LA EXPANSIÓN DE LA FASE 2B” durante el periodo Febrero – Agosto 2024",
    post: "Lider tecnológico",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Builder",
  },
];
