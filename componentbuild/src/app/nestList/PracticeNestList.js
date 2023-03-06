import { Inbox, Send, Star } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { grey, red } from '@mui/material/colors';
import { useState } from 'react';
import NestList from './NestList';
import TableDemo from '../component/tableDemo/TableDemo';
import Practice from '../dataTablePractice/Practice';

export default function PracticeNestList() {
    //Data---------------------------------------------------
    const [openStatus, setOpenStatus] = useState(['', false, false, false, false, false, false, false, false]);
    const [page, setPage] = useState(<>empty</>);
    const menu = [
        {
            text: 'Item1',
            icon: <Send />,
            url: <TableDemo />
        },
        {
            text: 'Item2',
            icon: <Inbox />,
            child: [{
                text: 'Item2-1',
                icon: <Star />,
                url: <Practice />
            }, {
                text: 'Item2-2',
                icon: <Star />,
                url: '#2-2'
            }, {
                text: 'Item2-3',
                icon: <Star />,
                url: '#2-3'
            }]
        },
        {
            text: 'Item3',
            icon: <Inbox />,
            child: [{
                text: 'Item3-1',
                icon: <Star />,
                url: '#3-1'
            }, {
                text: 'Item3-2',
                icon: <Star />,
                url: '#3-2'
            }]
        },
        {
            text: 'Item4',
            icon: <Inbox />,
            child: [{
                text: 'Item4-1',
                icon: <Star />,
                url: <Practice />
            }, {
                text: 'Item4-2',
                icon: <Star />,
                url: '#4-2'
            }, {
                text: 'Item4-3',
                icon: <Star />,
                url: '#4-3'
            }]
        }
    ];

    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const clickEven = (openIndex) => {
        let tempOpenStatus = Object.assign([], openStatus);
        tempOpenStatus[openIndex] = !openStatus[openIndex];
        setOpenStatus(tempOpenStatus);
    }

    const showEven = (url) => {
        setPage(url);
    }
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let element = (
        <Grid container spacing={1}>
            <Grid
                item
                xs={16}
                sx={{
                    backgroundColor: grey[600],
                    color: red['A100']
                }}
            >
                Practice For NestList
            </Grid>
            <Grid
                item
                xs={2}
                sx={{
                    backgroundColor: grey[300],
                    color: red['A100']
                }}
            >
                <NestList
                    data={menu}
                    openStatus={openStatus}
                    onClick={clickEven}
                    onShow={showEven}
                />
            </Grid>
            <Grid
                item
                xs={6}
                sx={{
                    ml: 10
                }}
            >
                {page}
            </Grid>
        </Grid>
    );
    return element;
    //-------------------------------------------------Render
}