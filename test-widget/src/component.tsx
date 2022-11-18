import { h, VNode } from "preact";
import { useEffect } from "preact/hooks";
// import { useForm, FormProvider } from "react-hook-form";
import "./style.css";

interface Props {
  color?: string;
}

export const App = (props: Props): VNode => {
  useEffect(() => {
    console.log("helloo");
  }, []);
  return <div>preact</div>;
  // const formMethods = useForm({
  //   mode: "onChange",
  // });
  // return (
  //   <FormProvider {...formMethods}>
  //     <form>
  //       <h1 style={{ color: props.color }}>Hello, World!</h1>
  //     </form>
  //   </FormProvider>
  // );
};

export default App;
