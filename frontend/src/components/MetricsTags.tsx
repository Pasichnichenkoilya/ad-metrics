import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import OutsideClickHandler from "./OutsideClickHandler";
import { cn } from "../lib/utils";
import { toast } from "react-toastify";

export default function MetricsTags(props: {
  tags: string[];
  onTagCreate: (tag: string) => void;
  onTagDelete: (tag: string) => void;
}) {
  const [creating, setCreating] = useState(false);
  const [tagName, setTagName] = useState("");
  const [error, setEror] = useState(false);

  const onTagCreation = () => {
    setEror(props.tags.includes(tagName));

    if (props.tags.includes(tagName)) {
      toast.error("Tag names must be unique");
      return;
    }

    setCreating(false);
    if (tagName.trim() !== "") {
      props.onTagCreate(tagName.trim());
    }

    setTagName("");
  };

  return (
    <div className="flex flex-wrap gap-2 rounded-md border-2 p-2">
      {!creating && (
        <button
          onClick={() => {
            setCreating(true);
          }}
          type="button"
          className="min-h-8 rounded-md bg-slate-700 px-2 hover:bg-slate-600"
        >
          <FaPlus />
        </button>
      )}
      {creating && (
        <OutsideClickHandler onClickOutside={onTagCreation}>
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") onTagCreation();
            }}
            autoFocus
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
            type="text"
            placeholder="tag name"
            className={cn(
              "w-48 rounded-md bg-slate-700 p-1 px-2 outline-none",
              {
                "outline-2 outline-red-500": error,
              },
            )}
          />
        </OutsideClickHandler>
      )}
      {props.tags.map((tag) => (
        <button
          onClick={() => props.onTagDelete(tag)}
          key={tag}
          className="rounded-md bg-slate-700 p-1 px-3 hover:bg-slate-600"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
