import { Div, Icon } from "atomize";

export function Contacts({ contacts }) {
  const formatLink = (s: string) => {
    if (s.includes("http")) return s;
    if (s.includes("@")) return "mailto:" + s;
    return "tel:" + s;
  };

  const checkLength = (obj, key, IconName) => {
    if (obj[key] && obj[key].length > 7) {
      return (
        <li className={`icon-${IconName.toLowerCase()}`}>
          <a href={formatLink(obj[key])} target="_blank" rel="noreferrer">
            <Icon name={IconName} />
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

  if (!hasContacts(contacts)) return null;

  return (
    <Div tag="address">
      <Div tag="ul" d="flex">
        {checkLength(contacts, "email", "Email")}
        {checkLength(contacts, "telefono", "Info")}
        {checkLength(contacts, "pagina_web", "Link")}
        {checkLength(contacts, "pagina_facebook", "Facebook")}
        {checkLength(contacts, "pagina_instagram", "Instagram")}
      </Div>
    </Div>
  );
}
