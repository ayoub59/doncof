import DesktopAdres from './Adress&Contact/DesktopAdres'
import TabletAdres from './Adress&Contact/TabletAdres'
import MobileAdres from './Adress&Contact/MobileAdres'
import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <viewportContext.Provider value={{ width, height }}>
            {children}
        </viewportContext.Provider>
    );
};

const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
};

const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 620;
    return width < breakpoint ? <MobileAdres /> : <TabletAdres />;
};
const FinalComponent = () => {
    const { width } = useViewport();
    const breakpoint = 1200;
    return width < breakpoint ? <MyComponent /> : <DesktopAdres />;
};
function Adres() {
    // useEffect(() => {
    //     AOS.init();
    // });
    return (
        <div id="contact">
            <ViewportProvider>
                <FinalComponent />
            </ViewportProvider>
        </div>
    );
}
export default Adres
