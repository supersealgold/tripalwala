import dynamic from "next/dynamic";


const MapComponent = dynamic(() => import("./Map"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-surface-200 dark:bg-surface-800 animate-pulse rounded-2xl flex items-center justify-center">
            <span className="text-surface-500">Loading Map...</span>
        </div>
    ),
});

export default MapComponent;
