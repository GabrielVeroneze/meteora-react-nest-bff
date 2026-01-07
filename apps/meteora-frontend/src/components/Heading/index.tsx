import styled from 'styled-components'

const Heading = styled.h2<{ $dark?: boolean }>`
    text-align: center;
    color: ${(props) => (props.$dark ? '#FFF' : '#212529')};
    font-weight: ${(props) => (props.$dark ? '500' : '400')};
    margin: 0;
    font-size: 32px;
`

export default Heading
