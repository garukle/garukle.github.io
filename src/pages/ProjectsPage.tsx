import PageSkeleton from "../components/PageSkeleton";
import { useEffect } from "react";

interface Props {
    onBack: () => void
}

export default function ProjectPage({onBack}: Props) {
    useEffect(() => {
        document.title = 'Projects'
        return () => {document.title = 'Main Menu'}
    }, [])

    return (
        <PageSkeleton label="PROJECTS" color="var(--color-red-400)" borderTop="var(--color-red-300)" borderRight="var(--color-red-500)" borderBottom="var(--color-red-500)" onBack={onBack}>
            <p>Coming Soon!</p>
        </PageSkeleton>
    )
}