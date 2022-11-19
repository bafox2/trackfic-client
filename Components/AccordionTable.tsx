import { createStyles, Table } from '@mantine/core';
import { DateTime } from 'luxon';

const useStyles = createStyles((theme) => ({
	header: {
		position: 'sticky',
		top: 0,
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		transition: 'box-shadow 150ms ease',

		'&::after': {
			width: 'inherit',
			content: '""',
			position: 'absolute',
			left: 0,
			right: 0,
			bottom: 0,
			borderBottom: `1px solid ${
				theme.colorScheme === 'dark'
					? theme.colors.dark[3]
					: theme.colors.gray[2]
			}`,
		},
	},

	th: {
		padding: '0 !important',
	},
}));

interface RowDataNode {
	__v: number;
	_id: string;
	durationGeneral: number;
	durationNow: number;
	timeRequested: string;
	trip: string;
	createdAt: string;
	updatedAt: string;
}
[];

export default function TableData({ data }: RowDataNode | any) {
	const { classes, cx } = useStyles();
	if (data.length === 0) {
		return (
			<>
				<Table sx={{ minWidth: 500 }}>
					<thead className={cx(classes.header)}>
						<tr>
							<th>Date</th>
							<th>Time</th>
							<th>Estimate with Traffic</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>No entries yet</td>
						</tr>
					</tbody>
				</Table>
			</>
		);
	}

	const transformTimeData = (time: string) => {
		const timeObject = DateTime.fromISO(time);
		return timeObject.toLocaleString(DateTime.TIME_SIMPLE);
	};

	const transformDurationData = (duration: number) => {
		const hours = Math.floor(duration / 3600);
		const minutes = Math.floor((duration % 3600) / 60);
		const seconds = Math.floor((duration % 3600) % 60);
		if (hours === 0) {
			return `${minutes}m ${seconds}s`;
		}
		return `${hours}h ${minutes}m ${seconds}s`;
	};

	const rows = data.map((row: RowDataNode) => (
		<tr key={row._id}>
			<td>{row.createdAt.slice(0, 10)}</td>
			<td>{transformTimeData(row.createdAt)}</td>
			<td>{transformDurationData(row.durationNow)}</td>
		</tr>
	));

	return (
		<>
			<Table sx={{ minWidth: 500 }}>
				<thead className={cx(classes.header)}>
					<tr>
						<th>Date</th>
						<th>Time</th>
						<th>Estimate with Traffic</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</>
	);
}
