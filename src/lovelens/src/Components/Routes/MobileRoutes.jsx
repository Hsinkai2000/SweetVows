import { Route, Routes } from 'react-router-dom';
import { NavigationPaths } from './NavigationPaths';
import EnterRoom from "../Mobile/EnterRoom";

export default function MobileRoutes() {
    return (
        <Routes>
            <Route
                path={NavigationPaths.enterRoomPath}
                element={<EnterRoom />}
            ></Route>
        </Routes>
    );
}