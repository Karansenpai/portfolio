import SparklesText from "@/components/ui/SparkleText";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex flex-col justify-center items-center p-3 gap-5 m-3">
            <div>
            <SparklesText
                text="Loading"
                className="text-6xl font-bold text-center capitalize "
            />
            </div>
            <div className="flex flex-col lg:flex-row gap-[5rem] p-2 flex-wrap justify-center">
            <div className="animate-pulse">
                <div className="w-72 h-72 bg-gray-300 rounded-lg"></div>
                <div className="w-72 h-10 bg-gray-300 rounded-lg mt-2"></div>
                <div className="w-72 h-10 bg-gray-300 rounded-lg mt-2"></div>
            </div>
            <div className="animate-pulse">
                <div className="w-72 h-72 bg-gray-300 rounded-lg"></div>
                <div className="w-72 h-10 bg-gray-300 rounded-lg mt-2"></div>
                <div className="w-72 h-10 bg-gray-300 rounded-lg mt-2"></div>
            </div>
            <div className="animate-pulse">
                <div className="w-72 h-72 bg-gray-300 rounded-lg"></div>
                <div className="w-72 h-10 bg-gray-300 rounded-lg mt-2"></div>
                <div className="w-72 h-10 bg-gray-300 rounded-lg mt-2"></div>
            </div>
            <div className="animate-pulse">
                <div className="w-72 h-72 bg-gray-300 rounded-lg"></div>
                <div className="w-72 h-10 bg-gray-300 rounded-lg mt-2"></div>
                <div className="w-72 h-10 bg-gray-300 rounded-lg mt-2"></div>
            </div>
            </div>
        </div>
    )
  }