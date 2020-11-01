import { Select, Checkbox, Radio } from "@geist-ui/react";

type Filter = {
  id: string;
  nome: string;
  slug: string;
};

interface FilterProps {
  name?: string;
  filters: Filter[];
  type: "select" | "checkbox" | "radio";
  onChange: (property, value) => void;
}

export const Filter = ({
  name,
  filters,
  type,
  onChange,
  ...rest
}: FilterProps) => {
  const changeFilterState = (property, value) => {
    if (onChange) {
      onChange(property, value);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        marginBottom: ".25rem",
      }}
    >
      {type === "checkbox" && (
        <Checkbox.Group
          value={[]}
          onChange={(e) => changeFilterState(filters[0].id, e)}
        >
          {filters.map((filter) => (
            <Checkbox key={filter.id} value={filter.slug}>
              {filter.nome}
            </Checkbox>
          ))}
        </Checkbox.Group>
      )}
      {type === "radio" && (
        <Radio.Group
          value={""}
          onChange={(e) => changeFilterState(filters[0].id, e)}
        >
          {filters.map((filter) => (
            <Radio key={filter.id} value={filter.slug}>
              {filter.nome}
            </Radio>
          ))}
        </Radio.Group>
      )}
      {type === "select" && (
        <Select
          size="mini"
          key={name}
          multiple
          placeholder={name}
          width="100%"
          onChange={(a) => {
            changeFilterState(
              `sel${name}`,
              // Returns an empty array, so that all values return true
              a
              // Returns an empty string when no filters are selected
              // so that the map doesn't show any result
              // a.length !== 0 ? a : [""]
            );
          }}
        >
          {filters.map((filter) => (
            <Select.Option key={filter.id} value={filter.id}>
              {filter.nome}
            </Select.Option>
          ))}
        </Select>
      )}
    </div>
  );
};
