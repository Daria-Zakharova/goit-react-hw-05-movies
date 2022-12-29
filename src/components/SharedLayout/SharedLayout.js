import { Header} from "components/Nav/Nav";
import { Suspense } from "react";
import { PulseLoader } from "react-spinners";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return (
        <>
            <Header buttons = {['home', 'movies']}/>
            <Suspense fallback={<div>Loading...<PulseLoader color="#b4b4b4"
            margin={10}
            size={10}
            speedMultiplier={0.7}/></div>}>
                <Outlet/>
            </Suspense>            
        </>
    )
}