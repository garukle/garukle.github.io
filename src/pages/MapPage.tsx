import PageSkeleton from "../components/PageSkeleton";
import { useEffect } from "react";

interface Props {
    onBack: () => void
}

export default function MapPage({onBack}: Props) {
    useEffect(() => {
        document.title = 'Hoenn Map'
        return () => {document.title = 'Main Menu'}
    }, [])

    return (
        <PageSkeleton label="HOENN MAP" color="var(--color-green-400)" borderTop="var(--color-green-300)" borderRight="var(--color-green-500)" borderBottom="var(--color-green-500)" onBack={onBack}>
            <p>Coming Soon!</p>
        </PageSkeleton>
    )
}