import OutsideClickHandler from "./OutsideClickHandler";

export default function ConfirmDialog(props: {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  setOpen: (open: boolean) => void;
  open: boolean;
}) {
  return (
    props.open && (
      <div className="absolute left-0 top-0 flex h-dvh w-dvw items-center justify-center bg-black/50">
        <OutsideClickHandler
          onClickOutside={() => {
            props.onCancel();
            props.setOpen(false);
          }}
        >
          <div className="flex flex-col items-center space-y-2 rounded-md bg-slate-800 p-5">
            <p>{props.title}</p>
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  props.onCancel();
                  props.setOpen(false);
                }}
                className="rounded-md p-1 px-3 hover:bg-slate-700"
              >
                No
              </button>
              <button
                onClick={() => {
                  props.onConfirm();
                  props.setOpen(false);
                }}
                className="rounded-md p-1 px-3 hover:bg-slate-700"
              >
                Yes
              </button>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    )
  );
}
