import styled, { css } from 'styled-components'

const Button = styled.button<{ $outline?: boolean }>`
    display: inline-block;
    padding: 8px 16px;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #9353ff;
    border: 1px solid #9353ff;
    color: #fff;

    &:hover {
        opacity: 0.8;
    }

    ${({ $outline }) =>
        $outline &&
        css`
            background-color: transparent;
            border: 1px solid #fff;
            color: #fff;
        `}
`

export default Button
