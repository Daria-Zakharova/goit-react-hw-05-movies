import styled from "@emotion/styled";

export const Movies = styled.ul`
    padding: 40px 100px;
    line-height: 1.5;
    width: fit-content;
    
    li {
        position: relative;
        display: flex;
        gap: 5px 10px;
        margin-bottom: 10px;

        svg {
            position: absolute;
        }

        .disabled-info-icon {
            opacity: .2;
        }
        .show-info-icon {
            transition: transform 100ms linear;
        }

        .show-info-icon:hover {
            transform: rotate(90deg);

            &~div p {
                display: block;
                padding: 20px;
                font-size: 16px;
                background-color: #ddd;
            }
        }

        .movie-item-wrap {
           padding-left: 40px;
           max-width: 600px;

            a {                
                transition: text-decoration 200ms linear;
                
                &:hover {
                    text-decoration: underline;
                } 
            }

            p {
                display: none;
            }
        }
    }`;
