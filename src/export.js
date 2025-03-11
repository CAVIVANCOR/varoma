import building from "../src/assets/instalacion.jpg";
import construction from "../src/assets/Mantenimiento.jpg";
import design from "../src/assets/pruebas.jpg";
import paint from "../src/assets/preventivo.jpg";
import sincronismo from "../src/assets/sincronismo.jpg";
import sincronismo01 from "../src/assets/sincronismo01.jpg";
import sincronismo02 from "../src/assets/sincronismo02.jpg";
import sincronismo03 from "../src/assets/sincronismo03.jpg";

import { FcAcceptDatabase, FcCalendar, FcDepartment, FcRules } from "react-icons/fc";

import client1 from "../src/assets/logoCliente00.jpg";
import client2 from "../src/assets/logoCliente01.jpg";
import client3 from "../src/assets/logoCliente02.png";
import client4 from "../src/assets/logoCliente03.jpg";
import client5 from "../src/assets/logoCliente04.jpg";

export const allservices = [
  {
    icon: building,
    title: "INSTALACION Y PUESTA EN MARCHA",
    about:"Transformadores de potencia y distribución, Celdas MT, Grupos electrógenos, Cableado MT y BT, Control e Instrumentación, Subestaciones eléctricas prefabricadas, HML y accesorios, Tableros eléctricos industriales, Bancos DC y paneles SCADA",
    icons:[]
  },
  {
    icon: construction,
    title: "MANTENIMIENTO Y MONTAJE",
    about:"Subestaciones y salas eléctricas en MT, Celdas (GIS, convencionales, compactas), Líneas eléctricas aéreas y subterráneas en MT, Transformadores de distribución y potencia MVA, Mallas y puesta a tierra",
    icons:[]
  },
  {
    icon: design,
    title: "PRUEBAS Y DIAGNOSTICO",
    about:
      "Pruebas de pre-comisionamiento, Pruebas de comisionamiento, Pruebas funcionales y puesta en servicio, Diagnóstico en equipos de baja, media y alta tensión",
    icons:[]
  },
  {
    icon: paint,
    title: "MANTENIMIENTO PREVENTIVO Y CORRECTIVO",
    about:
      "Subestaciones y salas eléctricas, Líneas eléctricas aéreas y subterráneas en MT, Transformadores de distribución y potencia MVA, Mallas y puesta a tierra",
    icons:[]
  },
  {
    icon: sincronismo,
    title: "PRUEBAS DE SINCRONIZACION DE GENERADORES CON RED ELECTRICA",
    about:
      "Garantizamos el correcto funcionamiento de encendido de los generadores Diesel cuando la energía de la red se haya cortado y entre en funcionamiento con la secuencia de fases, la frecuencia y la tensión sean las mismas, para que no genere sobrecargas a los generadores y afecte a la zona operativa",
    icons: [sincronismo, sincronismo01, sincronismo02, sincronismo03],
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
    name: "Consorcio Salud San Ignacio",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Architect",
  },
  {
    image: client3,
    name: "Consorcio Supervisor TP Callao",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Builder",
  },
  {
    image: client4,
    name: "Agrokasa",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Builder",
  },
  {
    image: client5,
    name: "Tukuman",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Builder",
  },
];
