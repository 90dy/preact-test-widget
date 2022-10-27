import { h, JSX } from "preact";
import { FC, useCallback } from "react";
import { useForm, FormProvider, useController } from "react-hook-form";
import "./style.css";

interface Props {
  color?: string;
}

export const App: FC<Props> = (props): JSX.Element => {
  const formMethods = useForm({
    mode: "onChange",
  });
  return (
    <FormProvider {...formMethods}>
      <form>
        <h1 style={{ color: props.color }}>Hello, World!</h1>
      </form>
    </FormProvider>
  );
};

export default App;
