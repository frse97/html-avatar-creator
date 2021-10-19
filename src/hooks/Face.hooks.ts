import { ChangeEvent, MutableRefObject, Ref, useCallback, useImperativeHandle, useRef, useState } from "react";
import { FaceFormType, IPlaygroundFace } from "../components/Playground/PlaygroundFace/PlaygroundFace.types";

type OnBackgroundChangeType = (ev: ChangeEvent<HTMLInputElement> | string) => void;
type OnCurrentFormChangeType = (form: FaceFormType) => void;

type FaceRefResult = [Readonly<MutableRefObject<string>>, OnBackgroundChangeType, Readonly<MutableRefObject<FaceFormType>>, OnCurrentFormChangeType];

export const useFaceRef = (componentRef: Ref<IPlaygroundFace> | undefined, initialBackGround?: string): FaceRefResult  => {
  const [backgroundColor, setBackgroundColor] = useState<string>(initialBackGround ? initialBackGround : '');
  const [currentForm, setCurrentForm] = useState<FaceFormType>(FaceFormType.Oval);

  const backgroundColorRef = useRef(backgroundColor);
  const currentFormRef = useRef(currentForm);
  
  backgroundColorRef.current = backgroundColor;
  currentFormRef.current = currentForm;

  const onBackgroundChange = useCallback((ev: ChangeEvent<HTMLInputElement> | string) => {
    setBackgroundColor(typeof ev === 'string' ? ev : ev.target.value);
  }, []);
  const onCurrentFormChange = useCallback((form: FaceFormType) => {
    setCurrentForm(form);
  }, []);

  useImperativeHandle(
    componentRef,
    () => ({
      get backgroundColor() {
        return backgroundColorRef.current;
      },
      get currentForm() {
        return currentFormRef.current;
      },
      handleBackgroundColorChange: (ev: ChangeEvent<HTMLInputElement>) => setBackgroundColor(ev.target.value),
      handleCurrentFormChange: (form: FaceFormType) => setCurrentForm(form),
    }),
    []
  );
  return [backgroundColorRef, onBackgroundChange, currentFormRef, onCurrentFormChange];
}