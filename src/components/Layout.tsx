import { cn } from "~/lib/utils";
import { Header, Footer } from "./index";

type LayoutProps = Readonly<{ className?: string; }> & React.PropsWithChildren;

const Layout: React.FC<LayoutProps> = ({ className, children }) => {
    return (
        <>
            <div
                id="root"
                className={cn("pt-4 md:p-4 md:pb-0 bg-radial from-card to-background", className)}
            >
                <header className="slide-down pl-4 md:p-0">
                    <Header />
                </header>
                <main>{children}</main>
                <footer className="slide-up fixed inset-x-0 bottom-0">
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default Layout;
