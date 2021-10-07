import React from "react";
import { IIcon } from "./Icon.types";
import "./Icon.scss";
import Face from "./components/Face";

/**
 * API of nested icon types.
 */
interface IIconNested {
  /**
   * A face icon.
   */
  Face: typeof Face;
}

const Icon: React.FC<IIcon> & IIconNested = ((props) => (
  <div className="hac-icon">{props.children}</div>
)) as React.FC<IIcon> & IIconNested;

Icon.displayName = "Icon";

Icon.Face = Face;

export default Icon;
