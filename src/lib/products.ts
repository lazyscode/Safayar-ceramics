export const BASE = "https://www.safayarceramics.com/img";

export const LOGO = `${BASE}/logo.png`;
export const FOOT_LOGO = `${BASE}/foot_logo.png`;
export const ABOUT_IMG = `${BASE}/about.jpg`;
export const TECH_IMG = `${BASE}/technology/Safayar.png`;
export const BANNER_IMG = `${BASE}/b01.png`;

export interface Product {
  id: number;
  name: string;
  file: string;
  category: string;
}

// Derive extension from filename
function img(path: string) {
  return `${BASE}/portfolio/${path}`;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: "Biscotti", file: img("1_BISCOTTI.png"), category: "Classic" },
  { id: 2, name: "Crema Roma", file: img("2_CREMA ROMA.png"), category: "Classic" },
  { id: 3, name: "Galaxy Crema", file: img("3_GALAXY CREMA.png"), category: "Galaxy" },
  { id: 4, name: "Galaxy Choco", file: img("4_GALAXY CHOCO.png"), category: "Galaxy" },
  { id: 5, name: "Galaxy Sandgrey", file: img("5_GALAXY SANDGREY.png"), category: "Galaxy" },
  { id: 6, name: "Galaxy Darkgrey", file: img("6_GALAXY DARKGREY.png"), category: "Galaxy" },
  { id: 7, name: "Glassiya White", file: img("7_GLASSIYA WHITE.png"), category: "Glassiya" },
  { id: 8, name: "Galaxy Brown", file: img("8_GALAXY BROWN.png"), category: "Galaxy" },
  { id: 9, name: "Glassiya Black", file: img("9_GLASSIYA BLACK.png"), category: "Glassiya" },
  { id: 10, name: "Blue Star", file: img("10_BLUE STAR.png"), category: "Special" },
  { id: 11, name: "Galaxy Pitch", file: img("11_GALAXY PITCH.png"), category: "Galaxy" },
  { id: 12, name: "Galaxy Blue", file: img("12_GALAXY BLUE.png"), category: "Galaxy" },
  { id: 13, name: "Creama Stone", file: img("13_CREAMA STONE.png"), category: "Classic" },
  { id: 14, name: "Galaxy Goldenza", file: img("14_GALAXY GOLDENZA.png"), category: "Galaxy" },
  { id: 15, name: "Glassiya Aqua", file: img("15_GLASSIYA AQUA.png"), category: "Glassiya" },
  { id: 16, name: "Glassiya Blue", file: img("16_GLASSIYA BLUE.png"), category: "Glassiya" },
  { id: 17, name: "Glassiya Brown", file: img("17_GLASSIYA BROWN.png"), category: "Glassiya" },
  { id: 18, name: "Glassiya Grey", file: img("18_GLASSIYA GREY.png"), category: "Glassiya" },
  { id: 19, name: "Glassiya Orange", file: img("19_GLASSIYA ORANGE.png"), category: "Glassiya" },
  { id: 20, name: "Glassiya Light Grey", file: img("20_GLASSIYA LIGHT GREY.png"), category: "Glassiya" },
  { id: 21, name: "Glassiya Red", file: img("21_GLASSIYA RED.png"), category: "Glassiya" },
  { id: 22, name: "Glassiya Safayar", file: img("22_GLASSIYA SAFAYAR.png"), category: "Glassiya" },
  { id: 23, name: "Rosso Diamond", file: img("23_ROSSO DIAMOND.png"), category: "Special" },
  { id: 24, name: "Silky Gold", file: img("24_SILKY GOLD.png"), category: "Special" },
  { id: 25, name: "Glassiya Crema", file: img("25_GALAXY CREMA.jpg"), category: "Glassiya" },
  { id: 26, name: "Glassiya Graphite", file: img("26_GLASSIYA GRAPHITE.jpg"), category: "Glassiya" },
  { id: 27, name: "Glassiya Grey", file: img("27_GLASSIYA GREY.jpg"), category: "Glassiya" },
  { id: 28, name: "Glassiya Ivory", file: img("28_GLASSIYA IVORY.jpg"), category: "Glassiya" },
  { id: 29, name: "Glassiya Light Choco", file: img("29_GLASSIYA LIGHT CHOCO.jpg"), category: "Glassiya" },
  { id: 30, name: "Artico", file: img("30_ARTICO.png"), category: "Classic" },
  { id: 31, name: "Ice Desert", file: img("31_ICE DESERT.png"), category: "Ice Series" },
  { id: 32, name: "Sand Grey", file: img("32_SAND GREY.png"), category: "Sand Series" },
  { id: 33, name: "Odyssey Grey", file: img("33_ODYSSEY GREY.png"), category: "Odyssey" },
  { id: 34, name: "Cappuccino", file: img("34_CAPPUCCINO.png"), category: "Classic" },
  { id: 35, name: "Beige Tuscany", file: img("35_BEIGE TUSCANY.png"), category: "Classic" },
  { id: 36, name: "Rubby Beige", file: img("36_RUBBY BEIGE.png"), category: "Rubby" },
  { id: 37, name: "Desert Grey", file: img("37_DESERT GREY.png"), category: "Sand Series" },
  { id: 38, name: "Rubby Ivory", file: img("38_RUBBY IVORY.png"), category: "Rubby" },
  { id: 39, name: "Odyssey Black", file: img("39_ODYSSEY BLACK.png"), category: "Odyssey" },
  { id: 40, name: "Alaska White", file: img("40_ALASKA WHITE.png"), category: "Alaska" },
  { id: 41, name: "Cake", file: img("41_CAKE.png"), category: "Classic" },
  { id: 43, name: "Cadbuary", file: img("43_CADBUARY.png"), category: "Classic" },
  { id: 44, name: "Camal Tan", file: img("44_CAMAL TAN.png"), category: "Classic" },
  { id: 45, name: "Coffee", file: img("45_COFFEE.png"), category: "Classic" },
  { id: 46, name: "Desert Brown", file: img("46_DESERT BROWN.png"), category: "Sand Series" },
  { id: 47, name: "Odyssey Ivory", file: img("47_ODYSSEY IVORY.png"), category: "Odyssey" },
  { id: 48, name: "Ice Stone", file: img("48_ICE STONE.png"), category: "Ice Series" },
  { id: 49, name: "Ice White", file: img("49_ICE WHITE.jpg"), category: "Ice Series" },
  { id: 50, name: "Mocca Creama", file: img("50_MOCCA CREAMA.png"), category: "Classic" },
  { id: 51, name: "Odyssey Grey II", file: img("51_ODYSSEY GREY.png"), category: "Odyssey" },
  { id: 52, name: "Odyssey Marun", file: img("52_ODYSSEY MARUN.png"), category: "Odyssey" },
  { id: 53, name: "Odyssey Sea-Sand", file: img("53_ODYSSEY SEA-SAND.png"), category: "Odyssey" },
  { id: 54, name: "Rubby Kesar", file: img("54_RUBBY KESAR.png"), category: "Rubby" },
  { id: 55, name: "Rubby Parrot Green", file: img("55_RUBBY PARROT GREEN.png"), category: "Rubby" },
  { id: 56, name: "Rubby Star Red", file: img("56_RUBBY STAR RED.png"), category: "Rubby" },
  { id: 57, name: "Rubby Blue", file: img("57_RUBBY BLUE.png"), category: "Rubby" },
  { id: 58, name: "Sand Ivory", file: img("58_SAND IVORY.png"), category: "Sand Series" },
  { id: 59, name: "Snow White", file: img("59_SNOW WHITE.png"), category: "Classic" },
  { id: 60, name: "Star Black", file: img("60_STAR BLACK.png"), category: "Special" },
  { id: 61, name: "Star Snow White", file: img("61_STAR SNOW WHITE.png"), category: "Special" },
  { id: 62, name: "Alaska Stone", file: img("62_ALASKA STONE.jpg"), category: "Alaska" },
  { id: 64, name: "Plomo", file: img("64_PLOMO.jpg"), category: "Classic" },
  { id: 65, name: "Unsui", file: img("65_UNSUI.jpg"), category: "Classic" },
  { id: 66, name: "Antiq", file: img("66_ANTIQ.png"), category: "Classic" },
  { id: 67, name: "Cafe", file: img("67_CAFE.png"), category: "Classic" },
  { id: 68, name: "Stone", file: img("68_STONE.png"), category: "Classic" },
  { id: 69, name: "Kutna", file: img("69_KUTNA.png"), category: "Classic" },
  { id: 70, name: "Lawa Stone", file: img("70_LAWA STONE.png"), category: "Special" },
  { id: 71, name: "Rubby Kashmiry", file: img("71_RUBBY KASHMIRY.png"), category: "Rubby" },
  { id: 72, name: "Royal Black", file: img("72_ROYAL BLACK.png"), category: "Royal" },
  { id: 73, name: "Royal Coffee", file: img("73_ROYAL COFFE.png"), category: "Royal" },
  { id: 74, name: "Royal Ivory", file: img("74_ROYAL IVORY.png"), category: "Royal" },
  { id: 75, name: "Onyx Aqua", file: img("75_ONYX AQUA.png"), category: "Onyx" },
  { id: 76, name: "Onyx Beige", file: img("76_ONYX BEIGE.png"), category: "Onyx" },
  { id: 77, name: "Onyx Gold", file: img("77_ONYX GOLD.png"), category: "Onyx" },
  { id: 78, name: "Onyx Green", file: img("78_ONYX GREEN.png"), category: "Onyx" },
  { id: 79, name: "Onyx Pista", file: img("79_ONYX PISTA.png"), category: "Onyx" },
  { id: 80, name: "Onyx Rose", file: img("80_ONYX ROSE.png"), category: "Onyx" },
  { id: 81, name: "Onyx Strawberry", file: img("81_ONYX STRWABERRY.png"), category: "Onyx" },
  { id: 82, name: "Onyx Vista", file: img("82_ONYX VISTA.png"), category: "Onyx" },
  { id: 83, name: "Metallic Black", file: img("83_METALIC BLACK.png"), category: "Metallic" },
  { id: 84, name: "Metallic White", file: img("84_METALIC WHITE.png"), category: "Metallic" },
  { id: 85, name: "Metallic Grey", file: img("85_METALIC GREY.png"), category: "Metallic" },
  { id: 86, name: "Metallic Orange", file: img("86_METALIC ORANGE.png"), category: "Metallic" },
  { id: 87, name: "Ivory Shell", file: img("87_IVORY SHELL.png"), category: "Shell" },
  { id: 88, name: "Grey Shell", file: img("88_GREY SHELL.png"), category: "Shell" },
  { id: 89, name: "Black Shell", file: img("89_BLACK SHELL.png"), category: "Shell" },
  { id: 90, name: "Crema Shell", file: img("90_CREMA SHELL.png"), category: "Shell" },
  { id: 91, name: "Golden Brown", file: img("LAST 7/Golden Brown.jpg"), category: "Latest" },
  { id: 92, name: "Golden Yellow", file: img("LAST 7/Golden Yellow.jpg"), category: "Latest" },
  { id: 93, name: "Shine Black", file: img("LAST 7/Shine Black.jpg"), category: "Latest" },
  { id: 94, name: "Shine Grey", file: img("LAST 7/Shine Grey.jpg"), category: "Latest" },
  { id: 95, name: "Silver Dark Grey", file: img("LAST 7/Silver Dark Grey.jpg"), category: "Latest" },
  { id: 96, name: "Silver Light Grey", file: img("LAST 7/Silver Light Grey.jpg"), category: "Latest" },
  { id: 97, name: "Silver Black", file: img("LAST 7/Silver Black.jpg"), category: "Latest" },
];

export const CATEGORIES = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

export const INTERIOR_IMAGES = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `${BASE}/interior/${i + 1}.png`,
  alt: `Safayar Ceramics Interior Application ${i + 1}`,
}));
