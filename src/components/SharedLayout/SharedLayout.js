import { Header} from "components/Nav/Nav"
import { Outlet } from "react-router-dom"

export const SharedLayout = () => {
    return (
        <>
            <Header buttons = {['home', 'movies']}/>
            <Outlet/>
        </>
    )
}