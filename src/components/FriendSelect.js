import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

import { Button, Typography } from '@material-ui/core'
import FriendCard from './FriendCard'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}));
  

export class FoodSelect extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    goBack = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { values } = this.props
        return (
			
            <Grid container
                direction='column'
                justify='center'
                alignItems='center'
                spacing={3}
            >
                <Grid item />
                
                <Grid item container spacing={3} justify='center'>
                         <Grid item xs={12} sm={7}>
                         <Typography variant='h5' align='center' className={useStyles.typographyStyles}>
                            Select who you want to invite.
                        </Typography>
                        </Grid>

						{/* Friend Cards */}
                        { values.friends.map(friend => 
                            <Grid item xs={12} sm={6} lg={2}>
							    <FriendCard name={friend}/>
                            </Grid>
                        )}

                            
                        
						
                        {/* Next and Back Buttons */}
                        <Grid item container xs={12} 
                            justify='center'
                            alignItems='stretch'
                            spacing={3}
                        >        
                                <Grid item xs={6} sm={4}>
                                <Button 
                                    variant='contained'
                                    color="secondary"
                                    fullWidth={true}
                                    onClick={this.goBack}
                                >
                                    Back
                                </Button>
                                </Grid>

                                <Grid item xs={6} sm={4}>
                                <Button 
                                    variant='contained'
                                    color="secondary"
                                    fullWidth={true}
                                    onClick={this.continue}
                                >
                                    Next
                                </Button>
                                </Grid>
                        </Grid>
                </Grid>
            </Grid>
        )
    }
}


export default FoodSelect