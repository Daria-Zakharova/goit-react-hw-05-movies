import styled from "@emotion/styled";

export const Movies = styled.ul`
    padding: 40px 100px;
    line-height: 1.5;
    width: fit-content;
    
    li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px 10px;
        margin-bottom: 10px;

        a{
            transition: text-decoration 200ms linear;
            &:hover {
                text-decoration: underline;
            } 
        }

        span {
            display: none;
        }

        .show-info-icon {
            transition: transform 100ms linear;
        }

        .show-info-icon:hover {
            transform: rotate(90deg);

            &~span {
                display: block;
                width: 100%;
                font-size: 14px;
            }
        }
    }`;
