import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import { useRouter } from 'next/router'

export default function Modal({ children }: any) {
    let [isOpen, setIsOpen] = useState(true)
    const router = useRouter()

    return (
        <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            <Dialog
                static
                open={isOpen}
                onClose={() => { router.push('/projects'); setIsOpen(false); }}
                className="fixed inset-0 z-10 flex items-center justify-center"
            >
                <Dialog.Overlay
                    className="fixed inset-0 bg-black/75"
                />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <div className="flex min-h-full items-center justify-center">

                        <Dialog.Panel className="mx-auto max-w-5xl rounded bg-white">

                            {/* <div className="relative text-text1 items-center justify-center w-1/2"> */}
                            {/* <div className="relative text-text1 max-w-5xl sm:mx-auto my-24 m-10 md:my-24 p-10 bg-[#290066] h-[80vh] rounded-3xl"> */}
                            <div className="">
                                
                                {children}
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}