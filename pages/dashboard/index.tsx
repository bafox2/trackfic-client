import { useState } from "react";
import {
	createStyles,
	Table,
	ScrollArea,
	Text,
	Group,
	UnstyledButton,
	Center,
} from "@mantine/core";
import { keys } from "@mantine/utils";
import {
	IconSelector,
	IconChevronDown,
	IconChevronUp,
	IconSearch,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
	header: {
		position: "sticky",
		top: 0,
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		transition: "box-shadow 150ms ease",

		"&::after": {
			content: '""',
			position: "absolute",
			left: 0,
			right: 0,
			bottom: 0,
			borderBottom: `1px solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[3]
					: theme.colors.gray[2]
			}`,
		},
	},

	th: {
		padding: "0 !important",
	},

	control: {
		width: "100%",
		padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},

	icon: {
		width: 21,
		height: 21,
		borderRadius: 21,
	},

	scrolled: {
		boxShadow: theme.shadows.sm,
	},
}));
interface RowData {
	name: string;
	email: string;
	company: string;
}

interface TableSortProps {
	data: RowData[];
}

interface ThProps {
	children: React.ReactNode;
	reversed: boolean;
	sorted: boolean;
	onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
	const { classes } = useStyles();
	const Icon = sorted
		? reversed
			? IconChevronUp
			: IconChevronDown
		: IconSelector;
	return (
		<th className={classes.th}>
			<UnstyledButton onClick={onSort} className={classes.control}>
				<Group position="apart">
					<Text weight={500} size="sm">
						{children}
					</Text>
					<Center className={classes.icon}>
						<Icon size={14} stroke={1.5} />
					</Center>
				</Group>
			</UnstyledButton>
		</th>
	);
}

function filterData(data: RowData[], search: string) {
	const query = search.toLowerCase().trim();
	return data.filter((item) =>
		keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
	);
}

function sortData(
	data: RowData[],
	payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
	const { sortBy } = payload;

	if (!sortBy) {
		return filterData(data, payload.search);
	}

	return filterData(
		[...data].sort((a, b) => {
			if (payload.reversed) {
				return b[sortBy].localeCompare(a[sortBy]);
			}

			return a[sortBy].localeCompare(b[sortBy]);
		}),
		payload.search
	);
}

interface TableScrollAreaProps {
	data: { name: string; email: string; company: string }[];
}

export default function TableScrollArea({ data }: TableScrollAreaProps) {
	const { classes, cx } = useStyles();
	const [scrolled, setScrolled] = useState(false);

	data = [
		{
			name: "John Doe",
			email: "asf.aol.com",
			company: "Google",
		},
		{
			name: "John Doe",
			email: "asf.aol.com",
			company: "Google",
		},
		{
			name: "John Doe",
			email: "asf.aol.com",
			company: "Google",
		},
	];

	const rows = data.map((row) => (
		<tr key={row.name}>
			<td>{row.name}</td>
			<td>{row.email}</td>
			<td>{row.company}</td>
		</tr>
	));

	return (
		<ScrollArea
			sx={{ height: 300 }}
			onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
		>
			<Table sx={{ minWidth: 700 }}>
				<thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
					<tr>
						<th>Trip Name</th>
						<th>Date</th>
						<th>Time</th>
						<th>Estimate</th>
						<th>Estimate Optimistic</th>
						<th>Estimate Pessimistic</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</ScrollArea>
	);
}
