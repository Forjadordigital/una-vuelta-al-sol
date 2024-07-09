import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  fecha: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  video: string;
  artists: string[];
  mensaje: string;
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "Aprender A Quererte",
    fecha: "Agosto 2023",
    color: colors.yellow,
    cover: `/img/1.webp`,
    video: "OukQDrJ7QRQ",
    artists: ["Morat"],
    mensaje: "Descubrirte es descubrirme en ti. Escuchar tus sueños, tus historias, tus alegrías, tus miedos y fantasias.",
  },
  {
    id: '2',
    albumId: 2,
    title: "Top of the World",
    fecha: "Septiembre 2023",
    color: colors.green,
    cover:`/img/2.webp`,
    video: "Pp1d1K_Qe-0",
    artists: ["Shawn Mendes"],
    mensaje: "Desde que te vi quise tomar tu mano y llevarte a ver las estrellas en la sima del mundo",
  },
  {
    id: '3',
    albumId: 3,
    title: "Primaveras en el pelo",
    fecha: "Octubre 2023",
    color: colors.rose,
    cover:`/img/3.webp`,
    video: "hJsBenxz_EM",
    artists: ["El Arrevato", "Poveda"],
    mensaje: "Quiero pintar una sonrisa en tu alma y enseñarte mi amor... Abrazarte desde el corazón.",
  },
  {
    id: '4',
    albumId: 4,
    title: "Grand Escape",
    fecha: "Noviembre 2023",
    color: colors.blue,
    cover:  `/img/4.webp`,
    video: "yIArdsmXFZI",
    artists: ["El tiempo contigo"],
    mensaje: "Dejamos atrás la individualidad del alma para aceptarnos el uno en el otro... Rebis.",
  },
  {
    id: '5',
    albumId: 5,
    title: "Lo que nos merecemos",
    fecha: "Diciembre 2023",
    color: colors.purple,
    cover:  `/img/5.webp`,
    video: "Gv4HvVyrXR0",
    artists: ["Melendi"],
    mensaje: "A pesar de las dificultades, prosperamos como la planta que germina en el asfalto.",
  },
  {
    id: '6',
    albumId: 6,
    title: "Cuando Nadie Ve",
    fecha: "Enero 2024",
    color: colors.orange,
    cover:  `/img/6.webp`,
    video: "szeA9tvItJY",
    artists: ["Morat"],
    mensaje: "A pesar de las dificultades, prosperamos como la planta que germina en el asfalto.",
  },
  {
    id: '7',
    albumId: 7,
    title: "Todo Contigo",
    fecha: "Febrero 2024",
    color: colors.orange,
    cover:  `/img/7.webp`,
    video: "O5xz-7IoLD4",
    artists: ["Sofía Blumer"],
    mensaje: "No quiero un ratico, ni dos ni tres... Yo lo quiero todo contigo.",
  },
  {
    id: '8',
    albumId: 8,
    title: "Tutto per me",
    fecha: "Marzo 2024",
    color: colors.orange,
    cover:  `/img/8.webp`,
    video: "1yOWuk71Abk",
    artists: ["Michele Merlo"],
    mensaje: "Tu sonrisa, que ilumina mis días, es mi tesoro más preciado.",
  },
  {
    id: '9',
    albumId: 9,
    title: "A Sky Full of Stars",
    fecha: "Abril 2024",
    color: colors.orange,
    cover:  `/img/9.webp`,
    video: "GkEjCynfk_E",
    artists: ["Coldplay"],
    mensaje: "¡Eres increíble! Eres mi luna, portadora de estrellas.",
  },
  {
    id: '10',
    albumId: 10,
    title: "Durante una mirada",
    fecha: "Mayo 2024",
    color: colors.orange,
    cover:  `/img/10.webp`,
    video: "zEqydjm1AP0",
    artists: ["La Oreja de Van Gogh"],
    mensaje: "La mirada de ayer, la de hoy y la de mañana son la misma, siempre vuelvo a esa primera mirada al ver tus ojos.",
  },
  {
    id: '11',
    albumId: 11,
    title: "Your Name",
    fecha: "Junio 2024",
    color: colors.orange,
    cover:  `/img/11.webp`,
    video: "Nr7LD6vGxnw",
    artists: ["Nandemonaiya"],
    mensaje: "Somos viajeros en el tiempo, unidos a  por el lazo rojo a través de las eras hasta el fin del tiempo.",
  },
  {
    id: '12',
    albumId: 12,
    title: "Nuestro Sonido",
    fecha: "Julio 2024",
    color: colors.orange,
    cover:  `/img/12.webp`,
    video: "s61TmfE3zY4",
    artists: ["EPVP"],
    mensaje: "Sonidos de las gotas, Silencio envolvente, El calor de los dos",
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "A Prender A Quererte",
    "image": `/img/1.webp`,
    "artists": ["Morat"],
    "album": "Agosto 2023",
    "duration": "4:23"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Top of the World",
    "image": `/img/2.webp`,
    "artists": ["Shawn Mendes"],
    "album": "Septiembre 2023",
    "duration": "2:51"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Primaveras en el pelo",
    "image": `/img/3.webp`,
    "artists": ["El Arrevato", "Poveda"],
    "album": "Octubre 2023",
    "duration": "3:50"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Grand Escape",
    "image": `/img/4.webp`,
    "artists": ["El tiempo contigo"],
    "album": "Noviembre 2023",
    "duration": "5:34"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Lo que nos merecemos",
    "image": `/img/5.webp`,
    "artists": ["Melendi"],
    "album": "Diciembre 2023",
    "duration": "3:57"
  },
  {
    "id": 1,
    "albumId": 6,
    "title": "Cuando Nadie Ve",
    "image": `/img/6.webp`,
    "artists": ["Morat"],
    "album": "Enero 2024",
    "duration": "3:45"
  },
  {
    "id": 1,
    "albumId": 7,
    "title": "Todo Contigo",
    "image": `/img/7.webp`,
    "artists": ["Sofía Blumer"],
    "album": "Febrero 2024",
    "duration": "3:13"
  },
  {
    "id": 1,
    "albumId": 8,
    "title": "Tutto per me",
    "image": `/img/8.webp`,
    "artists": ["Michele Merlo"],
    "album": "Marzo 2024",
    "duration": "3:40"
  },
  {
    "id": 1,
    "albumId": 9,
    "title": "A Sky full of Stars",
    "image": `/img/9.webp`,
    "artists": ["Coldplay"],
    "album": "Abril 2024",
    "duration": "3:59"
  },
  {
    "id": 1,
    "albumId": 10,
    "title": "Durante una mirada",
    "image": `/img/10.webp`,
    "artists": ["La Oreja de Van Gogh"],
    "album": "Mayo 2024",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 11,
    "title": "Your Name",
    "image": `/img/11.webp`,
    "artists": ["Nandemonaiya"],
    "album": "Junio 2024",
    "duration": "5:45"
  },
  {
    "id": 1,
    "albumId": 12,
    "title": "Nuestro Sonido",
    "image": `/img/12.webp`,
    "artists": ["EPVP"],
    "album": "Julio 2024",
    "duration": "7:00"
  },
]