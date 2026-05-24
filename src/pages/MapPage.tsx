import PageSkeleton from "../components/PageSkeleton";
import { useEffect } from "react";

interface Props {
    onBack: () => void
    entering?: boolean
    exiting?: boolean
}

export default function MapPage({onBack, entering, exiting}: Props) {
    useEffect(() => {
        document.title = 'Hoenn Map'
        return () => {document.title = 'Main Menu'}
    }, [])

    return (
        <PageSkeleton label="HOENN MAP" color="#20c068" borderTop="#90f860" borderRight="#488838" borderBottom="#488838" onBack={onBack} entering={entering} exiting={exiting}>
            <p>Coming Soon!</p>
        </PageSkeleton>
    )
}