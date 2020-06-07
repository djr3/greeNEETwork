import { Div, Icon } from "atomize";

export function Contacts({ luogo }) {
  const formatLink = (s: string) => {
    if (s.includes("http")) return s;
    if (s.includes("@")) return "mailto:" + s;
    return "tel:+39" + s;
  };

  const checkLength = (obj, key, IconName) => {
    if (obj[key] && obj[key].length > 7) {
      const verticalAlign = {
        display: "inline-block",
        verticalAlign: "middle",
      };
      return (
        <li className={`icon-${IconName.toLowerCase()}`}>
          <a
            href={formatLink(obj[key])}
            target="_blank"
            rel="noreferrer"
            style={{ lineHeight: "1.5rem" }}
          >
            <Icon name={IconName} size="20px" style={verticalAlign} />
            <span style={verticalAlign}>{key.replace("_", " ")}</span>
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
        {checkLength(luogo, "email", "Email")}
        {checkLength(luogo, "telefono", "Info")}
        {checkLength(luogo, "pagina_web", "Link")}
        {checkLength(luogo, "pagina_facebook", "Facebook")}
        {checkLength(luogo, "pagina_instagram", "Instagram")}
      </Div>
    </Div>
  );
}
