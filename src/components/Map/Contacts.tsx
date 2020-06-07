import { Div, Icon } from "atomize";

export function Contacts({ place }) {
  const formatLink = (s: string) => {
    if (s.includes("http")) return s;
    if (s.includes("@")) return "mailto:" + s;
    return "tel:+39" + s;
  };

  const checkLength = (obj, key, IconName) => {
    if (obj[key] && obj[key].length > 7) {
      return (
        <li className={`icon-${IconName.toLowerCase()}`}>
          <a href={formatLink(obj[key])} target="_blank" rel="noreferrer">
            <Icon name={IconName} size={16} /> {key.replace("_", " ")}
          </a>
        </li>
      );
    }
  };

  const hasContacts = ({
    email,
    telefono,
    pagina_web,
    pagina_facebook,
    pagina_instagram,
  }) => {
    return new Boolean(
      email || telefono || pagina_web || pagina_facebook || pagina_instagram
    );
  };

  return (
    <Div tag="address">
      <Div tag="ul" d="flex">
        {checkLength(place, "email", "Email")}
        {checkLength(place, "telefono", "Info")}
        {checkLength(place, "pagina_web", "Link")}
        {checkLength(place, "pagina_facebook", "Facebook")}
        {checkLength(place, "pagina_instagram", "Instagram")}
      </Div>
    </Div>
  );
}
