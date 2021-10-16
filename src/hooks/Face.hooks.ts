import { ChangeEvent, MutableRefObject, Ref, useCallback, useImperativeHandle, useRef, useState } from "react";
import { IPlaygroundFace } from "../components/Playground/PlaygroundFace/PlaygroundFace";

type OnBackgroundChangeType = (ev: ChangeEvent<HTMLInputElement> | string) => void;

export const useFaceRef = (componentRef: Ref<IPlaygroundFace> | undefined, initialBackGround?: string): [Readonly<MutableRefObject<string>>, OnBackgroundChangeType] => {
  const [backgroundColor, setBackgroundColor] = useState(initialBackGround ? initialBackGround : '');
  const backgroundColorRef = useRef(backgroundColor);
  backgroundColorRef.current = backgroundColor;
  const onBackgroundChange = useCallback((ev: ChangeEvent<HTMLInputElement> | string) => {
    setBackgroundColor(typeof ev === 'string' ? ev : ev.target.value);
  }, []);

  useImperativeHandle(
    componentRef,
    () => ({
      handleBackgroundColorChange: (ev: ChangeEvent<HTMLInputElement>) => setBackgroundColor(ev.target.value),
      get backgroundColor() {
        return backgroundColorRef.current;
      }
    }),
    []
  );
  return [backgroundColorRef, onBackgroundChange];
}