import { useState } from "react";
import Router, { withRouter } from "next/router";
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

//get the value from the MapInput component
//what would be different if i had the component in this file

type CreateTripSchema = TypeOf<typeof createTripSchema>;

export default function Query() {
	const [active, setActive] = useState(0);
	const [cronValue, setCronValue] = useState("");
	const router = useRouter();
	const dataParams = router.query.data
		? JSON.parse(router.query.data as string)
		: null;
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

	const onSubmit = async (values: CreateTripSchema) => {
		if (dataParams) {
			const res = await fetch(`/api/trips/${dataParams._id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
				body: JSON.stringify({
					...values,
				}),
			});
			const data = await res.json();
			if (data.error) {
				setTripError(data.error);
			} else {
				router.push("/dashboard");
			}
		} else {
			const res = await fetch("/api/trips", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
				body: JSON.stringify(values),
			});
			const data = await res.json();
			if (data.error) {
				setTripError(data.error);
			} else {
				router.push("/dashboard");
			}
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

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stepper active={active} breakpoint="sm">
				<Stepper.Step label="First step" description="Title">
					<TextInput
						label="Title"
						placeholder="Work Commute"
						size="lg"
						defaultValue={dataParams ? dataParams.data.title : "tester"}
						{...register("title")}
					/>
					<Text color={"red"}>{errors.title?.message}</Text>
					<TextInput
						label="Description"
						placeholder="Late shift"
						size="lg"
						defaultValue={dataParams ? dataParams.data.description : ""}
						{...register("description")}
					/>
					<Text color={"red"}>{errors.description?.message}</Text>
				</Stepper.Step>

				<Stepper.Step label="Second step" description="Locations">
					<MapInput
						placeholder={"42 Wallabee Way Sydney, Austrailia"}
						label={"Where are you starting?"}
						control={control}
						defaultValue={dataParams ? dataParams.data.origin : ""}
						name={"origin"}
					/>
					<Text color={"red"}>{errors.origin?.message}</Text>

					<MapInput
						placeholder={"21 Seasame Street"}
						name={"destination"}
						control={control}
						defaultValue={dataParams ? dataParams.data.destination : ""}
						label={"Where are you going?"}
					/>
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
				{active === 3 && <Button type="submit">Submit</Button>}
			</Group>
		</form>
	);
}
