import { useContext } from "react"
import { Context } from "../App";

export function Login() {

    const context = useContext(Context);

    console.log(context)

    console.log(context);
    return (
        <form>
            <label htmlFor="email">
                <input type="text" id="email" name="email" />
            </label>
            <label htmlFor="password">
                <input type="text" id="password" name="password" />
            </label>
        </form>
    )
}