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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
	wrapper: {
		minHeight: 900,
		backgroundSize: "cover",
		backgroundImage:
			"url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
	},

	form: {
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

const createSessionSchema = object({
	email: string().min(1, {
		message: "Email is required",
	}),
	password: string().min(1, {
		message: "Password is required",
	}),
});

type CreateSessionInput = TypeOf<typeof createSessionSchema>;

export default function AuthenticationImage() {
	const { classes } = useStyles();
	const router = useRouter();
	const [loginError, setLoginError] = useState();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<CreateSessionInput>({
		resolver: zodResolver(createSessionSchema),
	});

	const onSubmit = async (values: CreateSessionInput) => {
		console.log(process.env.NEXT_PUBLIC_API_URL);
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/sessions`,
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
			router.push("/");
			console.log(data);
		} catch (error: any) {
			setLoginError(error.message);
			console.log(error);
		}
	};

	return (
		<div className={classes.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Paper className={classes.form} radius={0} p={30}>
					<Title
						order={2}
						className={classes.title}
						align="center"
						mt="md"
						mb={50}
					>
						Welcome back to Trackfic!
					</Title>
					<Text className={classes.error} size="xl">
						{loginError}
					</Text>
					<TextInput
						label="Email address"
						placeholder="hello@gmail.com"
						size="md"
						{...register("email")}
					/>
					<Text className={classes.error} size="xl">
						{errors.email?.message}
					</Text>

					<PasswordInput
						label="Password"
						placeholder="Your password"
						mt="md"
						size="md"
						{...register("password")}
					/>
					<Text className={classes.error} size="xl">
						{errors.password?.message}
					</Text>
					{/* <Checkbox label="Keep me logged in" mt="xl" size="md" /> */}
					<Button fullWidth mt="xl" size="md" type="submit">
						Login
					</Button>
					<Text align="center" mt="md">
						Don&apos;t have an account?{" "}
						<Anchor<"a">
							href="#"
							weight={700}
							onClick={(event) => event.preventDefault()}
						>
							Register
						</Anchor>
					</Text>
				</Paper>
			</form>
		</div>
	);
}
