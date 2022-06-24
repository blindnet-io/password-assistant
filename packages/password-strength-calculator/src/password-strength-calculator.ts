export class PasswordStrengthCalculator {

    constructor(
        readonly components: ((password: string) => EvalResult)[],
        public requiredScore: number
    ) {}

    /**
     * Execute each component and save the EvalResults.
     * @param password
     */
    run(password: string) {
        return this.components.map(evaluator => evaluator(password))
    }

    /**
     * Add another evaluator function to a calculator instance.
     * @param evaluator
     */
    addEvaluator(evaluator: (password: string) => EvalResult) {
        this.components.push(evaluator)
    }

}

export interface EvalResult {
    pass: boolean,
    score: number,
    recommendations: {
        [language: string]: PasswordRecommendation[]
    }
}

export interface PasswordRecommendation {
    text: string
    weight: number
}