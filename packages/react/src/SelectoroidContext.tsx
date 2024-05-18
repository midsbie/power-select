import * as React from "react";

import { constructModel } from "@selectoroid/model";

import { Context, ContextProps, ContextValue } from "./context";
import { filterByLabelSubstring } from "./functions";
import {
  defaultRenderOption,
  defaultRenderOptionContainer,
  defaultRenderOptionList,
} from "./rendering";

interface Props extends React.PropsWithChildren<ContextProps> {}

export function SelectoroidContext({
  multiple: isMultiple = false,
  options,
  value,
  onChange,
  renderOptionContainer = defaultRenderOptionContainer,
  renderOptionList = defaultRenderOptionList,
  renderOption = defaultRenderOption,
  filterFunction = filterByLabelSubstring,
  children,
}: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const setOpen = React.useCallback((next: boolean = true) => setIsOpen(next), []);
  const setFocused = React.useCallback((next: boolean = true) => {
    setIsFocused(next);
  }, []);

  React.useEffect(() => {
    if (!isFocused) setIsOpen(false);
  }, [isFocused]);

  const ctx = React.useMemo<ContextValue>(() => {
    const model = constructModel({
      isMultiple,
      options,
      value,
      filterFunc: filterFunction(filter.trim()),
    });

    return {
      model,
      isMultiple,
      setFilter,
      onChange,
      isOpen,
      setOpen,
      toggleOpen: () => setIsOpen((o) => !o),
      isFocused,
      setFocused,
      renderOptionContainer,
      renderOptionList,
      renderOption,
    };
  }, [
    isMultiple,
    options,
    value,
    filter,
    filterFunction,
    onChange,
    isOpen,
    setOpen,
    isFocused,
    setFocused,
    renderOptionContainer,
    renderOptionList,
    renderOption,
  ]);

  return <Context.Provider value={ctx}>{children}</Context.Provider>;
}
