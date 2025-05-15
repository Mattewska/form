import { useContext } from "react"
import { Context } from "../App";

export function Login() {

    const context = useContext(Context);
    
    return (
        <form>
            <div>
                <label htmlFor="email">
                    <input type="text" id="email" name="email" />
                </label>
            </div>
            <div>
                <label htmlFor="password">
                    <input type="text" id="password" name="password" />
                </label>
            </div>
        </form>
    )
}