"use client";
import { CardItems } from "@/components/card";
import { FilterCategory } from "@/components/filter";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function Category() {
	return (
		<div>
			<div className='grid-cols-5 grid'>
				<FilterCategory></FilterCategory>
				<div className='col-span-4 flex flex-col gap-4'>
					<div className='flex items-end justify-between'>
						<Select>
							<SelectTrigger className='w-[180px]'>
								<SelectValue placeholder='Theme' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='light'>Light</SelectItem>
								<SelectItem value='dark'>Dark</SelectItem>
								<SelectItem value='system'>System</SelectItem>
							</SelectContent>
						</Select>
						<div className='flex items-center gap-1'>
							<span className='text-[#1a1a1a] text-base font-semibold'>
								52
							</span>
							<span className='text-[#666] text-base font-semibold'>
								Results Found
							</span>
						</div>
					</div>
					<div className='flex flex-col space-y-5'>
						<div className='grid grid-cols-4'>
							{Array(16)
								.fill(0)
								.map((items, index) => (
									<CardItems key={index}></CardItems>
								))}
						</div>
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									<PaginationPrevious href='#' />
								</PaginationItem>
								<PaginationItem>
									<PaginationLink href='#'>1</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationEllipsis />
								</PaginationItem>
								<PaginationItem>
									<PaginationLink href='#'>2</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationNext href='#' />
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div>
				</div>
			</div>
		</div>
	);
}
