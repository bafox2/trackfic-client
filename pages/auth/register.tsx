import { useState } from "react";
import {
	Paper,
	createStyles,
	TextInput,
	PasswordInput,
	Checkbox,
	Button,
	Title,
	Text,
	Anchor,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";

const createUserSchema = object({
	name: string().nonempty({
		message: "Name is required",
	}),
	password: string()
		.min(6, "Password too short - should be 6 chars minimum")
		.nonempty({
			message: "Password is required",
		}),
	passwordConfirmation: string().nonempty({
		message: "passwordConfirmation is required",
	}),
	email: string({
		required_error: "Email is required",
	})
		.email("Not a valid email")
		.nonempty({
			message: "Password is required",
		}),
}).refine((data) => data.password === data.passwordConfirmation, {
	message: "Passwords do not match",
	path: ["passwordConfirmation"],
});

type CreateUserInput = TypeOf<typeof createUserSchema>;

const useStyles = createStyles((theme) => ({
	wrapperForm: {
		minHeight: 900,
		backgroundSize: "cover",
		backgroundImage:
			"url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
	},

	divForm: {
		borderRight: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
		}`,
		minHeight: 900,
		maxWidth: 450,
		paddingTop: 80,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			maxWidth: "100%",
		},
	},

	title: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	logo: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		width: 120,
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
	},
	error: {
		color: theme.colors.red[6],
	},
}));

export default function AuthRegister() {
	const { classes } = useStyles();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<CreateUserInput>({
		resolver: zodResolver(createUserSchema),
	});
	const router = useRouter();
	const [registerError, setRegisterError] = useState();

	async function onSubmit(values: CreateUserInput) {
		console.log(process.env.NEXT_PUBLIC_API_URL);
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/users`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
					credentials: "include",
				}
			);
			const data = await response.json();

			router.push("/login");
			console.log(data);
		} catch (error: any) {
			setRegisterError(error.message);
			console.log(error);
		}
	}

	return (
		<div className={classes.wrapperForm}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Paper className={classes.divForm} radius={0} p={30}>
					<Text className={classes.error} size="xl">
						{registerError}
					</Text>
					<Title
						order={2}
						className={classes.title}
						align="center"
						mt="md"
						mb={50}
					>
						Welcome to Trackfic!
					</Title>

					<TextInput
						label="Name"
						placeholder="Josh"
						size="md"
						{...register("name")}
					/>
					<Text className={classes.error} size="sm">
						{errors.name?.message}
					</Text>

					<TextInput
						label="Email address"
						placeholder="hello@gmail.com"
						size="md"
						{...register("email")}
					/>
					<Text className={classes.error} size="sm">
						{errors.email?.message}
					</Text>

					<PasswordInput
						label="Password"
						placeholder="Your password"
						mt="md"
						size="md"
						{...register("password")}
					/>
					<Text className={classes.error} size="sm">
						{errors.password?.message}
					</Text>

					<PasswordInput
						label="Password Confirmation"
						placeholder="Your password"
						mt="md"
						size="md"
						{...register("passwordConfirmation")}
					/>
					<Text className={classes.error} size="sm">
						{errors.passwordConfirmation?.message}
					</Text>

					<Button fullWidth mt="xl" size="md" type="submit">
						Sign Up
					</Button>

					<Text align="center" mt="md">
						Already have an account?{" "}
						<Anchor<"a">
							href="login"
							weight={700}
							onClick={(event) => event.preventDefault()}
						>
							Sign in
						</Anchor>
					</Text>
				</Paper>
			</form>
		</div>
	);
}
