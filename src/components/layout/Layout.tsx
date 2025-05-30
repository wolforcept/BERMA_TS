import { Navbar, Group, Code, ScrollArea, createStyles, Title, Text, Container } from '@mantine/core';
import {
    IconNotes,
    IconCalendarStats,
    IconGauge,
    IconPresentationAnalytics,
    IconFileAnalytics,
    IconAdjustments,
    IconLock,
} from '@tabler/icons';
import React, { FC } from 'react';
import Home from '../home/Home';
import { LinksGroup } from './LinksGroup';

const mockdata = [
    { label: 'Dashboard', icon: IconGauge },
    {
        label: 'Market news',
        icon: IconNotes,
        initiallyOpened: true,
        links: [
            { label: 'Overview', link: '/' },
            { label: 'Forecasts', link: '/' },
            { label: 'Outlook', link: '/' },
            { label: 'Real time', link: '/' },
        ],
    },
    {
        label: 'Releases',
        icon: IconCalendarStats,
        links: [
            { label: 'Upcoming releases', link: '/' },
            { label: 'Previous releases', link: '/' },
            { label: 'Releases schedule', link: '/' },
        ],
    },
    { label: 'Analytics', icon: IconPresentationAnalytics },
    { label: 'Contracts', icon: IconFileAnalytics },
    { label: 'Settings', icon: IconAdjustments },
    {
        label: 'Security',
        icon: IconLock,
        links: [
            { label: 'Enable 2FA', link: '/' },
            { label: 'Change password', link: '/' },
            { label: 'Recovery codes', link: '/' },
        ],
    },
];

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        paddingBottom: 0,
    },

    header: {
        padding: theme.spacing.md,
        paddingTop: 0,
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    },

    title: {
        color: 'rgb(232, 230, 227)'
    },

    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },

    footer: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    },
}));

const Layout: FC = () => {
    const { classes } = useStyles();
    const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

    return (
        <div style={{ height: "100%", display: 'flex', flexDirection: 'row' }}>
            <Navbar height="100%" w={300} p="md" className={classes.navbar}  >
                <Navbar.Section className={classes.header}>
                    <Group position="apart">
                        <Title order={4} className={classes.title}>Image Generator</Title>
                        <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
                    </Group>
                </Navbar.Section>

                <Navbar.Section grow className={classes.links} component={ScrollArea}>
                    <div className={classes.linksInner}>{links}</div>
                </Navbar.Section>

                <Navbar.Section className={classes.footer}>
                    <Text>footer :)</Text>
                </Navbar.Section>
            </Navbar>
            <Home />
        </div>
    );
}

export default Layout