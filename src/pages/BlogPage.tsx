import PageSkeleton from "../components/PageSkeleton";
import { useEffect } from "react";

interface Props {
    onBack: () => void
}

export default function BlogPage({onBack}: Props) {
    useEffect(() => {
        document.title = 'Blog'
        return () => {document.title = 'Main Menu'}
    }, [])

    return (
        <PageSkeleton label="BLOG" color="var(--color-blue-400)" borderTop="var(--color-blue-300)" borderRight="var(--color-blue-500)" borderBottom="var(--color-blue-500)" onBack={onBack}>
            <p>Coming Soon!</p>
        </PageSkeleton>
    )
}