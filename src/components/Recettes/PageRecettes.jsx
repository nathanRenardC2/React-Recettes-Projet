import Menu from "../Menu";
import Recettes from "./Recettes";

export default function PageRecettes() {

    return (
        <>
            <Menu />
            <div className="h-full bg-white dark:bg-slate-700">
                <Recettes />
            </div>
        </>
    );
}