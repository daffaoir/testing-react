import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Children, useState } from "react";

const isiButton = [
    ["AC", "+/-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

interface CountProps {
    operator: string;
    num: number | string;
    result: number | string;
}

const toLocaleString = (num: any) => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
const removeSpaces = (num: any) => num.toString().replace(/\s/g, "");

export default function Kalkulator() {
    const [count, setCount] = useState<CountProps>({
        operator: "",
        num: 0,
        result: 0,
    });

    const resetHandler = () => {
        setCount({
            ...count,
            operator: "",
            num: 0,
            result: 0,
        });
    };

    const invertHandler = () => {
        setCount({
            ...count,
            num: count.num ? toLocaleString(removeSpaces(count.num) * -1) : 0,
            result: count.result ? toLocaleString(removeSpaces(count.result) * -1) : 0,
            operator: "",
        });
    };

    const percentHandler = () => {
        let num = count.num ? parseFloat(typeof count.num == "number" ? count.num.toString() : count.num) : 0;
        let result = count.result ? parseFloat(String(count.result)) : 0;

        setCount({
            ...count,
            num: (num /= Math.pow(100, 1)),
            result: (result /= Math.pow(100, 1)),
            operator: "",
        });
    };

    const equalsHandler = () => {
        if (count.operator && count.num) {
            const math = (a: number, b: number, operator: string) => (operator === "+" ? a + b : operator === "-" ? a - b : operator === "X" ? a * b : a / b);

            setCount({
                ...count,
                result: count.num === "0" && count.operator === "/" ? "Infinity" : toLocaleString(math(Number(removeSpaces(count.result)), Number(removeSpaces(count.num)), count.operator)),
                operator: "",
                num: 0,
            });
        }
    };

    const operationHandler = (e: any) => {
        // e.preventDefault();
        // const value = e.target.innerText;

        setCount({
            ...count,
            operator: e,
            result: !count.result && count.num ? count.num : count.result,
            num: 0,
        });
    };

    const commaHandler = (value: any) => {
        // e.preventDefault();
        // const value = e.target.innerText;

        setCount({
            ...count,
            num: !count.num.toString().includes(".") ? count.num + value : count.num,
        });
    };

    const numHandler = (value: any) => {
        // e.preventDefault();

        if (removeSpaces(count.num).length < 16) {
            setCount({
                ...count,
                num: count.num === 0 && value === "0" ? "0" : removeSpaces(count.num) % 1 === 0 ? toLocaleString(Number(removeSpaces(count.num + value))) : toLocaleString(count.num + value),
                result: !count.operator ? 0 : count.result,
            });
        }
    };

    const fungsiHandler = (e: any) => {
        e.preventDefault();
        const param = e.target.innerText;
        const handler: any = {
            AC: () => resetHandler(),
            "+/-": () => invertHandler(),
            "=": () => equalsHandler(),
            "%": () => percentHandler(),
            ".": () => commaHandler(param),
            "+": () => operationHandler(param),
            "-": () => operationHandler(param),
            x: () => operationHandler(param),
            "/": () => operationHandler(param),
        };

        if (handler[param]) handler[param]();
        else numHandler(param);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField value={count.num ? count.num : count.result} fullWidth />
            </Grid>
            {Children.toArray(
                isiButton.flat().map((btn: any) => {
                    return (
                        <Grid item xs={3}>
                            <Button className={btn === "=" ? "equals" : ""} fullWidth variant="contained" size="large" color="secondary" onClick={fungsiHandler}>
                                {btn}
                            </Button>
                        </Grid>
                    );
                })
            )}
        </Grid>
    );
}
