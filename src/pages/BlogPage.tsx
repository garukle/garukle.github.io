import PageSkeleton from "../components/PageSkeleton";
import { useEffect } from "react";

interface Props {
    onBack: () => void
    entering?: boolean
    exiting?: boolean
}

export default function BlogPage({onBack, entering, exiting}: Props) {
    useEffect(() => {
        document.title = 'Blog'
        return () => {document.title = 'Main Menu'}
    }, [])

    return (
        <PageSkeleton label="BLOG" color="#6850d8" borderTop="#c0b0f8" borderRight="#5040a0" borderBottom="#5040a0" onBack={onBack} entering={entering} exiting={exiting}>
            <p>Coming Soon!</p>
        </PageSkeleton>
    )
}