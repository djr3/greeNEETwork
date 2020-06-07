export function DisplayFilters({ data, propName, propId, placeholder }) {
  const optionList = [
    <option key={`no${propName}`} value={""}>
      {`Qualsiasi ${placeholder}`}
    </option>,
  ];
  const elements = data[`${propName}`];
  if (!elements) {
    return optionList;
  } else {
    return elements.reduce(
      (acc, elem) =>
        acc.concat(
          <option key={elem.id} value={elem[`${propId}`]}>
            {elem.name}
          </option>
        ),
      optionList
    );
  }
}

export function formatLink(s: string) {
  if (s.includes("http")) return s;
  if (s.includes("@")) return "mailto:" + s;
  return "tel:" + s;
}
