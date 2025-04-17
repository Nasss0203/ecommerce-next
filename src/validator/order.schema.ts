import { z } from "zod";

export const OrderSchema = z.object({
	cartId: z.string(),
	userId: z.string(),
	checkoutId: z.string(),
	user_address: z.object({
		street: z.string(),
		ward: z.string(),
		district: z.string(),
		city: z.string(),
	}),
});

export type OrderSchemaType = z.infer<typeof OrderSchema>;
