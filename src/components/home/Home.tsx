import React, { FC, useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
                : theme.colors[theme.primaryColor][0],
    },
}));

const Home: FC = () => {

    const data = [
        { avatar: 'asd', name: 'string', email: 'string', job: 'string', id: '1' },
        { avatar: 'asd', name: 'string', email: 'string', job: 'string', id: '2' },
        { avatar: 'asd', name: 'string', email: 'string', job: 'string', id: '3' },
        { avatar: 'asd', name: 'string', email: 'string', job: 'string', id: '4' },
        { avatar: 'asd', name: 'string', email: 'string', job: 'string', id: '5' },
        { avatar: 'asd', name: 'string', email: 'string', job: 'string', id: '6' },
        { avatar: 'asd', name: 'string', email: 'string', job: 'string', id: '7' },
        { avatar: 'asd', name: 'string', email: 'string', job: 'string', id: '8' },
        { avatar: 'asd', name: 'string', email: 'string', job: 'string', id: '9' },
        { avatar: 'asd', name: 'string', email: 'string', job: 'string', id: '0' },
        { avatar: 'asd', name: 'string', email: 'string', job: 'string', id: 'a' },
        { avatar: 'asd', name: 'string', email: 'string', job: 'string', id: 'b' },
        { avatar: 'asd', name: 'string', email: 'string', job: 'string', id: 'c' },
    ]
    const { classes, cx } = useStyles();
    const [selection, setSelection] = useState(['1']);
    const toggleRow = (id: string) =>
        setSelection((current) =>
            current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
        );
    const toggleAll = () =>
        setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));

    const rows = data.map((item) => {
        const selected = selection.includes(item.id);
        return (
            <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
                <td>
                    <Checkbox
                        checked={selection.includes(item.id)}
                        onChange={() => toggleRow(item.id)}
                        transitionDuration={0}
                    />
                </td>
                <td>
                    <Group spacing="sm">
                        <Avatar size={26} src={item.avatar} radius={26} />
                        <Text size="sm" weight={500}>
                            {item.name}
                        </Text>
                    </Group>
                </td>
                <td>{item.email}</td>
                <td>{item.job}</td>
            </tr>
        );
    });

    return (
        <ScrollArea style={{ width: '100%' }}>
            <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                <thead>
                    <tr>
                        <th style={{ width: 40 }}>
                            <Checkbox
                                onChange={toggleAll}
                                checked={selection.length === data.length}
                                indeterminate={selection.length > 0 && selection.length !== data.length}
                                transitionDuration={0}
                            />
                        </th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}

export default Home