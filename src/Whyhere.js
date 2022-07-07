import React from 'react'
import DesktopWhyhere from './whyHere/DesktopWhyhere'
import MobileWhyhere from './whyHere/MobileWhyhere'
import TabletWhyhere from './whyHere/TabletWhyhere'
import "./index.css";



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
    return width < breakpoint ? <MobileWhyhere /> : <TabletWhyhere />;
};
const FinalComponent = () => {
    const { width } = useViewport();
    const breakpoint = 1200;
    return width < breakpoint ? <MyComponent /> : <DesktopWhyhere />;
};
function Whyhere() {
    return (
        <div>
            <ViewportProvider>
                <FinalComponent />
            </ViewportProvider>
        </div>
    );
}

export default Whyhere