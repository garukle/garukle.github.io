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
        <PageSkeleton label="BLOG" color="#6850d8" borderTop="#c0b0f8" borderRight="#5040a0" borderBottom="#5040a0" onBack={onBack}>
            <p>Coming Soon!</p>
        </PageSkeleton>
    )
}