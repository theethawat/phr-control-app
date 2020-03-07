import { VitalSignDataType } from "../Utility/VitalSignDataType"
import { Disease } from "../Utility/Disease"
import { UICategory } from "../Utility/UICategory"
export default interface IUserInterfaceChoice {
  category: UICategory
  selectDisease?: Disease
  selectDataType?: VitalSignDataType
}
