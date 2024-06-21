import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSearchParams } from "react-router-dom";

export default function Searchbar() {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (value) {
      searchParams.set("name", value);
    } else {
      searchParams.delete("name");
    }
    setSearchParams(searchParams, { replace: true });
  }, [value, searchParams, setSearchParams]);

  return (
    <div className="mx-auto flex h-12 w-full max-w-xl overflow-hidden rounded-md bg-slate-700">
      <div className="flex grow border-slate-800">
        <input
          placeholder="Search by name..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="h-full w-full bg-transparent px-2 outline-none"
        />
        {value !== "" && (
          <button
            onClick={() => setValue("")}
            className="flex aspect-square h-full items-center justify-center text-xl duration-200 hover:bg-slate-900"
          >
            <RxCross2 />
          </button>
        )}
      </div>
    </div>
  );
}
