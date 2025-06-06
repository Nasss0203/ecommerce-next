"use client";
import { register } from "@/api/auth.api";
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
import { IBackend } from "@/types";
import { IAuth } from "@/types/auth";
import { RegisterSchema, RegisterSchemaType } from "@/validator/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const SignUp = () => {
	const form = useForm<RegisterSchemaType>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: "",
			username: "",
			password: "",
		},
	});

	const mutation = useMutation({
		mutationFn: (values: RegisterSchemaType) => register(values),
		onSuccess: (data: IBackend<IAuth>) => {
			toast.success(data.message);
			form.reset();
		},
		onError: (error) => {
			console.error("Đăng ký thất bại:", error);
			toast.error("Register fail");
		},
	});

	function onSubmit(values: RegisterSchemaType) {
		mutation.mutate(values);
	}

	return (
		<div className='flex items-center justify-center'>
			<div className='w-[472px] p-6 rounded-lg bg-white shadow-md border border-neutral-200'>
				<div className='flex flex-col space-y-5'>
					<h3 className='text-2xl font-semibold text-[#1a1a1a] text-center'>
						Sign Up
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
										name='username'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Username</FormLabel>
												<FormControl>
													<Input
														placeholder='Enter your username'
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
								<div className='flex items-center space-x-2'>
									<Checkbox id='terms2' />
									<Label
										htmlFor='terms2'
										className='text-xs text-[#666] font-normal'
									>
										Accept all terms & Conditions
									</Label>
								</div>
								<Button
									type='submit'
									className='w-full rounded-full'
								>
									Create Account
								</Button>
								<div className='flex items-center justify-center'>
									<div className='flex items-center gap-1 text-xs'>
										<p className='text-[#666]'>
											Already have account
										</p>
										<Link
											href={"/sign-in"}
											className='font-medium text-[#1a1a1a]'
										>
											Login
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

export default SignUp;
