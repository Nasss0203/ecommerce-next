"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, {
		message: "Password must be at least 2 characters.",
	}),
});
const SignIn = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<div className='flex items-center justify-center'>
			<div className='w-[472px] p-6 rounded-lg bg-white shadow-md border border-neutral-200'>
				<div className='flex flex-col space-y-5'>
					<h3 className='text-2xl font-semibold text-[#1a1a1a] text-center'>
						Sign In
					</h3>
					<div>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='space-y-5'
							>
								<div className='space-y-4'>
									<FormField
										control={form.control}
										name='email'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														placeholder='Enter your email'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='password'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
												<FormControl>
													<Input
														placeholder='**********'
														{...field}
														type='password'
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className='flex items-center justify-between'>
									<div className='flex items-center space-x-2'>
										<Checkbox id='terms2' />
										<Label
											htmlFor='terms2'
											className='text-xs text-[#666] font-normal'
										>
											Remember me
										</Label>
									</div>
									<Link
										href={"/#"}
										className='text-xs text-[#666]'
									>
										Forget Password
									</Link>
								</div>
								<Button
									type='submit'
									className='w-full rounded-full'
								>
									Log in
								</Button>
								<div className='flex items-center justify-center'>
									<div className='flex items-center gap-1 text-xs'>
										<p className='text-[#666]'>
											Don’t have account?
										</p>
										<Link
											href={"/sign-up"}
											className='font-medium text-[#1a1a1a]'
										>
											Register
										</Link>
									</div>
								</div>
							</form>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
