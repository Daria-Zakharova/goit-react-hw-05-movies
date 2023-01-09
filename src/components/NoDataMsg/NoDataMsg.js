import { Msg } from "./NoDataMsg,styled"

export const NoDataMsg = ({message, margin = false}) => {
    return (
        <Msg margin={margin}>{message}</Msg>
    )
}