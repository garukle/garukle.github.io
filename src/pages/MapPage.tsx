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
        <PageSkeleton label="HOENN MAP" color="#20c068" borderTop="#90f860" borderRight="#488838" borderBottom="#488838" onBack={onBack}>
            <p>Coming Soon!</p>
        </PageSkeleton>
    )
}