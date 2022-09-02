import { useEffect, useState } from "react";

type CombinationType = "ctrl" | "alt" | "shift";

export function useKeyPress(targetKey: string | number, combination?: CombinationType | CombinationType[]) {
    //https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/

    const [keyPressed, setKeyPressed] = useState<boolean>(false);

    const condition = (key: string, keyCode: number) => {
        if (typeof targetKey === "string" && key === targetKey) return true;
        if (typeof targetKey === "number" && keyCode === targetKey) return true;

        return false;
    };

    const downHandler = (props: KeyboardEvent) => {
        const { key, keyCode } = props;
        if (combination) {
            if (typeof combination === "string") {
                if (condition(key, keyCode) && props[`${combination}Key`]) setKeyPressed(!keyPressed);
            } else {
                if (condition(key, keyCode) && combination.filter((x) => props[`${x}Key`]).length === combination.length) setKeyPressed(!keyPressed);
            }
        } else {
            if (typeof targetKey === "string" && condition(key, keyCode)) setKeyPressed(!keyPressed);
            if (typeof targetKey === "number" && condition(key, keyCode)) setKeyPressed(!keyPressed);
        }
    };

    const upHandler = ({ key, keyCode }: KeyboardEvent) => {
        if (condition(key, keyCode)) setKeyPressed(false);
    };

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        // return () => {
        //     window.removeEventListener("keydown", downHandler);
        //     window.removeEventListener("keyup", upHandler);
        // };
    }, []);

    return keyPressed;
}
