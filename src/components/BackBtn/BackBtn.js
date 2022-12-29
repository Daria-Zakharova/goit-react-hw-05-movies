import { BackLink } from "./BackBtn.styled"

export const BackBtn = ({location}) => {
    return <BackLink to = {location}> &#129044; Back </BackLink>
}