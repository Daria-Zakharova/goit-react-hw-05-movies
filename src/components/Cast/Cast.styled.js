import styled from "@emotion/styled";

export const Actor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;

    .photo {
        width: 150px;
        height: 200px;
        object-fit: cover;
    }
    .name {
        font-weight: 700;
    }
`;

export const CastList = styled.ul`
    padding: 40px 100px;
    display: flex;
    flex-wrap: wrap;

    li {
        flex-basis: 20%;
    }

    li:not(:last-of-type) {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px dotted #eee;
    }
`;