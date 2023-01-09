import styled from "@emotion/styled";

export const Movies = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    line-height: 1.5;
    
    li {
        flex-basis: calc((100% - 120px)/4);
        max-width: 500px;
        position: relative;
        display: flex;
        gap: 5px 10px;
        margin-bottom: 10px;
        box-shadow: 0px 1px 2px #444;
        overflow: hidden;

        svg {
            position: absolute;
            z-index: 4;
            bottom: 20px;
            right: 10px;
            stroke: currentColor;
            color: #000;
        }

        .disabled-info-icon {
            opacity: 0;
        }
        .show-info-icon {
            transition: transform 100ms linear;
        }

        .show-info-icon:hover {
            color: #fff;

            &~div p {
                transform: translateY(-100%);
                z-index: 2;
            }
        }

        .movie-item-wrap {
           max-width: 600px;

           .poster {
            aspect-ratio: .67;
            object-fit: contain;
            filter: grayscale(.9);
            transition: filter 350ms linear;
           }

            .title { 
                display: block;       
                padding: 10px 40px 20px 20px;
                transition: text-decoration 200ms linear;
            }

            p {
                position: absolute;
                top: 100%;
                display: block;
                padding: 20px;
                padding-right: 40px;
                font-size: 18px;
                box-shadow: 1px 1px 2px #444;
                background-color: #aaa;
                
                transform: translateY(100%);
                transition: transform 350ms linear;
            }

            a:hover .title{
                text-decoration: underline;
            }
            a:hover .poster{
                filter: none;
            }
        }
    }`;
