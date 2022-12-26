import styled from "@emotion/styled";

export const MovieDetailed = styled.div`
    padding: 40px 0 0;

    .subtitle {
        margin: 0 0 40px 100px;
        font-weight: 700;
    }

    .detailsList {
        list-style: disc;
        list-style-position: inside;
        padding: 0 100px 40px;

        a:hover {
            text-decoration: underline;
        }
    }
`;