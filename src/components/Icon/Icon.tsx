import React from "react";
import { IIcon } from "./Icon.types";
import "./Icon.scss";
import Face from "./components/Face";
import Eyes from "./components/Eyes";
import Hair from "./components/Hair";
import Nose from "./components/Nose";
import Mouth from "./components/Mouth";
import Body from "./components/Body";
import Accessory from "./components/Accessory";

/**
 * API of nested icon types.
 */
interface IIconNested {
  /**
   * A face icon.
   */
  Face: typeof Face;
  /**
   * An eye icon.
   */
  Eyes: typeof Eyes;
  /**
   * A hair icon.
   */
  Hair: typeof Hair;
  /**
   * A nose icon.
   */
  Nose: typeof Nose;
  /**
   * A mouth icon.
   */
  Mouth: typeof Mouth;
  /**
   * a body icon.
   */
  Body: typeof Body;
  /**
   * An accessory icon.
   */
  Accessory: typeof Accessory;
}

const Icon: React.FC<IIcon> & IIconNested = ((props) => (
  <div className="hac-icon">{props.children}</div>
)) as React.FC<IIcon> & IIconNested;

Icon.displayName = "Icon";

Icon.Accessory = Accessory;
Icon.Body = Body;
Icon.Eyes = Eyes;
Icon.Face = Face;
Icon.Hair = Hair;
Icon.Mouth = Mouth;
Icon.Nose = Nose;

export default Icon;
