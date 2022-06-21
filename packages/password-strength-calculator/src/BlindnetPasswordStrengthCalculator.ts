import { PasswordStrengthCalculator, EvalResult } from "./index";
import { passwordEntropy } from "fast-password-entropy-ts"

/**
 * The Blindnet password strength calculator created using the calculator
 * and component interfaces.
 *
 * Additional components may be added to the calculator by extending the
 * PasswordStrengthCalculator class, in the same fashion as below.
 */
class BlindnetPasswordStrengthCalculator extends PasswordStrengthCalculator {



}

const entropyEvaluator = (password: string): EvalResult => {
        const entropy = passwordEntropy(password)
        return undefined;
}

const zxcvbnEvaluator = (password: string): EvalResult => {
    return undefined
}