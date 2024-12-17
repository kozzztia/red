import React from "react";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  // Map custom components to MDX elements
//   em: (props) => <em style={{ color: "red" }} {...props} />,
//   strong: (props) => <strong style={{ color: "green" }} {...props} />,
//   h2: (props) => <h2 style={{ color: "orange" }} {...props} />,
};

export function useMDXComponents(components: MDXComponents) {
  return { ...mdxComponents, ...components };
}
// npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx