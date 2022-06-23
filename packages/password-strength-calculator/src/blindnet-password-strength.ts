import { PasswordStrengthCalculator, EvalResult } from "./password-strength-calculator";
import { passwordEntropy } from "fast-password-entropy-ts"

const entropyEvaluator = (password: string): EvalResult => {
        const entropy = passwordEntropy(password)
        return undefined;
}

const zxcvbnEvaluator = (password: string): EvalResult => {
    return undefined
}

/**
 * Example use of the PasswordStrengthCalculator class with entropy and
 * zxcvbn based evaluators. Additional evaluators may be added in the same
 * fashion.
 */
const myPasswordStrengthCalculator = new PasswordStrengthCalculator(
    [
        entropyEvaluator,
        zxcvbnEvaluator
    ],
    10
)

myPasswordStrengthCalculator.run("mybadpassword")