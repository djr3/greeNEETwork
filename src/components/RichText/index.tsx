import React from "react";
import HTMLParser, {
  // processNodes,
  convertNodeToElement,
  // htmlparser2,
  Options,
} from "react-html-parser";
// import { Document, BLOCKS, MARKS } from "@contentful/rich-text-types";
// import { Blockquote } from "../Blockquote";
// import { Code } from "../Code";
import { Text } from "@geist-ui/react";
// const Code = dynamic(() => import("../Code").then(r => r.Code));

import styles from "./index.module.scss";

export const Blockquote: React.FC = (props) => (
  <Text blockquote className={styles.bq}>
    {props.children}
  </Text>
);

const params: Options = {
  transform: (node, index) => {
    if (node.type === "tag" && node.name === "p") {
      return (
        <Text
          p
          key={`p_${index}`}
          style={{ margin: "1.25rem 0", paddingBottom: "1em" }}
        >
          {node.children &&
            node.children.map((child, idx, a) =>
              convertNodeToElement(child, idx, null)
            )}
        </Text>
      );
    }
    if (node.type === "tag" && node.name === "blockquote") {
      return (
        <Blockquote>
          {node.children &&
            node.children.map((child, idx, a) =>
              convertNodeToElement(child, idx, null)
            )}
        </Blockquote>
      );
    }
    if (node.type === "tag" && ["h2", "h3", "h4", "h5"].includes(node.name)) {
      return (
        <Text key={index} {...node.name} textSize={node.name}>
          {node.children &&
            node.children.map((child, idx) =>
              convertNodeToElement(child, idx, null)
            )}
        </Text>
      );
    }
  },
  // decodeEntities: true,
  // preprocessNodes: (nodes) => {

  // }
  //   renderMark: {
  //     [MARKS.CODE]: (code) => <Code>{code}</Code>,
  //   },
  //   renderNode: {
  //     [BLOCKS.HEADING_1]: (_node, children) => (
  //       <Text tag="h1" size="h1">
  //         {children}
  //       </Text>
  //     ),
  //     [BLOCKS.HEADING_2]: (_node, children) => (
  //       <Text tag="h2" size="h2">
  //         {children}
  //       </Text>
  //     ),
  //     [BLOCKS.HEADING_3]: (_node, children) => (
  //       <Text tag="h3" size="h3">
  //         {children}
  //       </Text>
  //     ),
  //     [BLOCKS.PARAGRAPH]: (_node, children) =>
  //       typeof children![0] === "string" ? (
  //         <Text m={{ t: 0, b: "1.6rem" }}>{children}</Text>
  //       ) : (
  //         children
  //       ),
  //     [BLOCKS.QUOTE]: (_node, children) => (
  //       // typeof children![0] === "string" ? (
  //       <Blockquote>{children}</Blockquote>
  //       // ) : (
  //       //   children
  //     ),
  //   },
};

interface RichTextProps {
  text: string;
  options?: Options;
}
export const RichText: React.FC<RichTextProps> = (props) => {
  const { text, options } = props;
  return <> {HTMLParser(text, { ...params, ...options })} </>;
};
