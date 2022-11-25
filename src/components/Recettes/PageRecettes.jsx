import Menu from "../Menu";
import Recettes from "./Recettes";

export default function PageRecettes() {
    return (
        <>
            <Menu />
            <div className="h-screen">
                <Recettes />
            </div>
        </>
    );
}