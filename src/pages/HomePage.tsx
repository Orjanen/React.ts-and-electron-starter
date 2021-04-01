import React from 'react';
import {Grid, Segment} from "semantic-ui-react";

const HomePage = () => {
    return (
       <Grid>
           <Grid.Column width={4}>
                <Segment/>
           </Grid.Column>
           <Grid.Column width={12}>
                <Segment secondary/>
           </Grid.Column>
       </Grid>
    );
}

export default HomePage;