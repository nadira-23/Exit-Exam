import React from 'react'
import {  Button, Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';


const App = () => {
  
         

  return (
    <>
   
  <Button style={{width:'100%'}} variant="contained">ADD</Button>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3, 4, 5, 6].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        
        return (
          
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                
              </IconButton>
            }
            disablePadding
          >
           
            <ListItemButton role={undefined} 
            // onClick={handleToggle(value)}
             dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  // checked={checked.includes(value)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
                
              </ListItemIcon>
              
               <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> 
            </ListItemButton>
            <Button variant="contained">Delete</Button>
          </ListItem>
         
        );
        
      })}
    </List>
  
    </>
  );
  
}

export default App