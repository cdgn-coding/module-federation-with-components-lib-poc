// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5HtheWr3yMMCoFXwAWsWcN
// Component: 3D_qFPix-K0
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Select__Option from "../../Select__Option"; // plasmic-import: vMCHMNk5Xu9/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: 5HtheWr3yMMCoFXwAWsWcN/projectcss
import * as sty from "./PlasmicSelect__OptionGroup.module.css"; // plasmic-import: 3D_qFPix-K0/css
import SUPER__PlasmicSelect from "./PlasmicSelect"; // plasmic-import: 4nZ-1b6hTn9/render

export const PlasmicSelect__OptionGroup__VariantProps = new Array(
  "noTitle",
  "isFirst"
);

export const PlasmicSelect__OptionGroup__ArgProps = new Array(
  "children",
  "title"
);

function PlasmicSelect__OptionGroup__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const superContexts = {
    Select: React.useContext(SUPER__PlasmicSelect.Context)
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {(hasVariant(variants, "isFirst", "isFirst") ? false : true) ? (
        <div
          data-plasmic-name={"separator"}
          data-plasmic-override={overrides.separator}
          className={classNames(defaultcss.all, sty.separator, {
            [sty.separator__isFirst]: hasVariant(
              variants,
              "isFirst",
              "isFirst"
            ),

            [sty.separator__noTitle]: hasVariant(variants, "noTitle", "noTitle")
          })}
        />
      ) : null}
      {(hasVariant(variants, "noTitle", "noTitle") ? false : true) ? (
        <div
          data-plasmic-name={"titleContainer"}
          data-plasmic-override={overrides.titleContainer}
          className={classNames(defaultcss.all, sty.titleContainer, {
            [sty.titleContainer__isFirst]: hasVariant(
              variants,
              "isFirst",
              "isFirst"
            ),

            [sty.titleContainer__noTitle]: hasVariant(
              variants,
              "noTitle",
              "noTitle"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Group Name",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"optionsContainer"}
        data-plasmic-override={overrides.optionsContainer}
        className={classNames(defaultcss.all, sty.optionsContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <Select__Option
                className={classNames("__wab_instance", sty.option__x7Gj)}
              />

              <Select__Option
                className={classNames("__wab_instance", sty.option__dhfdX)}
              />
            </React.Fragment>
          ),

          value: args.children
        })}
      </div>
    </div>
  );
}

function useBehavior(props) {
  return pp.useSelectOptionGroup(PlasmicSelect__OptionGroup, props, {
    noTitleVariant: { group: "noTitle", variant: "noTitle" },
    isFirstVariant: { group: "isFirst", variant: "isFirst" },
    optionsSlot: "children",
    titleSlot: "title",
    root: "root",
    separator: "separator",
    titleContainer: "titleContainer",
    optionsContainer: "optionsContainer"
  });
}

const PlasmicDescendants = {
  root: ["root", "separator", "titleContainer", "optionsContainer"],
  separator: ["separator"],
  titleContainer: ["titleContainer"],
  optionsContainer: ["optionsContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSelect__OptionGroup__ArgProps,
      internalVariantPropNames: PlasmicSelect__OptionGroup__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSelect__OptionGroup__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect__OptionGroup";
  } else {
    func.displayName = `PlasmicSelect__OptionGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect__OptionGroup = Object.assign(
  // Top-level PlasmicSelect__OptionGroup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    separator: makeNodeComponent("separator"),
    titleContainer: makeNodeComponent("titleContainer"),
    optionsContainer: makeNodeComponent("optionsContainer"),
    // Metadata about props expected for PlasmicSelect__OptionGroup
    internalVariantProps: PlasmicSelect__OptionGroup__VariantProps,
    internalArgProps: PlasmicSelect__OptionGroup__ArgProps,
    useBehavior
  }
);

export default PlasmicSelect__OptionGroup;
/* prettier-ignore-end */