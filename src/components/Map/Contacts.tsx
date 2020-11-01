import {
  Mail,
  Facebook,
  Instagram,
  Phone,
  ExternalLink,
} from "@geist-ui/react-icons";

export function Contacts({ place }) {
  const formatLink = (s: string) => {
    if (s.includes("http")) return s;
    if (s.includes("@")) return "mailto:" + s;
    return "tel:+39" + s;
  };

  const checkLength = (obj, key, IconName) => {
    if (obj[key] && obj[key].length > 7) {
      return (
        <li style={{ marginInlineEnd: "1.5rem", listStyle: "none" }}>
          <a
            href={formatLink(obj[key])}
            target="_blank"
            rel="noreferrer nofollow"
          >
            <IconName size={24} color="#000" />
            {/* {key.replace("_", " ")} */}
          </a>
          <style jsx>{`
            .socialIcon {
              &: before;
            }
          `}</style>
        </li>
      );
    }
  };

  // const hasContacts = ({
  //   email,
  //   telefono,
  //   pagina_web,
  //   pagina_facebook,
  //   pagina_instagram,
  // }) => {
  //   return (
  //     email || telefono || pagina_web || pagina_facebook || pagina_instagram
  //   );
  // };

  return (
    <address>
      <ul style={{ display: "flex", listStyle: "none" }}>
        {checkLength(place, "email", Mail)}
        {checkLength(place, "telefono", Phone)}
        {checkLength(place, "pagina_web", ExternalLink)}
        {checkLength(place, "pagina_facebook", Facebook)}
        {checkLength(place, "pagina_instagram", Instagram)}
      </ul>
    </address>
  );
}
