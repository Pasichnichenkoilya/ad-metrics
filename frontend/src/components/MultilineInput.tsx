import { useEffect, useRef } from "react";

export default function MultilineInput(props: {
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [props.value]);

  return (
    <textarea
      onChange={(e) => {
        if (props.onChange) props.onChange(e);
      }}
      ref={textareaRef}
      value={props.value}
      placeholder={props.placeholder}
      rows={1}
      className={props.className}
    />
  );
}
