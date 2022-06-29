export interface EvaluatorResult {
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

// export type Evaluator = (password: string) => EvaluatorResult
//
// export type WeightedEvaluator = [number, Evaluator]

export interface Evaluator {
    func: (password: string) => EvaluatorResult
}

export interface WeightedEvaluator extends Evaluator {
    weight: number
}

export class PasswordStrengthCalculator {

    constructor(
        readonly components: Evaluator[] | WeightedEvaluator[],
        public requiredScore: number
    ) {}

    /**
     * Execute each component and save the EvalResults.
     * @param password
     */
    run(password: string) {

        // Execute each evaluator
        const result = this.components.map(evaluator => evaluator(password))

        // Calculate total score
        // if (this.components instanceof WeightedEvaluator)

        // Combine (and sort?) recomendations
    }

    /**
     * Add another evaluator function to a calculator instance.
     * @param {Evaluator} evaluator
     */
    // addEvaluator(evaluator: Evaluator) {
    //     this.components.push(evaluator)
    // }

}

// export class PasswordEvaluator {
//
//     constructor(
//         public weight: number = 1,
//         private evaluator: Evaluator,
//     ) {
//     }
//
// }