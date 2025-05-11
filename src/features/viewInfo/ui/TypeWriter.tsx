import { useEffect, useState } from "react";

import styled from "@emotion/styled";

export const Typewriter = ({ text, onClick }: { text: string, onClick: () => void }) => {
    const [length, setLength] = useState(0);

    useEffect(() => {
        setLength(0);

        const interval = setInterval(setLength, 30, (length: number) => {
            if (++length >= text.length) {
                clearInterval(interval);
            }

            return length;
        });

        return () => clearInterval(interval);
    }, [text]);

    return <Container>
        <Button>
            {text.slice(0, length)}
        </Button>
        <TryAgain onClick={onClick}>
            {'Try again'.slice(0, length)}
        </TryAgain>
    </Container>;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Button = styled.button`
    width: 350px
`

const TryAgain = styled.button`
    margin-top: 20px;
    text-decoration: underline;
    font-size: 12px
`