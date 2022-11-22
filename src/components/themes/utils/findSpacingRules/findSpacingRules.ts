import { ITfgSpacing } from "../../interfaces";

export const findSpacingRules = 
  (spacingSizes: ITfgSpacing) =>
  (spacing: keyof ITfgSpacing) => (
    spacingSizes[spacing]
  )
