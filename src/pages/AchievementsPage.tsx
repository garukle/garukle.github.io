import PageSkeleton from "../components/PageSkeleton";
import { useEffect } from "react";

interface Props {
    onBack: () => void
}

export default function AchievementsPage({onBack}: Props) {
    useEffect(() => {
        document.title = 'Achievements'
        return () => {document.title = 'Main Menu'}
    }, [])

    return (
        <PageSkeleton label="ACHIEVEMENTS" color="var(--color-pink-400)" borderTop="var(--color-pink-300)" borderRight="var(--color-pink-500)" borderBottom="var(--color-pink-500)" onBack={onBack}>
            <p>Coming Soon!</p>
        </PageSkeleton>
    )
}