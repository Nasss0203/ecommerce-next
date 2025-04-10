import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
	return (
		<div className='w-full border rounded-lg p-2 space-y-3'>
			<Skeleton className='w-full h-[200px] rounded-md' />

			<Skeleton className='h-4 w-[80%]' />
			<Skeleton className='h-4 w-[60%]' />

			<Skeleton className='h-4 w-[40%]' />
			<Skeleton className='h-3 w-[30%]' />

			<Skeleton className='h-4 w-[20%]' />
		</div>
	);
};

export default CardSkeleton;
