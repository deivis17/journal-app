import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({drawerWidth=280}) => {
  return (
    <Box component='nav'
    sx={{ width: {sm: drawerWidth}, flexShrink: {sm:0}}}> 

    <Drawer 
    variant="permanent"
    open={true}
    sx={{
        display:{xs:'block'},
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
    }}>

        <Toolbar>
            <Typography variant='h6' noWrap component='div'>Deivis Marchán</Typography>
        </Toolbar>
        <Divider />

        <List>
            {
                ['January', 'February', 'March', 'April', 'May', 'June'].map(text=>(
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot/>
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={text}/>
                                <ListItemText secondary={'Nulla minim nisi non elit commodo ea ex aliquip ea enim Lorem non sint.'}/>
                            </Grid>
                        </ListItemButton>

                    </ListItem>
                ))
            }
        </List>

    </Drawer>

    </Box>
    )
}
