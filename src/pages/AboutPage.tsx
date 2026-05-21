import PageSkeleton from "../components/PageSkeleton";
import { useEffect } from "react";

interface Props {
    onBack: () => void
}

export default function AboutPage({onBack}: Props) {
    useEffect(() => {
        document.title = 'About Me'
        return () => {document.title = 'Main Menu'}
    }, [])

    return (
        <PageSkeleton label="ABOUT ME" color="var(--color-olive-400)" borderTop="var(--color-olive-300)" borderRight="var(--color-olive-500)" borderBottom="var(--color-olive-500)" onBack={onBack}>
            <p>Coming Soon!</p>
        </PageSkeleton>
    )
}