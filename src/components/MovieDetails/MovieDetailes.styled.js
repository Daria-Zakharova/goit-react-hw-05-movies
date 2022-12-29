import styled from "@emotion/styled";

export const MovieDetailed = styled.div`
    padding: 40px 0 0;

    .details-title {
        margin: 0 0 40px 100px;
        font-weight: 700;
    }

    .details-list {
        list-style: disc;
        list-style-position: inside;
        padding: 0 100px 40px;
        border-bottom: 2px solid #000;

        a:hover {
            text-decoration: underline;
        }
    }
`;