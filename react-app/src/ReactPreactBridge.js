import * as Preact from "preact";
import { h } from "preact";
import { useEffect, useRef } from "react";
import { App as Component } from "test-widget";
import * as PreactHooks from "preact/hooks";
import { createIsland } from "preact-island";

const PreactBenchmark = () => {
  PreactHooks.useEffect(() => {
    console.log("hello");
  }, []);
  return h("div", { children: "preact" });
};

export function ReactPreactBridge() {
  // const h = React.createElement;

  // Get the raw DOM node to render into
  const ref = useRef(null);
  // useEffect(() => {
  //   console.log("ref.current", ref.current);
  //   if (ref.current) {
  //     // Can't use two different JSX constructors in
  //     // the same file, so we're writing the JSX output
  //     // manually. (h is the same as createElement)
  //     Preact.render(h(Component), ref.current);
  //   }

  //   return () => {
  //     // Clear Preact rendered tree when the parent React
  //     // component unmounts
  // Preact.render(null, ref.current);
  //   };
  // }, [ref.current]);

  useEffect(() => {
    // if (ref.current) Preact.render(h(Component), ref.current);
    const island = createIsland(PreactBenchmark);
    island.render({
      selector: "#anchor",
    });
    return () => {
      // Clear Preact rendered tree when the parent React
      // component unmounts
      // Preact.render(null, ref.current);
    };
    // Preact.render(h(PreactBenchmark), ref.current);
  }, [ref.current]);

  // return <Component />;
  return <div ref={ref} id="anchor" />;
  // return <PreactBenchmark />;
}
