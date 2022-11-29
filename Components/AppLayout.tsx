import {
	AppShell,
	Footer,
	Group,
	Text,
	ActionIcon,
} from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';
import React, { ReactNode } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Header from './Header';
import HeaderLoggedin from './HeaderLoggedin';

interface Props {
	children?: ReactNode;
	fallbackData?: any;
	// any props that come into the component
}

interface User {
	user: {
		_id: number;
		name: string;
		email: string;
		createdAt: string;
		updatedAt: string;
		__v: number;
		session: string;
		iat: number;
		exp: number;
	};
}

const AppLayout: NextPage<{ fallbackData: User }> = ({
	children,
	fallbackData,
}: Props) => {
	const router = useRouter();

	const { data, mutate } = useSWR<User | null>(
		`${process.env.NEXT_PUBLIC_API_URL}/api/me`,
		fetcher,
		{ fallbackData }
	);

	//write a mutute function to update the data when the user logs out
	const onLogout = async () => {
		try {
			document.cookie =
				'acccessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
			document.cookie =
				'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
			router.push('/');
			router.reload();
			mutate(null);
		} catch (error: any) {
			//eslint-disable-next-line no-console
			console.log(error);
		}
	};

	return (
		<AppShell
			sx={(theme) => ({
				main: {
					backgroundColor:
						theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
					width: '100vw',
					height: '100vh',
				},
				paddingLeft: 0,
				paddingRight: 0,
			})}
			fixed
			header={
				data?.user?.name !== 'Guest' || null || undefined ? (
					<HeaderLoggedin logout={onLogout} />
				) : (
					<Header />
				)
			}
			footer={
				<Footer height={50} p="sm">
					<Group position="apart" spacing="xl">
						<Text size="sm">
							<span>bfox © 2022</span>
						</Text>
						<Text size="sm">
							<span style={{ fontWeight: 'bolder' }}>Trackfic</span>
						</Text>
						<Link href="https://github.com/bafox2" passHref>
							<a target="_blank" rel="noopener noreferrer">
								<ActionIcon component={IconBrandGithub}>Next link</ActionIcon>
							</a>
						</Link>
					</Group>
				</Footer>
			}
		>
			{children}
		</AppShell>
	);
};

export default AppLayout;

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await fetcher(`${process.env.NEXT_PUBLIC_API_URL}/api/me`);

	return { props: { fallbackData: data } };
};
