import { useState } from "react";
import { Stepper, Button, Group, TextInput, Code, Text } from "@mantine/core";
import { Cron } from "react-js-cron-mantine";
import "react-js-cron/dist/styles.css";
import { useForm, useController } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { MapInput } from "../../Components/MapInput/MapInput";

const createTripSchema = object({
	title: string().min(1, {
		message: "Email is required",
	}),
	description: string(),
	origin: string().min(1, {
		message: "Origin is required",
	}),
	destination: string().min(1, {
		message: "Destination is required",
	}),
	schedule: string().min(1, {
		message: "Password is required",
	}),
});

type CreateTripSchema = TypeOf<typeof createTripSchema>;

export default function Demo() {
	const [active, setActive] = useState(0);
	const [cronValue, setCronValue] = useState("* * * * *");
	const router = useRouter();
	const [tripError, setTripError] = useState();
	const {
		register,
		getValues,
		control,
		formState: { errors },
		handleSubmit,
	} = useForm<CreateTripSchema>({
		resolver: zodResolver(createTripSchema),
	});
	const { field } = useController({
		name: "schedule",
		control,
		defaultValue: "* * * * *",
	});
	const { field: title } = useController({
		name: "title",
		control,
		defaultValue: "",
	});
	const { field: description } = useController({
		name: "description",
		control,
		defaultValue: "",
	});
	const { field: origin } = useController({
		name: "origin",
		control,
		defaultValue: "",
	});
	const { field: destination } = useController({
		name: "destination",
		control,
		defaultValue: "",
	});

	const onSubmit = async (values: CreateTripSchema) => {
		console.log(process.env.NEXT_PUBLIC_API_URL);
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/trips/`,
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
			router.push("/dashboard");
			console.log(data);
		} catch (error: any) {
			setTripError(error.message);
			console.log(error);
		}
	};

	const nextStep = () =>
		setActive((current) => {
			// if (form.validate().hasErrors) {
			// 	return current;
			// }
			return current < 4 ? current + 1 : current;
		});

	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	console.log(getValues(), "getValues");
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stepper active={active} breakpoint="sm">
				<Stepper.Step label="First step" description="Title">
					<TextInput
						label="Title"
						placeholder="Work Commute"
						size="lg"
						{...title}
					/>
					<Text color={"red"}>{errors.title?.message}</Text>
					<TextInput
						label="Description"
						placeholder="Late shift"
						size="lg"
						{...description}
					/>
					<Text color={"red"}>{errors.description?.message}</Text>
				</Stepper.Step>

				<Stepper.Step label="Second step" description="Locations">
					<TextInput
						label="Origin"
						placeholder="42 Wallaby Way, Sydney"
						size="lg"
						{...origin}
					/>
					<MapInput />
					<Text color={"red"}>{errors.origin?.message}</Text>
					<TextInput
						label="Destination"
						placeholder="78 Downing Street, Sydney"
						size="lg"
						{...destination}
					/>

					<MapInput />
					<Text color={"red"}>{errors.destination?.message}</Text>
				</Stepper.Step>
				<Stepper.Step label="Third step" description="Schedule">
					<Cron
						{...field}
						value={cronValue}
						setValue={(value: string) => {
							setCronValue(value);
							field.onChange(value);
						}}
					/>
					<Text color={"red"}>{errors.schedule?.message}</Text>
				</Stepper.Step>
				<Stepper.Completed>
					Completed! Form values:
					<Code block mt="xl">
						{JSON.stringify(getValues(), null, 2)}
					</Code>
				</Stepper.Completed>
			</Stepper>

			<Group position="right" mt="xl">
				{active !== 0 && (
					<Button variant="default" onClick={prevStep}>
						Back
					</Button>
				)}
				{tripError && <p>{tripError}</p>}
				{active !== 3 && <Button onClick={nextStep}>Next step</Button>}
			</Group>
		</form>
	);
}
