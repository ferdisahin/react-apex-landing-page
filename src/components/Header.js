import logo from "../logo.svg"
import Button from "./Button"

function Header() {
    return (
        <header className="py-5">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-2">
                        <a href="/">
                            <img src={logo} alt="Apex" />
                        </a>
                    </div>
                    <div className="col-span-7">
                        <nav className="flex items-center justify-center space-x-5">
                            <a href="/" className="font-medium text-zinc-700 hover:text-black transition-all">Demos</a>
                            <a href="/" className="font-medium text-zinc-700 hover:text-black transition-all">About</a>
                            <a href="/" className="font-medium text-zinc-700 hover:text-black transition-all">Blog</a>
                            <a href="/" className="font-medium text-zinc-700 hover:text-black transition-all">Pages</a>
                            <a href="/" className="font-medium text-zinc-700 hover:text-black transition-all">Contact</a>
                        </nav>
                    </div>
                    <div className="col-span-3 flex items-center space-x-5 justify-end">
                        <a href="/" className="font-medium text-zinc-700 hover:text-black transition-all">Login</a>
                        {/* <a href="/" className="bg-orange-500 hover:bg-orange-600 transition-all text-white py-3 px-5 block rounded text-center">Get Started Free</a> */}
                        <Button href="/">Get Started Free</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header