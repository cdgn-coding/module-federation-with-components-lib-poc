import * as React from "react";
import { PlasmicSelect } from "./plasmic/blank_project/PlasmicSelect";
import Option from "./Select__Option";
import OptionGroup from "./Select__OptionGroup";

function Select_(props, ref) {
  const { plasmicProps, state } = PlasmicSelect.useBehavior(props, ref);
  return <PlasmicSelect {...plasmicProps} />;
}

const Select = React.forwardRef(Select_);

export default Object.assign(Select, {
  Option,
  OptionGroup,
  __plumeType: "select"
});
