import PageTransition from "components/PageTransition";

export default function NotFoundPage() {
    return (
        // <div className="flex h-[75vh] items-center justify-center">
        <PageTransition>
            <div className="">
                {/* It's all connected.  Except, you're not connected to the right page.  Can you check the URL? */}
                <p>Hi there, you seem to be lost.  Can you double check the URL?</p>
                <br />
                <p>Is something broken?  Feel free to open up an <a className="text-red1 hover:text-yellow1 underline underline-offset-2 transition-all" href="https://github.com/stvnbash/sbashnet/issues/new" target="_blank" rel="noreferrer">issue on GitHub</a>!</p>
            </div>
        </PageTransition>
    )
}
