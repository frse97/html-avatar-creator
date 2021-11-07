import {
  ChangeEvent,
  MutableRefObject,
  Ref,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  FaceFormType,
  IPlaygroundFace,
} from "../components/Playground/PlaygroundFace/PlaygroundFace.types";

type OnBackgroundChangeType = (
  ev: ChangeEvent<HTMLInputElement> | string
) => void;
type OnCurrentFormChangeType = (form: FaceFormType) => void;
type OnWidthChangeType = (ev: ChangeEvent<HTMLInputElement>) => void;
type OnHeightChangeType = (ev: ChangeEvent<HTMLInputElement>) => void;
type OnBorderLeftTopChangeType = (ev: ChangeEvent<HTMLInputElement>) => void;
type OnBorderRightTopChangeType = (ev: ChangeEvent<HTMLInputElement>) => void;
type OnBorderLeftBottomChangeType = (ev: ChangeEvent<HTMLInputElement>) => void;
type OnBorderRightBottomChangeType = (
  ev: ChangeEvent<HTMLInputElement>
) => void;

type FaceRefResult = [
  Readonly<MutableRefObject<string>>,
  OnBackgroundChangeType,
  Readonly<MutableRefObject<FaceFormType>>,
  OnCurrentFormChangeType,
  Readonly<MutableRefObject<string | number>>,
  OnWidthChangeType,
  Readonly<MutableRefObject<string | number>>,
  OnHeightChangeType,
  Readonly<MutableRefObject<string | number>>,
  OnBorderLeftTopChangeType,
  Readonly<MutableRefObject<string | number>>,
  OnBorderRightTopChangeType,
  Readonly<MutableRefObject<string | number>>,
  OnBorderLeftBottomChangeType,
  Readonly<MutableRefObject<string | number>>,
  OnBorderRightBottomChangeType
];

export const useFaceRef = (
  componentRef: Ref<IPlaygroundFace> | undefined,
  initialBackGround?: string
): FaceRefResult => {
  const [backgroundColor, setBackgroundColor] = useState<string>(
    initialBackGround ? initialBackGround : ""
  );
  const [currentForm, setCurrentForm] = useState<FaceFormType>(
    FaceFormType.Oval
  );
  const [currentWidth, setCurrentWidth] = useState<string | number>(160);
  const [currentHeight, setCurrentHeight] = useState<string | number>(180);
  const [currentLeftTopBorderRadius, setCurrentLeftTopBorderRadius] = useState<
    string | number
  >(100);
  const [currentRightTopBorderRadius, setCurrentRightTopBorderRadius] =
    useState<string | number>(100);
  const [currentLeftBottomBorderRadius, setCurrentLeftBottomBorderRadius] =
    useState<string | number>(100)
  const [currentRightBottomBorderRadius, setCurrentRightBorderBottomRadius] =
    useState<string | number>(100);

  const backgroundColorRef = useRef(backgroundColor);
  const currentFormRef = useRef(currentForm);
  const widthRef = useRef(currentWidth);
  const heightRef = useRef(currentHeight);
  const leftTopBorderRadiusRef = useRef(currentLeftTopBorderRadius);
  const rightTopBorderRadiusRef = useRef(currentRightTopBorderRadius);
  const leftBottomBorderRadiusRef = useRef(currentLeftBottomBorderRadius);
  const rightBottomBorderRadiusRef = useRef(currentRightBottomBorderRadius);

  backgroundColorRef.current = backgroundColor;
  currentFormRef.current = currentForm;
  widthRef.current = currentWidth;
  heightRef.current = currentHeight;
  leftTopBorderRadiusRef.current = currentLeftTopBorderRadius;
  rightTopBorderRadiusRef.current = currentRightTopBorderRadius;
  leftBottomBorderRadiusRef.current = currentLeftBottomBorderRadius;
  rightBottomBorderRadiusRef.current = currentRightBottomBorderRadius;

  const onBackgroundChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement> | string) => {
      setBackgroundColor(typeof ev === "string" ? ev : ev.target.value);
    },
    []
  );
  const onCurrentFormChange = useCallback((form: FaceFormType) => {
    setCurrentForm(form);
  }, []);
  const onWidthChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    console.log('change width', ev.target.value);
    setCurrentWidth(ev.target.value);
  }, []);
  const onHeighChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setCurrentHeight(ev.target.value);
  }, []);
  const onLeftTopBorderRadiusChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setCurrentLeftTopBorderRadius(ev.target.value);
    },
    []
  );
  const onRightTopBorderRadiusChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setCurrentRightTopBorderRadius(ev.target.value);
    },
    []
  );
  const onLeftBottomBorderRadiusChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setCurrentLeftBottomBorderRadius(ev.target.value);
    },
    []
  );
  const onRightBottomBorderRadiusChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setCurrentRightBorderBottomRadius(ev.target.value);
    },
    []
  );

  useImperativeHandle(
    componentRef,
    () => ({
      get backgroundColor() {
        return backgroundColorRef.current;
      },
      get currentForm() {
        return currentFormRef.current;
      },
      get width() {
        return widthRef.current;
      },
      get height() {
        return heightRef.current;
      },
      get borderRadiusLeftTop() {
        return leftTopBorderRadiusRef.current;
      },
      get borderRadiusRightTop() {
        return rightTopBorderRadiusRef.current;
      },
      get borderRadiusLeftBottom() {
        return leftBottomBorderRadiusRef.current;
      },
      get borderRadiusRightBottom() {
        return rightBottomBorderRadiusRef.current;
      },
      handleBackgroundColorChange: (ev: ChangeEvent<HTMLInputElement>) =>
        setBackgroundColor(ev.target.value),
      handleCurrentFormChange: (form: FaceFormType) => setCurrentForm(form),
      handleCurrentWidthChange: (ev: ChangeEvent<HTMLInputElement>) =>
        setCurrentWidth(ev.target.value),
    }),
    []
  );
  return [
    backgroundColorRef,
    onBackgroundChange,
    currentFormRef,
    onCurrentFormChange,
    widthRef,
    onWidthChange,
    heightRef,
    onHeighChange,
    leftTopBorderRadiusRef,
    onLeftTopBorderRadiusChange,
    rightTopBorderRadiusRef,
    onRightTopBorderRadiusChange,
    leftBottomBorderRadiusRef,
    onLeftBottomBorderRadiusChange,
    rightBottomBorderRadiusRef,
    onRightBottomBorderRadiusChange,
  ];
};
