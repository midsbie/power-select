import { Option } from "@selectoroid/model";
import * as React from "react";

interface Props {
  expanded?: boolean;
  option: Option;
}

export function ExpandedIcon({ expanded, option }: Props) {
  if (!expanded || option.children == null || option.children.length < 1) return null;
  return <span className={`rcs-expanded-icon ${expanded ? "expanded" : ""}`}>&gt;</span>;
}
