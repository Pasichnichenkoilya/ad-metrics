import { ReactNode, useEffect, useRef } from "react";

export default function OutsideClickHandler(props: {
  onClickOutside: () => void;
  className?: string;
  children: ReactNode;
}) {
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (wrapper.current === null || e.target === null || e.button !== 0)
        return;

      const target = e.target as HTMLElement;
      const { clientWidth, clientHeight, offsetWidth, offsetHeight } = target;
      const { offsetX, offsetY } = e;

      const clickedOnVerticalScrollbar =
        offsetX >= clientWidth && offsetX <= offsetWidth;
      const clickedOnHorizontalScrollbar =
        offsetY >= clientHeight && offsetY <= offsetHeight;

      if (clickedOnVerticalScrollbar || clickedOnHorizontalScrollbar) return;

      if (!wrapper.current.contains(e.target as Node)) {
        props.onClickOutside();
      }
    };

    window.addEventListener("mousedown", onMouseDown);
    return () => window.removeEventListener("mousedown", onMouseDown);
  }, [props]);

  return (
    <div className={props.className} ref={wrapper}>
      {props.children}
    </div>
  );
}
