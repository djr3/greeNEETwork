//@ts-ignore
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const isProduction = process.env.NODE_ENV.toLowerCase() === "production";

export function formatLink(s: string) {
  if (s.includes("http")) return s;
  if (s.includes("@")) return "mailto:" + s;
  if (s.includes("+39")) return "tel:" + s;
  else return "tel:+39" + s;
}

export const times = (x) => (f) => {
  if (x > 0) {
    f();
    times(x - 1)(f);
  }
};

export const wordSplit = (
  text: string,
  words: number = 30,
  separator: string = " "
): string => {
  return text && text.split(separator).slice(0, words).join(separator) + "...";
};

export const getAddress = (address) => {
  return [
    address.road,
    address.suburb,
    address.city,
    address.state,
    address.country,
  ]
    .filter((i) => i != undefined)
    .join(", ");
};

export const checkLength = (string) =>
  string && string.length > 7 ? true : false;

export const makeMenu = (obj): { name: string; link: string }[] => {
  const menu = [];

  if (checkLength(obj.telefono))
    menu.push({ name: "Phone", link: formatLink(obj.telefono) });
  if (checkLength(obj.email))
    menu.push({ name: "Mail", link: formatLink(obj.email) });
  if (checkLength(obj.pagina_web))
    menu.push({ name: "Globe", link: formatLink(obj.pagina_web) });
  if (checkLength(obj.pagina_facebook))
    menu.push({ name: "Facebook", link: formatLink(obj.pagina_facebook) });
  if (checkLength(obj.pagina_instagram))
    menu.push({ name: "Instagram", link: formatLink(obj.pagina_instagram) });

  return menu;
};

export const getImageHashes = (place) => {
  if (place.galleria_immagini && place.galleria_immagini.length > 0)
    return place.galleria_immagini.map(
      ({ directus_file: { private_hash } }) => {
        if (private_hash) return private_hash;
        else return;
      }
    );
  else return [];
};

export const slugify = (string) => {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};
