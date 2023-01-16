import { useSelector } from "react-redux"
import { RootState } from "../../../redux"

export const useAuthData = () => {
  const { identity } = useSelector((state: RootState) => state.sessionReducer)
  return {
    firstName: identity?.firstName,
    userName: identity?.username,
    emailAddress: identity?.emailAddress
  };
}
