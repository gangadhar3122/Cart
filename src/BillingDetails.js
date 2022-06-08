import { Box, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'

const BillingDetails = () => {
    return (
        <div>
            <Container  maxWidth="sm">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField id="margin-dense" margin="dense" placeholder="COUPON CODE" label="COUPON CODE" InputProps={{ endAdornment: <InputAdornment position='start'>APPLY</InputAdornment> }} variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
                            <Typography variant='body1'>Total MRP</Typography>
                            <Typography variant='body1'>54,000</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
                            <Typography variant='body2'>Promotions</Typography>
                            <Typography variant='body2'>-27,010</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
                            <Typography variant='h6'>Total</Typography>
                            <Typography variant='h6'>26,990</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Pay via</Typography>
                    </Grid>
                    <FormControl>
                        <RadioGroup defaultValue="Debit/Credit Card">
                            <FormControlLabel value="Debit/Credit Card" control={<Radio />} label="Debit/Credit Card" />
                            <FormControlLabel value="Net Banking" control={<Radio />} label="Net Banking" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Container>
        </div>
    )
}

export default BillingDetails