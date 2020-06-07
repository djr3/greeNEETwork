import { useStyletron } from "styletron-react";
import { Anchor, Div, Label, Checkbox, Radiobox } from "atomize";
import Select from "react-select";

type Filter = {
  id: number;
  nome: string;
  slug: string;
  // label: string;
  // nome: string;
};

interface FilterProps {
  name?: string;
  // data: object;
  filters: Filter[];
  type: "select" | "checkbox" | "radio";
  onChange: (property, value) => void;
}

export const Filter = ({ name, filters, type, onChange }: FilterProps) => {
  const [css] = useStyletron();

  const changeFilterState = (property, value) => {
    if (onChange) {
      onChange(property, value);
    }
  };

  const menuList = (
    <Div p={{ x: "1rem", y: "0.25rem" }} rounded="0">
      {/* <DropdownMenu> */}
      {filters.map((filter) => (
        <Anchor key={filter.slug} d="block" p={{ y: "0.25rem" }}>
          {filter.nome}
        </Anchor>
      ))}
      {/* </DropdownMenu> */}
    </Div>
  );

  // function showFilters(type) {
  //   switch (type) {
  //     case "checkbox":
  //       return filters.map((filter) => (
  //         <Label key={filter.id}>
  //           <Checkbox onChange={changeFilterState} checked={false} />
  //           {filter.nome}
  //         </Label>
  //       ));

  //     case "radio":
  //       return filters.map((filter) => (
  //         <Label key={filter.id}>
  //           <Radiobox onChange={changeFilterState} />
  //           {filter.nome}
  //         </Label>
  //       ));

  //     case "select":
  //       return (
  //         <Label key={name}>
  //           <Dropdown targetHover menu={menuList}>
  //             {name}
  //           </Dropdown>
  //         </Label>
  //       );

  //     default:
  //       return <div>Nothing to show</div>;
  //   }
  // }

  return (
    <div
      className={css({
        width: "100%",
        // height: "100%",
        marginBottom: ".5rem",
        // zIndex: 100,
        // backgroundColor: "#799d43",
      })}
    >
      {type === "checkbox" &&
        filters.map((filter) => (
          <Label key={filter.id}>
            <Checkbox
              onChange={(e) => changeFilterState(filter.id, e.target.value)}
              checked={false}
            />
            {filter.nome}
          </Label>
        ))}
      {type === "radio" &&
        filters.map((filter) => (
          <Label key={filter.id}>
            <Radiobox
              onChange={(e) => changeFilterState(filter.id, e.target.value)}
            />
            {filter.nome}
          </Label>
        ))}
      {type === "select" && (
        <Select
          key={name}
          isMulti
          name={name}
          styles={{
            option: (base, state) => ({
              ...base,
              fontSize: ".8rem",
              lineHeight: "1.25em",
            }),
            placeholder: (base, state) => ({
              ...base,
              fontSize: ".75rem",
            }),
            multiValue: (base, state) => ({
              ...base,
              maxWidth: "100px",
            }),
            // indicatorContainer: (base, state) => ({
            //   ...base,
            //   zIndex: 10,
            // }),
            // valueContainer: (base, state) => ({
            //   ...base,
            //   zIndex: 10,
            // }),
          }}
          theme={(theme) => {
            return {
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: "black",
              },
              spacing: {
                // ...theme.spacing,
                baseUnit: 2,
                controlHeight: 32,
                menuGutter: 4,
              },
            };
          }}
          onChange={(a) => {
            changeFilterState(
              `sel${name}`,
              //@ts-ignore
              a !== null ? a.map(({ value }) => value) : [""]
            );
          }}
          options={filters.map((filter) => ({
            value: filter.id,
            label: filter.nome,
          }))}
          placeholder={name}
          // maxMenuHeight={150}
        />
      )}
      {/**
       * filters.map((filter) => (
        <div key={filter.slug}>
          <Label htmlFor={filter.slug}>
            {type === "checkbox" && <Checkbox onChange={changeFilterState} />}
            {type === "radio" && <Radiobox onChange={changeFilterState} />}
            {filter.nome}
            <select
              id={filter.slug}
              placeholder={`Seleziona ${filter.nome}`}
              onInput={(e) =>
                changeFilterState(filter.slug, e.currentTarget.value)
              }
            >
              <DisplayFilters
                propId={filter.slug}
                propName={filter.nome}
                placeholder={filter.nome}
              />
            </select>
          </Label>
        </div>
      )
       */}
    </div>
  );
};
