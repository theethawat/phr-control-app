// As same as Database Structure
export default interface IVitalSignAdvice {
  advice_danger: string
  advice_risk: string
  advice_safe: string
  age_danger_amount: number[]
  age_risk_amount: number[]
  age_safe_amount: number[]
  disease: string[]
  result_amount: number[]
}
