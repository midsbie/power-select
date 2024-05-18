import { Props as BaseProps, Taglicious } from "@taglicious/react-bootstrap";
import classNames from "classnames";
import * as React from "react";

import { Option } from "@selectoroid/model";
import { Context } from "@selectoroid/react";

type OmitProps = "value" | "onInputChange" | "onRemove" | "onClear";

interface Props extends Omit<BaseProps, OmitProps> {
  ariaLabel?: string;
}

export function SelectoroidControl({
  ariaLabel,
  placeholder = "Please select...",
  ...props
}: Props) {
  const { isFocused, isMultiple, model, setFilter, onChange } = React.useContext(Context);
  const tags = model.getSelectedOptions();

  const handleInputChange = React.useCallback(
    (nextFilter: string) => {
      setFilter(nextFilter);
      return false;
    },
    [setFilter],
  );

  const handleRemove = React.useCallback(
    (option: Option) => {
      const [next, ok] = model.remove(option);
      if (ok) onChange(next, { type: "remove", option });
    },
    [model, onChange],
  );

  const handleClear = React.useCallback(
    (ev: React.MouseEvent | undefined) => {
      ev?.stopPropagation();
      onChange([], { type: "clear" });
    },
    [onChange],
  );

  let widget;
  if (isMultiple) {
    widget = (
      <Taglicious
        {...props}
        variant="select"
        focused={isFocused}
        aria-label={ariaLabel}
        placeholder={placeholder}
        value={tags}
        onInputChange={handleInputChange}
        onRemove={handleRemove}
        onClear={handleClear}
      />
    );
  } else {
    widget = (
      <div
        {...props}
        aria-label={ariaLabel}
        className={classNames("selectoroid-static form-select", { "focus-ring": isFocused })}
      >
        {tags[0].label ?? placeholder}
      </div>
    );
  }

  return <div className={"selectoroid-control"}>{widget}</div>;
}
