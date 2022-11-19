import {
	Paper,
	createStyles,
	TextInput,
	PasswordInput,
	Button,
	Title,
	Text,
	Anchor,
	Divider,
} from '@mantine/core';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
	wrapper: {
		minHeight: 900,
		backgroundSize: 'cover',
		backgroundImage:
			'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
	},

	form: {
		borderRight: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
		}`,
		minHeight: 900,
		maxWidth: 450,
		paddingTop: 80,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			maxWidth: '100%',
		},
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	logo: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		width: 120,
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
	},

	error: {
		color: theme.colors.red[6],
	},
}));

const createSessionSchema = object({
	email: string()
		.min(5, {
			message: 'Email is required',
		})
		.email({ message: 'The email is invalid.' }),
	password: string().min(6, {
		message: 'Password is required',
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
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/sessions`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(values),
					credentials: 'include',
				}
			);
			const data = await response.json();
			if (data.errors) {
				setLoginError(data.errors[0].message);
				return;
			}
		} catch (error: any) {
			setLoginError(error?.message);
			return;
		}

		router.push('/dashboard');
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

					<TextInput
						label="Email address"
						placeholder="hello@gmail.com"
						size="md"
						{...register('email')}
					/>
					<Text className={classes.error} size="xl">
						{errors.email?.message}
					</Text>

					<PasswordInput
						label="Password"
						placeholder="Your password"
						mt="md"
						size="md"
						{...register('password')}
					/>
					<Text className={classes.error} size="xl">
						{errors.password?.message}
					</Text>
					<Text className={classes.error} size="xl">
						{loginError}
					</Text>
					<Button fullWidth mt="xl" size="md" type="submit">
						Login
					</Button>
					<Text align="center" mt="md">
						Don&apos;t have an account?{' '}
						<Anchor<'a'>
							href="#"
							weight={700}
							onClick={(event) => event.preventDefault()}
						>
							Register
						</Anchor>
					</Text>
					<Divider sx={{ marginTop: '10px' }} />
					<Text align="center" mt="md">
						Recruiter?{' '}
						<Anchor<'a'>
							href="#"
							weight={700}
							onClick={(event) => event.preventDefault()}
						>
							Shortcut Account
						</Anchor>
					</Text>
				</Paper>
			</form>
		</div>
	);
}
