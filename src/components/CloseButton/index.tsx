import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
    return(
        <Popover.Button className="top-5 right5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulário">
            <X weight="bold" className="x-4 h-4"/>
        </Popover.Button>
    );
}