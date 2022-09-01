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

const toLocaleString = (num: any) => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
const removeSpaces = (num: any) => num.toString().replace(/\s/g, "");

export default function Kalkulator() {
    let [count, setCount] = useState<any>({
        operator: "",
        num: 0,
        res: 0,
    });

    const numHandler = (e: any) => {
        e.preventDefault();
        const value = e.target.innerText;

        if (removeSpaces(count.num).length < 16) {
            setCount({
                ...count,
                num: count.num === 0 && value === "0" ? "0" : removeSpaces(count.num) % 1 === 0 ? toLocaleString(Number(removeSpaces(count.num + value))) : toLocaleString(count.num + value),
                res: !count.operator ? 0 : count.res,
            });
        }
    };

    const commaHandler = (e: any) => {
        e.preventDefault();
        const value = e.target.innerText;

        setCount({
            ...count,
            num: !count.num.toString().includes(".") ? count.num + value : count.num,
        });
    };

    const operationHandler = (e: any) => {
        e.preventDefault();
        const value = e.target.innerText;

        setCount({
            ...count,
            operator: value,
            res: !count.res && count.num ? count.num : count.res,
            num: 0,
        });
    };

    const equalsHandler = () => {
        if (count.operator && count.num) {
            const math = (a: number, b: number, operator: string) => (operator === "+" ? a + b : operator === "-" ? a - b : operator === "X" ? a * b : a / b);

            setCount({
                ...count,
                res: count.num === "0" && count.operator === "/" ? "Infinity" : toLocaleString(math(Number(removeSpaces(count.res)), Number(removeSpaces(count.num)), count.operator)),
                operator: "",
                num: 0,
            });
        }
    };

    const invertHandler = () => {
        setCount({
            ...count,
            num: count.num ? toLocaleString(removeSpaces(count.num) * -1) : 0,
            res: count.res ? toLocaleString(removeSpaces(count.res) * -1) : 0,
            operator: "",
        });
    };

    const percentHandler = () => {
        let num = count.num ? parseFloat(count.num) : 0;
        let res = count.res ? parseFloat(count.res) : 0;

        setCount({
            ...count,
            num: (num /= Math.pow(100, 1)),
            res: (res /= Math.pow(100, 1)),
            operator: "",
        });
    };

    const resetHandler = () => {
        setCount({
            ...count,
            operator: "",
            num: 0,
            res: 0,
        });
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField value={count.num ? count.num : count.res} fullWidth />
            </Grid>
            {Children.toArray(
                isiButton.flat().map((btn) => {
                    return (
                        <Grid item xs={3}>
                            <Button
                                className={btn === "=" ? "equals" : ""}
                                fullWidth
                                variant="contained"
                                size="large"
                                color="secondary"
                                onClick={
                                    btn === "AC"
                                        ? resetHandler
                                        : btn === "+/-"
                                        ? invertHandler
                                        : btn === "%"
                                        ? percentHandler
                                        : btn === "="
                                        ? equalsHandler
                                        : btn === "/" || btn === "x" || btn === "-" || btn === "+"
                                        ? operationHandler
                                        : btn === "."
                                        ? commaHandler
                                        : numHandler
                                }
                            >
                                {btn}
                            </Button>
                        </Grid>
                    );
                })
            )}
        </Grid>
    );
}
